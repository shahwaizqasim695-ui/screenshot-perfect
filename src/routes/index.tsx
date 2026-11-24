import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  Genres,
  Story,
  Themes,
  QuoteBanner,
  AuthorBio,
  ExcerptPreview,
  Dedication,
  OtherWorks,
  GetBook,
} from "@/components/sections/book-sections";
import { Newsletter } from "@/components/layout/site-layout";
import { pageHead } from "@/data/site-config";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    pageHead(
      "LALALAND: A Hard Look",
      "Discover Dimitri Flynn’s novel of courage, brotherhood, faith, and the search for meaning beyond the battlefield.",
    ),
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <>
      <Hero />
      <Genres />
      <Story />
      <Themes />
      <QuoteBanner />
      <AuthorBio />
      <ExcerptPreview />
      <Dedication />
      <OtherWorks />
      <GetBook />
      <Newsletter />
    </>
  );
}
