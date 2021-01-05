const Input = ({
  label,
  element,
  type,
  name,
  value,
  valid,
  onChangeHandler,
}) => {
  let inputElement = null;

  switch (element) {
    case "input":
      inputElement = (
        <>
          {!valid ? (
            <small style={{ color: "red" }}>
              Please enter data in the fields
            </small>
          ) : null}
          <br />
          <input
            type={type}
            name={name}
            value={value}
            onChange={(e) => onChangeHandler(e, name)}
            //style={{ borderBlockColor: valid ? null : "red" }}
          />
        </>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          name={name}
          value={value}
          onChange={(e) => onChangeHandler(e, name)}
        />
      );
      break;
    default:
      break;
  }
  return (
    <div>
      <label>{label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
