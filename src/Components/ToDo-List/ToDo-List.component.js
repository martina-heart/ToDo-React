const ToDoList = (props) => {
  return (
    <ul>
      {props.todo.map((todoes) => {
        return (
          <li key={todoes.id}>
            <input
              type="checkbox"
              checked={todoes.completed}
              onChange={() => props.onChangeCheckboxHandler(todoes.id)}
            />
            {todoes.text}
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
