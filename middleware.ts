export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/add-event", "/verifications", "/registrations"],
};
