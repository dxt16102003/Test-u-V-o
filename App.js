import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import shortid from "shortid";
import { generateInitialTodos, getTodosList,  updateTodosList } from './user'
export default function App() {
  generateInitialTodos()
  
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "Build some websites", done: false, dueDate: "06/24/2022" },
    { id: 2, content: "Do excercises", done: false, dueDate: "06/16/2022" },
    { id: 3, content: "Go shopping", done: false, dueDate: "06/23/2022"},
    { id: 4, content: "House cleaning", done: true, dueDate: "06/22/2022"}
  ])
  ;

  const unDoneTodos = [...todos].filter((task) => task.done === false);

  const [checkUndone, setCheckUndone] = useState(false);

  const getUndone = () => {
    let count = 0;
    todos.map((task) => {
      if (task.done === false) {
        count += 1;
      }
    });
    return count;
  };

  useEffect(() => {
    setUndoneCount(getUndone());
    console.log(undoneCount);
  }, [todos]);

  const [undoneCount, setUndoneCount] = useState(getUndone());

  const addTask = (content) => {
    let newTask = {
      id: shortid.generate(),
      content: content,
      done: false,
      dueDate: new Date().toISOString()
    };
    let newTodos = [...todos, newTask];
    setTodos(newTodos);
    updateTodosList(newTodos);
  };

  const doTask = (id) => {
    let newTodos = [...todos].map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="container">
        <TodoListHeader undone={undoneCount} checkUndone={setCheckUndone} />
        <TodoList todos={checkUndone ? unDoneTodos : todos} doTask={doTask} />
        <Form addTask={addTask} />
      </div>
      <Footer />
    </div>
  );
};
