import { useState } from "react";
import ToDoList from "../ToDo-List/ToDo-List.component";
import ToDoHeader from "../ToDoHeader/ToDoHeader.component";

const ToDo = () => {
  const [val, setVal] = useState("");
  const [todo, setToDo] = useState([
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
      setToDo(
        todo.concat({ id: todo.length + 1, text: val, completed: false })
      );
      setVal("");
    }
  };

  const onChangeCheckboxHandler = (id) => {
    const newTodo = todo.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setToDo(newTodo);
  };

  return (
    <div>
      <ToDoHeader
        val={val}
        onChangeHandler={onChangeHandler}
        onKeyUpHandler={onKeyUpHandler}
      />
      <ToDoList
        todo={todo}
        onChangeCheckboxHandler={(id) => onChangeCheckboxHandler(id)}
      />
    </div>
  );
};

export default ToDo;
