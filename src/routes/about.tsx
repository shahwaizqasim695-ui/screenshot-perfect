import { createFileRoute } from "@tanstack/react-router";
import { pageHead, siteConfig } from "@/data/site-config";
import { EditorialLink, Themes, QuoteBanner } from "@/components/sections/book-sections";
export const Route = createFileRoute("/about")({
  component: About,
  head: () =>
    pageHead(
      "About the Author",
      "Meet Dimitri Flynn, New Orleans author of LALALAND: A Hard Look.",
    ),
});
function About() {
  return (
    <>
      <section className="inner-page site-container">
        <div className="author-grid">
          <div>
            <div className="eyebrow">The Voice Behind the Story</div>
            <h1 className="page-title">Dimitri Flynn</h1>
            <p className="literary text-xl mb-7">Stories of courage. Questions that remain.</p>
            <p className="body-copy mb-6">{siteConfig.author.biography}</p>
            <p className="body-copy mb-8">
              In LALALAND, Flynn follows a fictional pilot from the danger of combat search and
              rescue to the uncertainties of civilian life. The novel considers the lasting bonds of
              service, the weight of personal values, and the search for purpose beyond war.
            </p>
            <EditorialLink to="/books">Explore the Books</EditorialLink>
          </div>
          <div className="author-art">
            <img src={siteConfig.book.cover} alt="LALALAND by Dimitri Flynn" />
          </div>
        </div>
      </section>
      <QuoteBanner />
      <Themes />
    </>
  );
}
