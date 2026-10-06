import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { attachSupabaseAuth } from "@/integrations/supabase/auth-attacher";
import { redirects } from "@/data/redirects";
import { wordpressRedirects, retiredUrls } from "@/data/wordpress-redirects";

// Strip one trailing slash so "/about/" and "/about" match the same key.
const norm = (p: string) => (p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p);
const wpMap = new Map(Object.entries(wordpressRedirects).map(([k, v]) => [norm(k), v]));
const retired = new Set(retiredUrls.map(norm));
const internalMap = new Map(Object.entries(redirects).map(([k, v]) => [norm(k), v]));

// Real 301 and 410 responses at the server, before any page renders.
// Order: retired (410), then WordPress map, then internal map.
const legacyUrlMiddleware = createMiddleware().server(async ({ next, request }) => {
  const url = new URL(request.url);
  const path = norm(url.pathname);
  if (retired.has(path)) {
    return new Response("Gone", { status: 410, headers: { "content-type": "text/plain; charset=utf-8" } });
  }
  const target = wpMap.get(path) ?? internalMap.get(path);
  // Never redirect a URL to itself ("/about/" maps to "/about", which is a live page).
  if (target && target !== url.pathname) {
    return new Response(null, { status: 301, headers: { location: target } });
  }
  return next();
});

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

// Every host except the production domain gets a noindex tag in the rendered
// HTML (plus a matching header). Crawling stays allowed so the tag is read.
const PRODUCTION_HOSTS = new Set(["rinaestheticsva.com", "www.rinaestheticsva.com"]);
const NOINDEX_META = '<meta name="robots" content="noindex, nofollow"/>';

const noindexMiddleware = createMiddleware().server(async ({ next, request }) => {
  const result = await next();
  const host = new URL(request.url).hostname.toLowerCase();
  if (PRODUCTION_HOSTS.has(host)) return result;
  const res = result.response;
  if (!(res instanceof Response)) return result;
  const headers = new Headers(res.headers);
  headers.set("x-robots-tag", "noindex, nofollow");
  const type = headers.get("content-type") ?? "";
  if (!type.includes("text/html")) {
    return { ...result, response: new Response(res.body, { status: res.status, statusText: res.statusText, headers }) };
  }
  const html = (await res.text()).replace(/<head(\s[^>]*)?>/i, (m) => `${m}${NOINDEX_META}`);
  headers.delete("content-length");
  return { ...result, response: new Response(html, { status: res.status, statusText: res.statusText, headers }) };
});

export const startInstance = createStart(() => ({
  functionMiddleware: [attachSupabaseAuth],
  requestMiddleware: [errorMiddleware, noindexMiddleware, legacyUrlMiddleware, csrfMiddleware],
}));
