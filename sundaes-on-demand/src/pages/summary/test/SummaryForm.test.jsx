import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("initial condition", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /Confirm Order/i });
  expect(confirmButton).toBeDisabled();
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and condition/i,
  });
  const confirmButton = screen.getByRole("button", { name: /Confirm Order/i });

  userEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  userEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);
  // popover start out hiden
  const nullPopover = screen.queryByText(
    /No ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/No ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when mouse out
  await userEvent.unhover(termsAndConditions);
  await waitFor(() => {
    expect(
      screen.queryByText(/No ice cream will actually be delivered/i)
    ).not.toBeInTheDocument();
  });
});
