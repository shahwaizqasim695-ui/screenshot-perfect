import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageHead, siteConfig } from "@/data/site-config";
import { EditorialLink } from "@/components/sections/book-sections";
export const Route = createFileRoute("/excerpt")({
  component: Excerpt,
  head: () =>
    pageHead(
      "Read an Excerpt",
      "Read a short, original passage from the introduction to LALALAND: A Hard Look.",
    ),
});
function Excerpt() {
  const [more, setMore] = useState(false);
  return (
    <section className="inner-page site-container">
      <div className="reading">
        <div className="eyebrow">Inside the Book</div>
        <h1 className="page-title">A Glimpse Into LALALAND</h1>
        <div className="flex items-center justify-between border-y border-border py-5 mb-10">
          <span className="text-primary text-xs uppercase">Introduction · Selected passages</span>
          <span className="text-muted-foreground text-[10px]">DIMITRI FLYNN</span>
        </div>
        <p className="dropcap">{siteConfig.excerpt}</p>
        {more ? (
          <>
            <p>{siteConfig.secondExcerpt}</p>
            <div className="dedication-line" />
            <p className="text-center italic">End of selected excerpt.</p>
            <EditorialLink to="/books/lalaland">Return to the Book</EditorialLink>
          </>
        ) : (
          <Button variant="outline" className="editorial-button mb-8" onClick={() => setMore(true)}>
            Continue Reading <ArrowDown />
          </Button>
        )}
        <div className="mt-10 pt-7 border-t border-border">
          <span className="body-copy">
            Original wording from the supplied manuscript, presented as two short selected passages.
            The novel’s statements are part of its fictional narrative, not independently verified
            historical claims.
          </span>
          <div className="mt-7">
            <Button asChild variant="link" className="p-0">
              <a href="#main-content">
                Back to introduction <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
