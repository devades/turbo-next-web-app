import { describe, it } from "@jest/globals";
import { createRoot } from "react-dom/client";
import { Header } from "./Header";

describe("Header", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<Header><p>Child</p></Header>);
    root.unmount();
  });
});
