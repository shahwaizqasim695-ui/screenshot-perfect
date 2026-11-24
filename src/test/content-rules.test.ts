import { describe, expect, it } from "vitest";
import { deliveryStatus, siteConfig, subscriptionStatus } from "@/data/site-config";
describe("Unconnected services remain honest", () => {
  it("does not claim a contact message was delivered", () =>
    expect(deliveryStatus().delivered).toBe(false));
  it("does not claim a newsletter subscription succeeded", () =>
    expect(subscriptionStatus().subscribed).toBe(false));
  it("does not invent a retailer URL", () => expect(siteConfig.book.purchaseUrl).toBe(""));
  it("does not invent other publications", () => expect(siteConfig.otherWorks).toHaveLength(0));
  it("limits public manuscript excerpts to two short selected passages", () =>
    expect((siteConfig.excerpt + " " + siteConfig.secondExcerpt).split(/\s+/).length).toBeLessThan(
      70,
    ));
});
