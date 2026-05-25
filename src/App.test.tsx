import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("CraftSure investor demo", () => {
  it("renders the public demo narrative and privacy boundary", () => {
    const html = renderToStaticMarkup(<App />);

    expect(html).toContain("Request Strategic Demo");
    expect(html).toContain("Renovation decisions deserve intelligence infrastructure.");
    expect(html).toContain("Renovation intelligence engine");
    expect(html).toContain("Public demo intentionally excludes:");
  });
});
