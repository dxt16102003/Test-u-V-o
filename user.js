
import React from "react";
import shortid from "shortid";

export const generateInitialTodos = () => {
  const initialData = [
    {
      id: shortid.generate(),
      content: "Build some websites",
      done: false,
      dueDate: "06/24/2022"
    },
    {
      id: shortid.generate(),
      content: "Do excercises",
      done: false,
      dueDate: "06/16/2022"
    },
    {
      id: shortid.generate(),
      content: "Go shopping",
      done: false,
      dueDate: "06/23/2022"
    },
    {
      id: shortid.generate(),
      content: "House cleaning",
      done: true,
      dueDate: "06/22/2022"
      
    }
  ];
  // check existing users list
  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify(initialData));
  }
};

export function getTodosList() {
  let json = localStorage.getItem("todos");
  return !json ? [] : JSON.parse(json);
}

export function updateTodosList(newData) {
  localStorage.setItem("todos", JSON.stringify(newData));
}

export const TodosContext = React.createContext(null);
