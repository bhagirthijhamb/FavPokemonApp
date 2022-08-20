import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app title", () => {
  render(<App />);
  const titleElement = screen.getByText(/My favourite/i);
  expect(titleElement).toBeInTheDocument();
});

test("Next button should exist", async () => {
  render(<App />);
  const nextButton = screen.getByRole("button", {
    name: "Goto next step",
  });

  expect(nextButton).toBeInTheDocument();
});

test("renders User Details component", () => {
  render(<App />);
  const userDetailsComponent = screen.getByText(/User Details/i);
  expect(userDetailsComponent).toBeInTheDocument();
});
