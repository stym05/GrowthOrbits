import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container narrow-container">
        <p className="eyebrow">404 · Off orbit</p>
        <h1>This page could not be found.</h1>
        <p>The route may have moved, or the link may be incorrect.</p>
        <ButtonLink href="/">Return to the homepage</ButtonLink>
      </div>
    </main>
  );
}
