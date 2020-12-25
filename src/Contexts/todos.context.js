import React, { useState } from "react";
import nextToDoId from "../Utils/nextTodoId";

const TodosContext = React.createContext();

const TodosContextProvider = (props) => {
  const [val, setVal] = useState("");
  const [todos, setToDos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: true,
    },
    {
      id: 2,
      text: "Learn JavaScript",
      completed: false,
    },
    { id: 3, text: "Learn Angular", competed: false },
  ]);

  const onChangeHandler = (e) => {
    setVal(e.target.value);
  };

  const onKeyUpHandler = (e) => {
    if (e.key === "Enter" && val !== "") {
      setToDos(
        todos.concat({ id: nextToDoId(todos), text: val, completed: false })
      );
      setVal("");
    }
  };

  const onChangeCheckboxHandler = (id) => {
    console.log(id);
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setToDos(newTodos);
  };

  const onDeleteHandler = (id) => {
    const newTodos = todos.filter((todo) => {
      if (id === todo.id) {
        return false;
      }
      return true;
    });
    setToDos(newTodos);
  };

  //mark all completed

  const onClickAllHandler = () => {
    const newTodos = todos.map((todo) => {
      // return { id: todo.id, text: todo.text, completed: todo.completed, completed: true }
      // ...todo --> id: todo.id, text: todo.text, completed: todo.completed
      return { ...todo, completed: true };
    });

    setToDos(newTodos);
  };

  // clear completed
  const onClickClearHandler = () => {
    const newTodos = todos.filter((todo) => {
      if (todo.completed) {
        return false;
      }
      return true;
    });
    setToDos(newTodos);
  };

  //Active
  const onClickActiveHandler = () => {
    const newTodos = todos.filter((todo) => {
      if (todo.completed) {
        return false;
      }
      return true;
    });
    setToDos(newTodos);
  };

  //Completed
  const onClickCompletedHandler = () => {
    const newTodos = todos.filter((todo) => {
      if (!todo.completed) {
        return false;
      }
      return true;
    });
    setToDos(newTodos);
  };

  return (
    <TodosContext.Provider
      value={{
        val,
        todos,
        onChangeHandler,
        onKeyUpHandler,
        onChangeCheckboxHandler,
        onDeleteHandler,
        onClickAllHandler,
        onClickClearHandler,
        onClickActiveHandler,
        onClickCompletedHandler,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export { TodosContextProvider, TodosContext };
