const ToDosHeader = ({ val, onChangeHandler, onKeyUpHandler }) => {
  return (
    <div>
      <input
        type="text"
        value={val}
        onChange={onChangeHandler}
        onKeyUp={onKeyUpHandler}
      />
    </div>
  );
};

export default ToDosHeader;
