import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders component correctly", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders component", () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName("App-logo")).toHaveLength(1);
  expect(container.getElementsByClassName("App-logo")[0]).toHaveAttribute(
    "src",
    "logo.svg"
  );
  expect(container.getElementsByTagName("p")).toHaveLength(1);
  expect(container.getElementsByTagName("p")[0]).toHaveTextContent(
    "Edit src/App.js and save to reload."
  );
  expect(container).toMatchSnapshot();
});

// describe("<App />", () => {
//   it("renders component correctly", () => {
//     // const { container } = render(<App />);
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeIntheDocument();
//     // expect(container.getElementsByClassName("App-logo")).toHaveLength(1);
//     // expect(container.getElementsByClassName("App-logo")[0]).toHaveAttribute(
//     //   "src",
//     //   "logo.svg"
//     // );
//   });
// });
