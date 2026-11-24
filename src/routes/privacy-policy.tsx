import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/data/site-config";
export const Route = createFileRoute("/privacy-policy")({
  component: Privacy,
  head: () =>
    pageHead(
      "Privacy Policy",
      "How the Dimitri Flynn website handles information and currently unconnected contact and newsletter forms.",
    ),
});
function Privacy() {
  return (
    <section className="inner-page site-container">
      <div className="legal">
        <div className="eyebrow">Your Privacy</div>
        <h1 className="page-title">Privacy Policy</h1>
        <p>Last updated: November 24, 2026.</p>
        <h2>Information you enter</h2>
        <p>
          Contact and newsletter services are not connected. Information entered into these forms
          stays within your current browser page and is not sent to the author, saved by this
          website, or used to subscribe you. Do not enter sensitive information.
        </p>
        <h2>Website delivery</h2>
        <p>
          The site loads fonts from Google Fonts and imagery through its hosting provider. Those
          providers may process standard connection information, such as IP addresses and browser
          details, to deliver their services. The hosting platform may also process operational logs
          or website analytics.
        </p>
        <h2>External links</h2>
        <p>
          Verified retailer links may be added in the future. External websites have their own
          privacy policies, which apply when you visit them.
        </p>
        <h2>Future changes</h2>
        <p>
          This policy will need to be updated before contact delivery, newsletter collection, or
          additional tracking services are enabled. Any future collection should explain its
          purpose, recipients, retention, and your available choices.
        </p>
        <h2>Privacy inquiries</h2>
        <p>
          Verified author contact details are not yet available. When provided, they will appear on
          the contact page.
        </p>
      </div>
    </section>
  );
}
