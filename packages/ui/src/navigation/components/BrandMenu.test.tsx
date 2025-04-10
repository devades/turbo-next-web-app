import { describe, it } from "@jest/globals";
import { createRoot } from "react-dom/client";
import { BrandMenu } from "./BrandMenu";

describe("BrandMenu", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<BrandMenu />);
    root.unmount();
  });
});