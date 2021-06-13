/* eslint-disable no-use-before-define */
import React, { useRef, useState, useEffect } from "react";
import ActiveTodo from "../components/ActiveTodo";
import Input from "../components/Input";
import { getData, setData } from "../helpers/index";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function Todolist() {
  const [search, setSearch] = useState("");
  const [todolist, setTodoList] = useState(getData());
  const [idActiveTodo, setIdActiveTodo] = useState([]);
  const idTimeout = useRef(null);

  const activeTodo = (todo) => {
    if (todo.checked) {
      if (!idActiveTodo.includes(todo.id)) {
        setIdActiveTodo(idActiveTodo.concat(todo.id));
      } else {
        setIdActiveTodo(idActiveTodo);
      }
    } else {
      setIdActiveTodo(idActiveTodo.filter((item) => item !== todo.id));
    }
    const index = todolist.findIndex((item) => item.id === todo.id);

    todolist.splice(index, 1, todo);
    setTodoList(todolist);
  };


  const updateTodo = (todo) => {
    const index = todolist.findIndex((item) => item.id === todo.id);

    todolist.splice(index, 1, todo);
    setTodoList((todolist) => [...todolist]);
    setData(todolist);
  };

  const removeTodo = (todo) => {
    const newList = todolist.filter((item) => item.id !== todo.id);
    setIdActiveTodo(idActiveTodo.filter((item) => item !== todo.id));
    setTodoList(newList);
    setData(newList);
  };

  const deleteTodos = () => {
    const newList = todolist.filter((item) => !idActiveTodo.includes(item.id));
    setTodoList(newList);
    setData(newList);
  };

  console.log(todolist,'todolist');

  return (
    <div style={{ position: "relative", height: "100%", display: "flex" }}>
      <div
        style={{
          textAlign: "right",
          marginBottom: "10px",
          width: "50%",
          margin: "10px 10px",
          border: "1px solid black",
        }}
      >
        <AddTodo
          getTodo={(todo) => {
            setData([...getData(), todo]);
            setTodoList((todolist) => [...todolist, todo]);
          }}
        />
      </div>
      <div
        style={{
          width: "50%",
          margin: "10px 10px",
          border: "1px solid black",
        }}
      >
        <h3 style={{ width: "100%" }}>Todo List</h3>
        <div style={{ padding: "16px" }}>
          <div
            style={{
              display: "flex",
              maxHeight: "36px",
              margin: "10px 0 45px 0",
            }}
          >
            <Input
              placeholder="Search..."
              className="custom__input-search"
              onChange={(e) => {
                clearTimeout(idTimeout);
                setSearch(e);
                idTimeout.current = setTimeout(() => {
                  setTodoList(
                    getData().filter((todo) => todo.todo.indexOf(e) !== -1)
                  );
                }, 1000);
              }}
              value={search}
            />
          </div>
          {!!todolist.length &&
            todolist.sort((a,b) => (new Date(a.date).getTime()) - new Date(b.date).getTime()).map((todo) => (
              <div key={todo.id}>
                <TodoItem
                  todo={todo}
                  activeTodo={(todo) => activeTodo(todo)}
                  updateTodo={(todo) => updateTodo(todo)}
                  removeTodo={(todo) => removeTodo(todo)}
                />
                {!!idActiveTodo.length && (
                  <div
                    style={{
                      position: "fixed",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                    }}
                  >
                    <ActiveTodo
                      removeTodo={deleteTodos}
                    />
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Todolist;
