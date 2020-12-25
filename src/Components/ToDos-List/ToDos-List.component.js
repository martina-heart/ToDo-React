import "./ToDos-List.component.css";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";

const ToDosList = (props) => {
  return (
    <ListGroup>
      {props.todos.map((todo) => {
        return (
          <ListGroupItem key={todo.id}>
            <input
              className="check"
              type="checkbox"
              checked={todo.completed}
              onChange={function () {
                return props.onChangeCheckbox(todo.id);
              }}
            />
            <span id="spanT">{todo.text}</span>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={function () {
                return props.onDelete(todo.id);
              }}
            >
              Delete
            </button>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default ToDosList;
