import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp, ArrowUpRight, BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, subscriptionStatus } from "@/data/site-config";
const nav = [
  { to: "/", name: "Home" },
  { to: "/about", name: "About the Author" },
  { to: "/books/lalaland", name: "The Book" },
  { to: "/excerpt", name: "Read an Excerpt" },
  { to: "/books", name: "Other Works" },
  { to: "/contact", name: "Contact" },
] as const;
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 35);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", close);
    };
  }, [open]);
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:bg-background focus:p-4"
      >
        Skip to content
      </a>
      <header className={`site-header ${scrolled || open ? "scrolled" : ""}`}>
        <div className="site-container header-inner">
          <Link to="/" className="wordmark" onClick={() => setOpen(false)}>
            DIMITRI FLYNN<span className="text-primary">.</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }}>
                {n.name}
              </Link>
            ))}
          </nav>
          <Button asChild className="editorial-button header-cta">
            <Link to="/books/lalaland">
              <BookOpen /> Get the Book <ArrowUpRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mobile-nav"
            initial={{ opacity: 0, y: reduced ? 0 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>
                {n.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
export function Newsletter() {
  const [status, setStatus] = useState("");
  return (
    <section className="newsletter">
      <div className="site-container newsletter-grid">
        <div>
          <h2 className="text-3xl mb-3">Stay Connected</h2>
          <p className="body-copy">Books, future releases, and announcements from Dimitri Flynn.</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStatus(subscriptionStatus().message);
          }}
        >
          <div className="signup-controls">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              className="field"
              placeholder="Your email address"
            />
            <Button type="submit" className="editorial-button">
              Subscribe <ArrowUpRight />
            </Button>
          </div>
          <p className="text-muted-foreground text-[10px] mt-3">
            Newsletter integration pending. No email addresses are currently collected.
          </p>
          {status && (
            <p role="status" className="status-message">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="site-container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="wordmark">
              DIMITRI FLYNN<span className="text-primary">.</span>
            </Link>
            <p className="body-copy mt-5">
              Stories of courage. Questions of faith.
              <br />
              Life beyond the battlefield.
            </p>
          </div>
          <div>
            <h3 className="footer-heading">Explore</h3>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About the Author</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="footer-heading">The Books</h3>
            <div className="footer-links">
              <Link to="/books/lalaland">LALALAND: A Hard Look</Link>
              <Link to="/excerpt">Read an Excerpt</Link>
              <Link to="/books">Other Works</Link>
            </div>
          </div>
          <div>
            <h3 className="footer-heading">Get in Touch</h3>
            <div className="footer-links">
              <Link to="/contact">
                Reader & media inquiries <ArrowUpRight className="inline size-3" />
              </Link>
              {siteConfig.contactEmail && (
                <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
              )}
              <span>New Orleans</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Dimitri Flynn. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            Back to top <ArrowUp />
          </Button>
        </div>
      </div>
    </footer>
  );
}
