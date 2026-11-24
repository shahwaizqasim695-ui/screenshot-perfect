import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  Compass,
  HeartHandshake,
  Shield,
  Stars,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, themes } from "@/data/site-config";
import type { ReactNode } from "react";
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65 }}
    >
      {children}
    </motion.div>
  );
}
export function EditorialLink({
  to,
  children,
}: {
  to: "/" | "/about" | "/books" | "/books/lalaland" | "/excerpt" | "/contact";
  children: ReactNode;
}) {
  return (
    <Button asChild variant="link" className="p-0 h-auto text-[11px] uppercase gap-3">
      <Link to={to}>
        {children}
        <ArrowRight />
      </Link>
    </Button>
  );
}
export function BookCover({ className = "" }: { className?: string }) {
  return (
    <div className={`book-object ${className}`}>
      <img
        src={siteConfig.book.cover}
        alt="Official LALALAND: A Hard Look book cover by Dimitri Flynn"
        width="284"
        height="425"
      />
    </div>
  );
}
export function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-background"
        src={siteConfig.landscape}
        alt="Illustrated jungle valley beneath an amber sunset with a distant rescue helicopter"
        fetchPriority="high"
      />
      <div className="site-container hero-inner">
        <Reveal>
          <div className="eyebrow">A Novel by Dimitri Flynn</div>
          <h1 className="hero-title">LALALAND</h1>
          <p className="hero-subtitle">A HARD LOOK</p>
          <p className="hero-line">Surviving the war was only the beginning.</p>
          <p className="hero-description">
            From the unforgiving skies of Vietnam to life beyond the battlefield. A journey through
            danger, brotherhood, faith, and the search for meaning in an uncertain world.
          </p>
          <div className="hero-actions">
            <Button asChild className="editorial-button">
              <Link to="/books/lalaland">
                Get the Book <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="outline" className="editorial-button bg-transparent">
              <Link to="/excerpt">
                <BookOpen />
                Read an Excerpt
              </Link>
            </Button>
          </div>
        </Reveal>
        <Reveal>
          <BookCover />
          <p className="book-caption">Courage. Brotherhood. The cost of freedom.</p>
        </Reveal>
      </div>
      <a className="scroll-cue" href="#the-story" aria-label="Scroll to the story">
        <span>THE STORY CONTINUES</span>
        <ChevronDown size={17} />
      </a>
    </section>
  );
}
export function Genres() {
  const icons = [Shield, Compass, Stars, HeartHandshake];
  return (
    <div className="genre-strip">
      <div className="site-container genre-inner">
        {[
          "Military Fiction",
          "Action & Adventure",
          "Faith & Morality",
          "Brotherhood & Survival",
        ].map((v, i) => {
          const Icon = icons[i] ?? Shield;
          return (
            <div className="genre-item" key={v}>
              <Icon />
              {v}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export function Story() {
  return (
    <section id="the-story" className="section">
      <div className="site-container story-grid">
        <Reveal className="story-visual">
          <img
            className="landscape"
            src={siteConfig.landscape}
            alt="Cinematic jungle landscape illustration"
            loading="lazy"
          />
          <img
            className="story-cover"
            src={siteConfig.book.cover}
            alt="LALALAND official book cover"
            loading="lazy"
          />
        </Reveal>
        <Reveal>
          <div className="eyebrow">The Story Behind the Pages</div>
          <h2 className="section-heading mb-6">Beyond the Battlefield</h2>
          <p className="body-copy">{siteConfig.book.description}</p>
          <p className="body-copy mt-4">
            Returning home, Carter discovers that leaving the battlefield does not mean escaping its
            consequences. Reunited with his former crew, he enters a new chapter of danger,
            opportunity, and difficult moral choices.
          </p>
          <blockquote className="pullquote">
            “A nihilistic unreal world of total nonsense.”
          </blockquote>
          <p className="text-[10px] text-muted-foreground mb-6">
            LUKE CARTER’S DEFINITION OF LALALAND · FROM THE MANUSCRIPT
          </p>
          <EditorialLink to="/books/lalaland">Discover the Book</EditorialLink>
        </Reveal>
      </div>
    </section>
  );
}
export function Themes() {
  return (
    <section className="section theme-section">
      <div className="site-container">
        <div className="eyebrow">Within These Pages</div>
        <h2 className="section-heading">More Than a War Story</h2>
        <div className="theme-grid">
          {themes.map((theme, i) => (
            <Reveal className="theme-item" key={theme.title}>
              <span className="theme-number">0{i + 1} /</span>
              <h3>{theme.title}</h3>
              <p className="body-copy">{theme.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export function QuoteBanner() {
  return (
    <section className="quote-banner">
      <img src={siteConfig.landscape} alt="" loading="lazy" />
      <div className="site-container relative">
        <p className="text-primary font-literary text-5xl mb-3">“</p>
        <blockquote>
          The battlefield may be left behind,
          <br />
          but its shadows remain.
        </blockquote>
        <p className="relative text-[9px] text-muted-foreground mt-6 uppercase">
          A promotional line inspired by LALALAND
        </p>
      </div>
    </section>
  );
}
export function AuthorBio() {
  return (
    <section className="section">
      <div className="site-container author-grid">
        <Reveal>
          <div className="eyebrow">Meet the Author</div>
          <h2 className="section-heading mb-7">Dimitri Flynn</h2>
          <p className="body-copy">{siteConfig.author.biography}</p>
          <p className="body-copy mt-5 mb-8">
            Through LALALAND, Flynn explores military service, sacrifice, brotherhood, faith, and
            the complexities of life beyond the battlefield.
          </p>
          <div className="flex gap-8 flex-wrap">
            <EditorialLink to="/about">About the Author</EditorialLink>
            <EditorialLink to="/books">Explore Other Works</EditorialLink>
          </div>
        </Reveal>
        <Reveal className="author-art">
          <img src={siteConfig.book.cover} alt="Dimitri Flynn’s LALALAND book" loading="lazy" />
        </Reveal>
      </div>
    </section>
  );
}
export function ExcerptPreview() {
  return (
    <section className="section excerpt-section">
      <div className="site-container excerpt-preview">
        <div className="eyebrow justify-center">Inside the Book</div>
        <h2 className="section-heading">A Glimpse Into LALALAND</h2>
        <blockquote className="literary">“{siteConfig.excerpt}”</blockquote>
        <p className="text-[10px] text-muted-foreground mb-7 uppercase">
          A direct excerpt from the introduction
        </p>
        <Button asChild variant="outline" className="editorial-button">
          <Link to="/excerpt">
            Read the Introduction <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
export function Dedication() {
  return (
    <section className="dedication site-container">
      <p className="text-primary text-[10px] uppercase">Dedicated to</p>
      <div className="dedication-line" />
      <blockquote className="literary text-xl">
        “To all who fought and died in LALALAND for Freedom”
      </blockquote>
      <p className="text-muted-foreground text-xs mt-6">
        Mike Tunney <span className="text-primary mx-4">/</span> Greg Tschida
      </p>
      <div className="dedication-line" />
    </section>
  );
}
export function OtherWorks() {
  return (
    <section className="section border-t border-border">
      <div className="site-container">
        <div className="eyebrow">The Author’s Collection</div>
        <h2 className="section-heading mb-6">More From Dimitri Flynn</h2>
        {siteConfig.otherWorks.length > 0 ? (
          <div className="theme-grid">
            {siteConfig.otherWorks.map((book) => (
              <article key={book.title}>
                <img src={book.cover} alt={book.title} loading="lazy" />
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>{book.publication}</p>
                <Button asChild>
                  <a href={book.purchaseUrl} target="_blank" rel="noreferrer">
                    View on Amazon <ArrowUpRight />
                  </a>
                </Button>
              </article>
            ))}
          </div>
        ) : (
          <>
            <p className="body-copy max-w-xl">
              Dimitri Flynn’s other works are available through Amazon Books. Verified titles and
              links will be added to this collection when available.
            </p>
            {siteConfig.amazonAuthorUrl ? (
              <Button asChild className="editorial-button mt-6">
                <a href={siteConfig.amazonAuthorUrl} target="_blank" rel="noreferrer">
                  Discover on Amazon <ArrowUpRight />
                </a>
              </Button>
            ) : (
              <p className="text-primary text-xs mt-5">Author collection link coming soon.</p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
export function GetBook() {
  return (
    <section className="section theme-section">
      <div className="site-container author-grid">
        <BookCover />
        <div>
          <div className="eyebrow">LALALAND · A Hard Look</div>
          <h2 className="section-heading mb-6">Enter the World of LALALAND</h2>
          <p className="body-copy mb-7">
            Discover a story of courage, loyalty, faith, and the lasting consequences of war.
          </p>
          {siteConfig.book.purchaseUrl ? (
            <Button asChild className="editorial-button">
              <a href={siteConfig.book.purchaseUrl} target="_blank" rel="noreferrer">
                Get Your Copy <ArrowUpRight />
              </a>
            </Button>
          ) : (
            <p className="text-primary text-sm mb-6">
              Purchase details will be announced here.
              <br />
              <span className="body-copy">A verified retailer link is not yet available.</span>
            </p>
          )}
          <EditorialLink to="/excerpt">Read an Excerpt</EditorialLink>
        </div>
      </div>
    </section>
  );
}
