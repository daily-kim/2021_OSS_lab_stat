#!/usr/bin/env node
const lib = require("./lib");

if (process.argv.length <= 3) {
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));
let result;

if (numbers.some((n) => isNaN(n))) {
    console.log("some arguments are not numbers!");
    process.exit(1);
}
switch (command) {
    case "sum":
        result = lib.sum(numbers);
        break;
    case "avg":
        result = lib.avg(numbers);
        break;
    case "max":
        result = lib.max(numbers);
        break;
    default:
        console.log("wrong command!");
        process.exit(1);
}
console.log(result);
