import { createFileRoute } from "@tanstack/react-router";
import { pageHead, siteConfig } from "@/data/site-config";
import {
  BookCover,
  EditorialLink,
  Themes,
  Dedication,
  GetBook,
} from "@/components/sections/book-sections";
export const Route = createFileRoute("/books/lalaland")({
  component: Book,
  head: () =>
    pageHead(
      "LALALAND — Book Details",
      "Enter the world of Luke Carter in LALALAND: A Hard Look, a novel by Dimitri Flynn.",
    ),
});
function Book() {
  return (
    <>
      <section className="inner-page site-container">
        <div className="author-grid">
          <div>
            <div className="eyebrow">A Novel by Dimitri Flynn</div>
            <h1 className="page-title mb-2">LALALAND</h1>
            <p className="font-display text-3xl mb-8">A HARD LOOK</p>
            <p className="literary text-xl mb-7 italic">
              Surviving the war was only the beginning.
            </p>
            <p className="body-copy">{siteConfig.book.description}</p>
            <p className="body-copy mt-5">
              Back in civilian life, Carter must confront the world he has returned to. Together
              with his former crew, he finds new opportunities that test loyalty, ambition, and the
              values he once promised to hold onto.
            </p>
            <p className="body-copy mt-5 mb-7">
              A novel about the bonds that endure, the choices that define us, and the difficulty of
              finding freedom after war.
            </p>
            <EditorialLink to="/excerpt">Read the Introduction</EditorialLink>
          </div>
          <BookCover />
        </div>
      </section>
      <Themes />
      <Dedication />
      <GetBook />
    </>
  );
}
