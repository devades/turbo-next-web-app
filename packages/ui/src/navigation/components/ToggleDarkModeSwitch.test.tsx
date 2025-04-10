import { describe, it } from "@jest/globals";
import { createRoot } from "react-dom/client";
import { ToggleDarkModeSwitch } from "./ToggleDarkModeSwitch";

describe("ToggleDarkModeSwitch", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<ToggleDarkModeSwitch />);
    root.unmount();
  });
});