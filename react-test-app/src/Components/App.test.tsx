import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders component", () => {
  const { container } = render(<App />);
  const appLogo = screen.getByAltText("logo");
  expect(appLogo).toBeInTheDocument();
  expect(appLogo).toHaveAttribute("src", "logo.svg");
  expect(container.getElementsByTagName("p")).toHaveLength(1);
  expect(container.getElementsByTagName("p")[0]).toHaveTextContent(
    "Edit src/App.tsx and save to reload."
  );
  // expect(container).toMatchSnapshot();
});
