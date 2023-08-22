// add one jest testr

import { calculate } from "../../App";
//1
test("adds two numbers correctly", () => {
  expect(calculate(3, "+", 5)).toBe(8);
});
//2
test("subtracts two numbers correctly", () => {
  expect(calculate(8, "-", 3)).toBe(5);
});
//3
test('returns "Error" for invalid operator', () => {
  expect(calculate(5, "*", 2)).toBe("Error");
});
//4
test('returns "Error" for invalid operands', () => {
  expect(calculate("abc", "+", 2)).toBe("Error");
});
///5
//added
test('returns "Error" when no text fields are filled', () => {
  expect(calculate("+")).toBe("Error");
});
