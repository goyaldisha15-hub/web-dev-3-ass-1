const [,, operation, num1, num2] = process.argv;

const a = Number(num1);
const b = Number(num2);

switch (operation) {
  case 'add':
    console.log("Result:", a + b);
    break;
  case 'sub':
    console.log("Result:", a - b);
    break;
  case 'mul':
    console.log("Result:", a * b);
    break;
  case 'div':
    if (b !== 0) {
      console.log("Result:", a / b);
    } else {
      console.log("Error: Division by zero not allowed");
    }
    break;
  default:
    console.log("Usage: node calculator.js [add|sub|mul|div] num1 num2");
}
