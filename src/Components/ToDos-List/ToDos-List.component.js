import "./ToDos-List.component.css";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { TodosContext } from "../../Contexts/todos.context";

const ToDosList = () => {
  return (
    <>
      <TodosContext.Consumer>
        {(value) => {
          return (
            <ListGroup>
              {value.todos.map((todo) => {
                return (
                  <ListGroupItem key={todo.id}>
                    <input
                      className="check"
                      type="checkbox"
                      checked={todo.completed}
                      onChange={function () {
                        return value.onChangeCheckboxHandler(todo.id);
                      }}
                    />
                    <span id="spanT">{todo.text}</span>
                    <button
                      type="button"
                      className="close"
                      aria-label="Close"
                      onClick={function () {
                        return value.onDeleteHandler(todo.id);
                      }}
                    >
                      Delete
                    </button>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          );
        }}
      </TodosContext.Consumer>
    </>
  );
};

export default ToDosList;
