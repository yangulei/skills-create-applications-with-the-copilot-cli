#!/usr/bin/env node

// =============================================================================
// Node.js CLI Calculator
// =============================================================================
// Supported operations:
//   Addition (+)       – Add two numbers
//   Subtraction (-)    – Subtract one number from another
//   Multiplication (*) – Multiply two numbers
//   Division (/)       – Divide one number by another (with division-by-zero handling)
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

function printMenu() {
  console.log("\n===== CLI Calculator =====");
  console.log("Supported operations:");
  console.log("  1. Addition (+)");
  console.log("  2. Subtraction (-)");
  console.log("  3. Multiplication (*)");
  console.log("  4. Division (/)");
  console.log("  5. Exit");
  console.log("==========================\n");
}

function askQuestion(query) {
  return new Promise((resolve) => getReadlineInterface().question(query, resolve));
}

async function getNumbers() {
  const firstInput = await askQuestion("Enter the first number: ");
  const secondInput = await askQuestion("Enter the second number: ");

  const a = parseFloat(firstInput);
  const b = parseFloat(secondInput);

  if (isNaN(a) || isNaN(b)) {
    console.log("Error: Invalid input. Please enter valid numbers.");
    return null;
  }

  return { a, b };
}

async function main() {
  console.log("Welcome to the Node.js CLI Calculator!");

  while (true) {
    printMenu();

    const choice = await askQuestion("Select an operation (1-5): ");

    if (choice === "5") {
      console.log("Goodbye!");
      getReadlineInterface().close();
      break;
    }

    if (!["1", "2", "3", "4"].includes(choice)) {
      console.log("Error: Invalid choice. Please select 1-5.");
      continue;
    }

    const numbers = await getNumbers();
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
    }
  }
}

// Export functions for testing; run CLI only when executed directly
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide };
