import { useState } from "react";
import ToDosList from "../ToDos-List/ToDos-List.component";
import ToDosHeader from "../ToDosHeader/ToDosHeader.component";

function nextToDoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}
const ToDos = () => {
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

  return (
    <div id="todos">
      <ToDosHeader
        val={val}
        onChangeHandler={onChangeHandler}
        onKeyUpHandler={onKeyUpHandler}
      />
      <ToDosList
        todos={todos}
        onChangeCheckbox={(id) => onChangeCheckboxHandler(id)}
        onDelete={onDeleteHandler}
      />
    </div>
  );
};

export default ToDos;
