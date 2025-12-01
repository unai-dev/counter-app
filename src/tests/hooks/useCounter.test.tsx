import { renderHook } from "@testing-library/react";
import { act } from "react";
import { describe, expect, test } from "vitest";
import { useCounter } from "../../hooks/useCounter";

describe("useCounter", () => {
  test("should increment counter when + button is clicked", () => {
    const { result } = renderHook(() => useCounter(1));

    act(() => {
      result.current.handdleAdd();
    });

    expect(result.current.count).toBe(2);
  });
  test("should decrement counter when - button is clicked", () => {
    const { result } = renderHook(() => useCounter(5));

    act(() => {
      result.current.handdleSubstract();
    });

    expect(result.current.count).toBe(4);
  });

  test("should reset counter when reset button is clicked", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handdleReset();
    });

    expect(result.current.count).toBe(0);
  });
});
