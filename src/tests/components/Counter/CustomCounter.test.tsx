import { describe, expect, test, vi } from "vitest";
import { CustomCounter } from "../../../components/Counter/CustomCounter";
import { fireEvent, render, screen } from "@testing-library/react";

const handleAddMock = vi.fn();
const handleSubstractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock("../../../hooks/useCounter", () => ({
  useCounter: () => ({
    count: 20,
    handdleAdd: handleAddMock,
    handdleSubstract: handleSubstractMock,
    handdleReset: handleResetMock,
  }),
}));

describe("CustomCounter", () => {
  /**
   * Render the component
   * Comprueba que se renderice el componente y que los botones tengan el texto correcto
   *
   */
  test("should render the component", () => {
    render(<CustomCounter />);

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(
      "Counter App"
    );

    expect(screen.getByRole("button", { name: "+" }).innerHTML).toBe("+");
    expect(screen.getByRole("button", { name: "-" }).innerHTML).toBe("-");
    expect(
      screen.getByRole("button", { name: "Reset" }).innerHTML
    ).toBeDefined();
  });

  test("should call handleAdd if button is called", () => {
    render(<CustomCounter />);

    const button = screen.getByRole("button", { name: "+" });

    fireEvent.click(button);

    expect(handleAddMock).toHaveBeenCalled();
  });

  test("should call handleSubstract if button is called", () => {
    render(<CustomCounter />);

    const button = screen.getByRole("button", { name: "-" });

    fireEvent.click(button);

    expect(handleSubstractMock).toHaveBeenCalled();
  });

  test("should call handleAdd if button is called", () => {
    render(<CustomCounter />);

    const button = screen.getByRole("button", { name: "Reset" });

    fireEvent.click(button);

    expect(handleResetMock).toHaveBeenCalled();
  });
});
