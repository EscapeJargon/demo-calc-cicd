// add one jest test
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";
//1
test("renders calculator title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Simple Calculator/i);
  expect(titleElement).toBeInTheDocument();
});
//2
test("performs addition correctly", () => {
  render(<App />);
  const num1Input = screen.getByLabelText("Number 1");
  const operatorSelect = screen.getByLabelText("Operator");
  const num2Input = screen.getByLabelText("Number 2");
  const calculateButton = screen.getByText("Calculate");

  fireEvent.change(num1Input, { target: { value: "3" } });
  fireEvent.change(operatorSelect, { target: { value: "+" } });
  fireEvent.change(num2Input, { target: { value: "5" } });
  fireEvent.click(calculateButton);

  const resultElement = screen.getByText("Result: 8");
  expect(resultElement).toBeInTheDocument();
});
//3
//added
test("performs substraction correctly", () => {
  render(<App />);
  const num1Input = screen.getByLabelText("Number 1");
  const operatorSelect = screen.getByLabelText("Operator");
  const num2Input = screen.getByLabelText("Number 2");
  const calculateButton = screen.getByText("Calculate");

  fireEvent.change(num1Input, { target: { value: "50" } });
  fireEvent.change(operatorSelect, { target: { value: "-" } });
  fireEvent.change(num2Input, { target: { value: "50" } });
  fireEvent.click(calculateButton);

  const resultElement = screen.getByText("Result: 0");
  expect(resultElement).toBeInTheDocument();
});
//sss
