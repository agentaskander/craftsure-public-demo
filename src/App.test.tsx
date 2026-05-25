import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("CraftSure investor demo", () => {
  it("renders the public demo narrative and privacy boundary", () => {
    const html = renderToStaticMarkup(<App />);

    expect(html).toContain("Request Partner Demo");
    expect(html).toContain("Project Confidence");
    expect(html).toContain("Homeowner journey");
    expect(html).toContain("Private System Contains:");
  });
});
