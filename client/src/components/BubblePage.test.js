import React from "react";
import { render, screen, wait } from "@testing-library/react";
import { fetchColors as mockFetchColors } from "../api/fetchColors";
import BubblePage from "./BubblePage";

jest.mock("../api/fetchColors");

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce({
    colors: [
      { color: "blue", code: { hex: "#fff000" }, id: 1 },
      { color: "green", code: { hex: "#00ff00" }, id: 2 },
    ],
  });

  render(<BubblePage />);

  await wait(() => {
    const colors = screen.queryByText(/colors/i);
    expect(colors).toBeInTheDocument();
  });
});
