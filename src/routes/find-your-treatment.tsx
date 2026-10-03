import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent 301: the treatment finder was removed and the concerns index
// now serves that intent.
export const Route = createFileRoute("/find-your-treatment")({
  loader: () => {
    throw redirect({ href: "/concerns", statusCode: 301 });
  },
});
