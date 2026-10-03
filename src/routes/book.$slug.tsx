import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { getBookingAction } from "@/data/lookup";
import { practice } from "@/data/site";

// Booking actions are not pages. Each slug sends the visitor to Vagaro.
export const Route = createFileRoute("/book/$slug")({
  loader: ({ params }) => {
    if (!getBookingAction(params.slug)) throw notFound();
    throw redirect({ href: practice.bookingUrl, statusCode: 302 });
  },
  component: BookRedirect,
});

function BookRedirect() {
  return null;
}
