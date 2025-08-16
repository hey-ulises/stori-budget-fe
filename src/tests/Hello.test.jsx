import { render, screen } from "@testing-library/react";

function Hello({ name }) {
  return <h1>Hello {name}</h1>;
}

test("renders greeting with name", () => {
  render(<Hello name="Ulises" />);
  expect(screen.getByText("Hello Ulises")).toBeInTheDocument();
});
