import cover from "@/assets/lalaland-cover.png.asset.json";
import landscape from "@/assets/lalaland-valley.webp.asset.json";
export const siteConfig = {
  author: {
    name: "Dimitri Flynn",
    location: "New Orleans",
    biography:
      "Dimitri Flynn is the author of LALALAND: A Hard Look and lives in New Orleans. His other works are available through Amazon Books.",
  },
  book: {
    title: "LALALAND",
    subtitle: "A Hard Look",
    cover: cover.url,
    purchaseUrl: "",
    description:
      "LALALAND: A Hard Look follows Warrant Officer Luke Carter, a combat search-and-rescue helicopter pilot whose experiences in Vietnam shape his understanding of courage, loyalty, and survival.",
  },
  landscape: landscape.url,
  amazonAuthorUrl: "",
  contactEmail: "",
  newsletterEnabled: false,
  otherWorks: [] as {
    title: string;
    description: string;
    cover: string;
    purchaseUrl: string;
    publication: string;
  }[],
  excerpt: "Vietnam was a Helicopter war. This is a story about just one use of the helicopter.",
  secondExcerpt:
    "He felt this Vietnam War was living in Lalaland, a term he defined as a nihilistic unreal world of total nonsense.",
};
export const themes = [
  {
    title: "Courage & Sacrifice",
    text: "The personal cost of service. The courage to face what comes next.",
  },
  {
    title: "Brotherhood & Loyalty",
    text: "An enduring bond forged in extraordinary circumstances.",
  },
  { title: "Life After War", text: "Leaving the battlefield. Finding a way back to yourself." },
  {
    title: "Faith & Morality",
    text: "The fragile line between ambition, freedom, and what we believe.",
  },
];
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | Dimitri Flynn` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Dimitri Flynn` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
export function deliveryStatus() {
  return {
    delivered: false,
    message:
      "Messages are not being sent yet. Contact details will be published here when available.",
  };
}
export function subscriptionStatus() {
  return {
    subscribed: false,
    message: "Newsletter signup is not available yet. Please check back for author updates.",
  };
}
