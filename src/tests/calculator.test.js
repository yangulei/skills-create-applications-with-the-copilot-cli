const { add, subtract, multiply, divide, modulo, exponentiate, sqrt } = require("../calculator");

// =============================================================================
// Unit Tests for CLI Calculator
// Covers: Addition, Subtraction, Multiplication, Division,
//         Modulo, Exponentiation, Square Root
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

// ---------------------------------------------------------------------------
// Modulo (%)
// ---------------------------------------------------------------------------
describe("modulo", () => {
  test("returns remainder of two positive integers", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test("returns remainder with negative dividend", () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test("returns remainder with negative divisor", () => {
    expect(modulo(10, -3)).toBe(1);
  });

  test("returns zero when dividend is zero", () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test("returns remainder with decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test("returns remainder when dividend is smaller than divisor", () => {
    expect(modulo(3, 10)).toBe(3);
  });

  // Edge case: modulo by zero
  test("returns error string when modulo by zero", () => {
    expect(modulo(10, 0)).toBe("Error: Modulo by zero is not allowed.");
  });

  test("returns error string when zero modulo zero", () => {
    expect(modulo(0, 0)).toBe("Error: Modulo by zero is not allowed.");
  });

  test("returns error string when negative modulo zero", () => {
    expect(modulo(-5, 0)).toBe("Error: Modulo by zero is not allowed.");
  });
});

// ---------------------------------------------------------------------------
// Exponentiation (**)
// ---------------------------------------------------------------------------
describe("exponentiate", () => {
  test("raises a positive base to a positive integer power", () => {
    expect(exponentiate(2, 3)).toBe(8);
  });

  test("raises a number to the power of zero (returns 1)", () => {
    expect(exponentiate(5, 0)).toBe(1);
  });

  test("raises a number to the power of one (identity)", () => {
    expect(exponentiate(7, 1)).toBe(7);
  });

  test("raises zero to a positive power (returns 0)", () => {
    expect(exponentiate(0, 5)).toBe(0);
  });

  test("raises a number to a negative power (returns fraction)", () => {
    expect(exponentiate(2, -2)).toBe(0.25);
  });

  test("raises a negative base to an even power (positive result)", () => {
    expect(exponentiate(-2, 2)).toBe(4);
  });

  test("raises a negative base to an odd power (negative result)", () => {
    expect(exponentiate(-2, 3)).toBe(-8);
  });

  test("raises a decimal base to a power", () => {
    expect(exponentiate(1.5, 2)).toBe(2.25);
  });

  test("raises a number to a decimal power", () => {
    expect(exponentiate(4, 0.5)).toBeCloseTo(2);
  });

  test("zero to the power of zero returns 1", () => {
    expect(exponentiate(0, 0)).toBe(1);
  });
});

// ---------------------------------------------------------------------------
// Square Root (√)
// ---------------------------------------------------------------------------
describe("sqrt", () => {
  test("returns square root of a perfect square", () => {
    expect(sqrt(9)).toBe(3);
  });

  test("returns square root of 4", () => {
    expect(sqrt(4)).toBe(2);
  });

  test("returns 0 for input of 0", () => {
    expect(sqrt(0)).toBe(0);
  });

  test("returns 1 for input of 1", () => {
    expect(sqrt(1)).toBe(1);
  });

  test("returns square root of a non-perfect square", () => {
    expect(sqrt(2)).toBeCloseTo(1.4142, 4);
  });

  test("returns square root of a decimal number", () => {
    expect(sqrt(0.25)).toBeCloseTo(0.5);
  });

  test("returns square root of a large number", () => {
    expect(sqrt(1000000)).toBe(1000);
  });

  // Edge case: negative numbers
  test("returns error string for negative input", () => {
    expect(sqrt(-1)).toBe("Error: Square root of a negative number is not allowed.");
  });

  test("returns error string for negative decimal input", () => {
    expect(sqrt(-0.5)).toBe("Error: Square root of a negative number is not allowed.");
  });

  test("returns error string for large negative input", () => {
    expect(sqrt(-100)).toBe("Error: Square root of a negative number is not allowed.");
  });
});
