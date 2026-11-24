import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deliveryStatus, pageHead, siteConfig } from "@/data/site-config";
export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () =>
    pageHead(
      "Contact",
      "Reader messages, media inquiries, interviews, and book-related contact for Dimitri Flynn.",
    ),
});
function Contact() {
  const [status, setStatus] = useState("");
  return (
    <section className="inner-page site-container">
      <div className="contact-grid">
        <div>
          <div className="eyebrow">Start a Conversation</div>
          <h1 className="page-title">Get in Touch</h1>
          <p className="literary text-xl mb-6">Every story begins with a connection.</p>
          <p className="body-copy">
            For reader messages, book-related inquiries, media requests, or interviews with Dimitri
            Flynn.
          </p>
          <div className="border-t border-border mt-8 pt-7">
            <Mail className="text-primary mb-4" />
            {siteConfig.contactEmail ? (
              <a className="text-primary" href={`mailto:${siteConfig.contactEmail}`}>
                {siteConfig.contactEmail}
              </a>
            ) : (
              <p className="body-copy">
                Verified contact details will be published here when available.
              </p>
            )}
            <p className="text-primary text-xs mt-6">
              Contact delivery is not active yet.
              <br />
              <span className="body-copy">
                This form does not currently send or store messages.
              </span>
            </p>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            setStatus(deliveryStatus().message);
          }}
        >
          <div className="form-row">
            <div>
              <label htmlFor="name" className="field-label">
                Full name
              </label>
              <input
                className="field"
                id="name"
                name="name"
                required
                minLength={2}
                autoComplete="name"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="field-label">
                Email address
              </label>
              <input
                className="field"
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Your email address"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="field-label">
              Subject
            </label>
            <select id="subject" name="subject" className="field" defaultValue="" required>
              <option value="" disabled>
                Select an inquiry
              </option>
              <option>Reader message</option>
              <option>General inquiry</option>
              <option>Media inquiry</option>
              <option>Interview request</option>
              <option>Book-related inquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="field"
              rows={7}
              required
              minLength={10}
              placeholder="Your message"
            />
          </div>
          <p className="text-muted-foreground text-xs">
            No information is collected or delivered while contact integration is pending.
          </p>
          <Button type="submit" className="editorial-button self-start">
            Send Message <ArrowUpRight />
          </Button>
          {status && (
            <p className="status-message" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
