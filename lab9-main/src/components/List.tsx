import React, { useState } from "react";
import { Todo } from "./Todo.tsx";
import { Task } from "../types";

export function List() {
  const [todos, setTodos] = useState<Task[]>([
    {
      id: 1,
      title: "Создать приложение на React",
      date: "01.04",
      status: "opened",
    },
  ]);

  const [filter, setFilter] = useState<string>("all");

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: "",
        date: new Date().toLocaleDateString(),
        status: "opened",
      },
    ]);
  };

  const editTodo = (id: number | string, updatedTodo: Task) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = (id: number | string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleStatus = (id: number | string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === "opened" ? "completed" : "opened",
          };
        }
        return todo;
      })
    );
  };

  const selectStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const filteredTodos =
    filter === "all" ? todos : todos.filter((todo) => todo.status === filter);

  return (
    <>
      <p>Список задач</p>
      <div style={{ display: "flex" }}>
        <button type="button" className="btn btn-secondary" onClick={addTodo}>
          Добавить
        </button>
        <select className="form-select" defaultValue="all" onChange={selectStatus}>
          <option value="all">Все</option>
          <option value="opened">Открытые</option>
          <option value="completed">Завершенные</option>
        </select>
      </div>

      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          toggleStatus={toggleStatus}
        />
      ))}
    </>
  );
}