// import ToDo from "../ToDo/ToDo.component";

const ToDoHeader = (props) => {
  return (
    <div>
      <input
        type="text"
        value={props.val}
        onChange={props.onChangeHandler}
        onKeyUp={props.onKeyUpHandler}
      />
    </div>
  );
};

export default ToDoHeader;
