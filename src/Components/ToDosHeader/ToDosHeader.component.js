import "./ToDosHeader.component.css";

const ToDosHeader = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="What needs to be done ? "
        value={props.val}
        onChange={props.onChangeHandler}
        onKeyUp={props.onKeyUpHandler}
      />
    </div>
  );
};

export default ToDosHeader;
