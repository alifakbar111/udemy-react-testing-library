import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test("update scoop subtotal when scoop change", async () => {
  render(<Options optionType={"scoops"} />);

  // start total $0.00
  const scoopSubtotal = screen.getByText("Scoops total: $", {
    exact: false,
  });
  expect(scoopSubtotal).toHaveTextContent("0.00");

  // update scoop to vanilla then check subtotal

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");
  expect(scoopSubtotal).toHaveTextContent("2.00");

  // update scoop to chocolate then check subtotal
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, "2");
  expect(scoopSubtotal).toHaveTextContent("6.00");
});
