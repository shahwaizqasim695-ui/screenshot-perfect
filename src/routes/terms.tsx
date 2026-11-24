import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/data/site-config";
export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () =>
    pageHead(
      "Terms of Use",
      "Terms for reading and using the Dimitri Flynn author website and selected LALALAND excerpts.",
    ),
});
function Terms() {
  return (
    <section className="inner-page site-container">
      <div className="legal">
        <div className="eyebrow">Website Information</div>
        <h1 className="page-title">Terms of Use</h1>
        <p>Last updated: November 24, 2026.</p>
        <h2>Literary content</h2>
        <p>
          This website introduces Dimitri Flynn and the novel LALALAND: A Hard Look. Fictional
          characters and events, and historical or political statements within excerpts, should not
          be interpreted as independently verified facts.
        </p>
        <h2>Copyright</h2>
        <p>
          Copyright © 2026 Dimitri Flynn. All rights reserved. The manuscript, book cover, and
          selected excerpts remain protected by their respective rights. No part of the book may be
          reproduced in any form without written permission from the author.
        </p>
        <h2>Availability and services</h2>
        <p>
          No purchase transaction takes place on this website. Retailer details are pending. Contact
          and newsletter forms are not connected and do not send or save submissions. No successful
          delivery or subscription is promised.
        </p>
        <h2>Illustrative imagery</h2>
        <p>
          Atmospheric landscape imagery on this website is generated illustration inspired by the
          cover, not authentic historical photography. It does not portray the author.
        </p>
        <h2>External websites</h2>
        <p>
          Any future retailer or author-collection links will lead to independent services. Their
          terms and availability apply separately.
        </p>
        <h2>Changes and inquiries</h2>
        <p>
          Website content may be updated as verified information becomes available. Author contact
          information will be published on the contact page when configured.
        </p>
      </div>
    </section>
  );
}
