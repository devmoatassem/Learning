// const {default: TestRunner }= require("jest-runner");//This line imports the TestRunner class from the "jest-runner" module. The { default: TestRunner } syntax is used to destructure the default export of the module.
// const { test } = require("node:test");
const sum = require('./sum'); // Assuming this is the correct path to your sum.js file

test('should return the sum of two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});