const { add, subtract, multiply, divide } = require("../calculator");

// =============================================================================
// Unit Tests for CLI Calculator
// Covers: Addition, Subtraction, Multiplication, Division
// =============================================================================

// ---------------------------------------------------------------------------
// Addition (+)
// ---------------------------------------------------------------------------
describe("add", () => {
  test("adds two positive integers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds two negative numbers", () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test("adds a positive and a negative number", () => {
    expect(add(-1, 1)).toBe(0);
  });

  test("adds zeros", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("adds zero to a number", () => {
    expect(add(7, 0)).toBe(7);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.5)).toBe(4);
  });

  test("adds large numbers", () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });

  test("addition is commutative", () => {
    expect(add(4, 7)).toBe(add(7, 4));
  });
});

// ---------------------------------------------------------------------------
// Subtraction (-)
// ---------------------------------------------------------------------------
describe("subtract", () => {
  test("subtracts two positive integers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts to a negative result", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts two negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test("subtracts a negative from a positive", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test("subtracts zeros", () => {
    expect(subtract(0, 0)).toBe(0);
  });

  test("subtracts zero from a number", () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test("subtracts a number from zero", () => {
    expect(subtract(0, 5)).toBe(-5);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(1.5, 0.5)).toBe(1);
  });

  test("subtracting a number from itself equals zero", () => {
    expect(subtract(42, 42)).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// Multiplication (*)
// ---------------------------------------------------------------------------
describe("multiply", () => {
  test("multiplies two positive integers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("multiplies by zero", () => {
    expect(multiply(0, 100)).toBe(0);
  });

  test("multiplies zero by zero", () => {
    expect(multiply(0, 0)).toBe(0);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(-2, 5)).toBe(-10);
  });

  test("multiplies two negative numbers", () => {
    expect(multiply(-3, -3)).toBe(9);
  });

  test("multiplies by one (identity)", () => {
    expect(multiply(7, 1)).toBe(7);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(1.5, 2)).toBe(3);
  });

  test("multiplies large numbers", () => {
    expect(multiply(10000, 10000)).toBe(100000000);
  });

  test("multiplication is commutative", () => {
    expect(multiply(6, 9)).toBe(multiply(9, 6));
  });
});

// ---------------------------------------------------------------------------
// Division (/)
// ---------------------------------------------------------------------------
describe("divide", () => {
  test("divides two positive integers evenly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divides with a decimal result", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divides a negative by a positive", () => {
    expect(divide(-9, 3)).toBe(-3);
  });

  test("divides a positive by a negative", () => {
    expect(divide(9, -3)).toBe(-3);
  });

  test("divides two negative numbers", () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("divides by one (identity)", () => {
    expect(divide(8, 1)).toBe(8);
  });

  test("divides a number by itself", () => {
    expect(divide(42, 42)).toBe(1);
  });

  test("divides decimal numbers", () => {
    expect(divide(5.5, 2.2)).toBeCloseTo(2.5);
  });

  // Edge case: division by zero
  test("returns error string when dividing by zero", () => {
    expect(divide(10, 0)).toBe("Error: Division by zero is not allowed.");
  });

  test("returns error string when dividing zero by zero", () => {
    expect(divide(0, 0)).toBe("Error: Division by zero is not allowed.");
  });

  test("returns error string when dividing negative by zero", () => {
    expect(divide(-5, 0)).toBe("Error: Division by zero is not allowed.");
  });
});
