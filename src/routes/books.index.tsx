import { createFileRoute } from "@tanstack/react-router";
import { pageHead, siteConfig } from "@/data/site-config";
import { BookCover, EditorialLink, OtherWorks } from "@/components/sections/book-sections";
export const Route = createFileRoute("/books/")({
  component: Books,
  head: () =>
    pageHead(
      "Books & Other Works",
      "Explore LALALAND: A Hard Look and the literary work of Dimitri Flynn.",
    ),
});
function Books() {
  return (
    <>
      <section className="inner-page site-container">
        <div className="eyebrow">The Collection</div>
        <h1 className="page-title">Books by Dimitri Flynn</h1>
        <div className="author-grid mt-16">
          <BookCover />
          <div>
            <p className="text-primary text-xs mb-5 uppercase">Featured Novel</p>
            <h2 className="section-heading">LALALAND</h2>
            <p className="font-display text-2xl mt-2 mb-6">A HARD LOOK</p>
            <p className="body-copy mb-7">{siteConfig.book.description}</p>
            <div className="flex gap-8 flex-wrap">
              <EditorialLink to="/books/lalaland">Discover the Book</EditorialLink>
              <EditorialLink to="/excerpt">Read an Excerpt</EditorialLink>
            </div>
          </div>
        </div>
      </section>
      <OtherWorks />
    </>
  );
}
