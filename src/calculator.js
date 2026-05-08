#!/usr/bin/env node

// =============================================================================
// Node.js CLI Calculator
// =============================================================================
// Supported operations:
//   Addition (+)        – Add two numbers
//   Subtraction (-)     – Subtract one number from another
//   Multiplication (*)  – Multiply two numbers
//   Division (/)        – Divide one number by another (with division-by-zero handling)
//   Modulo (%)          – Remainder of dividing one number by another (with modulo-by-zero handling)
//   Exponentiation (**) – Raise a number to the power of another
//   Square Root (√)     – Square root of a number (with negative-number handling)
// =============================================================================

const readline = require("readline");

let rl;
function getReadlineInterface() {
  if (!rl) {
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  return rl;
}

// Addition – adds two numbers and returns the sum
function add(a, b) {
  return a + b;
}

// Subtraction – subtracts the second number from the first
function subtract(a, b) {
  return a - b;
}

// Multiplication – multiplies two numbers and returns the product
function multiply(a, b) {
  return a * b;
}

// Division – divides the first number by the second, with division-by-zero handling
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return a / b;
}

// Modulo – returns the remainder of dividing the first number by the second,
// with modulo-by-zero handling
function modulo(a, b) {
  if (b === 0) {
    return "Error: Modulo by zero is not allowed.";
  }
  return a % b;
}

// Exponentiation – raises the base to the power of the exponent
function exponentiate(a, b) {
  return Math.pow(a, b);
}

// Square Root – returns the square root of a number,
// with error handling for negative numbers
function sqrt(a) {
  if (a < 0) {
    return "Error: Square root of a negative number is not allowed.";
  }
  return Math.sqrt(a);
}

function printMenu() {
  console.log("\n===== CLI Calculator =====");
  console.log("Supported operations:");
  console.log("  1. Addition (+)");
  console.log("  2. Subtraction (-)");
  console.log("  3. Multiplication (*)");
  console.log("  4. Division (/)");
  console.log("  5. Modulo (%)");
  console.log("  6. Exponentiation (**)");
  console.log("  7. Square Root (√)");
  console.log("  8. Exit");
  console.log("==========================\n");
}

function askQuestion(query) {
  return new Promise((resolve) => getReadlineInterface().question(query, resolve));
}

async function getNumbers(count = 2) {
  const firstInput = await askQuestion("Enter the first number: ");
  const a = parseFloat(firstInput);

  if (isNaN(a)) {
    console.log("Error: Invalid input. Please enter valid numbers.");
    return null;
  }

  if (count === 1) {
    return { a };
  }

  const secondInput = await askQuestion("Enter the second number: ");
  const b = parseFloat(secondInput);

  if (isNaN(b)) {
    console.log("Error: Invalid input. Please enter valid numbers.");
    return null;
  }

  return { a, b };
}

async function main() {
  console.log("Welcome to the Node.js CLI Calculator!");

  while (true) {
    printMenu();

    const choice = await askQuestion("Select an operation (1-8): ");

    if (choice === "8") {
      console.log("Goodbye!");
      getReadlineInterface().close();
      break;
    }

    if (!["1", "2", "3", "4", "5", "6", "7"].includes(choice)) {
      console.log("Error: Invalid choice. Please select 1-8.");
      continue;
    }

    // Square root only needs one number
    if (choice === "7") {
      const numbers = await getNumbers(1);
      if (!numbers) continue;
      const { a } = numbers;
      const result = sqrt(a);
      console.log(`\nResult: √${a} = ${result}`);
      continue;
    }

    const numbers = await getNumbers(2);
    if (!numbers) continue;

    const { a, b } = numbers;
    let result;

    switch (choice) {
      case "1": // Addition
        result = add(a, b);
        console.log(`\nResult: ${a} + ${b} = ${result}`);
        break;
      case "2": // Subtraction
        result = subtract(a, b);
        console.log(`\nResult: ${a} - ${b} = ${result}`);
        break;
      case "3": // Multiplication
        result = multiply(a, b);
        console.log(`\nResult: ${a} * ${b} = ${result}`);
        break;
      case "4": // Division
        result = divide(a, b);
        console.log(`\nResult: ${a} / ${b} = ${result}`);
        break;
      case "5": // Modulo
        result = modulo(a, b);
        console.log(`\nResult: ${a} % ${b} = ${result}`);
        break;
      case "6": // Exponentiation
        result = exponentiate(a, b);
        console.log(`\nResult: ${a} ** ${b} = ${result}`);
        break;
    }
  }
}

// Export functions for testing; run CLI only when executed directly
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, exponentiate, sqrt };
