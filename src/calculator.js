#!/usr/bin/env node
// Node.js CLI Calculator
// Supported operations:
//  - add : addition (a + b)
//  - sub : subtraction (a - b)
//  - mul : multiplication (a * b)
//  - div : division (a / b)  (division by zero is handled)

function usage() {
  console.error('Usage: node calculator.js <add|sub|mul|div> <num1> <num2>');
  console.error('Examples:');
  console.error('  node calculator.js add 2 3    => 5');
  console.error('  node calculator.js sub 5 2    => 3');
  console.error('  node calculator.js mul 4 6    => 24');
  console.error('  node calculator.js div 10 2   => 5');
}

function toNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) {
    console.error(`Invalid number: ${value}`);
    process.exit(2);
  }
  return n;
}

const args = process.argv.slice(2);
if (args.length === 0) {
  usage();
  process.exit(1);
}

const cmd = args[0];
if (cmd === '-h' || cmd === '--help' || cmd === 'help') {
  usage();
  process.exit(0);
}

if (!['add', 'sub', 'mul', 'div'].includes(cmd)) {
  console.error(`Unknown command: ${cmd}`);
  usage();
  process.exit(1);
}

if (args.length < 3) {
  console.error('Error: two numeric operands are required.');
  usage();
  process.exit(1);
}

const a = toNumber(args[1]);
const b = toNumber(args[2]);
let result;

const core = require('./calculator-core');

try {
  switch (cmd) {
    case 'add':
      result = core.add(a, b);
      break;
    case 'sub':
      result = core.sub(a, b);
      break;
    case 'mul':
      result = core.mul(a, b);
      break;
    case 'div':
      result = core.div(a, b);
      break;
    default:
      console.error('Unsupported operation');
      process.exit(1);
  }
} catch (err) {
  // Handle division-by-zero and other errors
  if (err && err.message && err.message.includes('Division by zero')) {
    console.error('Error: Division by zero');
    process.exit(3);
  }
  console.error(err && err.message ? err.message : String(err));
  process.exit(1);
}

// Print result to stdout
console.log(result);
