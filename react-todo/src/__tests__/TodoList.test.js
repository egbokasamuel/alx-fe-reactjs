import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

test("renders TodoList component and initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo List/i)).toBeInTheDocument();
});

test("adds a new todo item", () => {
  render(<TodoList />);
  const input = screen.getByRole("textbox");
  const button = screen.getByText(/Add Todo/i);

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(button);

  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test("toggles todo item completion status", () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: none");
});

test("deletes a todo item", () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);
  const deleteButton = screen.getByText(/Delete/i);

  fireEvent.click(deleteButton);
  expect(todoItem).not.toBeInTheDocument();
});
