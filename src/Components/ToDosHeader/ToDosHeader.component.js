import "./ToDosHeader.component.css";
import React from "react";
import { TodosContext } from "../../Contexts/todos.context";

class ToDosHeader extends React.Component {
  render() {
    return (
      <TodosContext.Consumer>
        {(value) => {
          return (
            <>
              <div>
                <input
                  type="text"
                  placeholder="What needs to be done ? "
                  value={value.val}
                  onChange={value.onChangeHandler}
                  onKeyUp={value.onKeyUpHandler}
                />
              </div>
            </>
          );
        }}
      </TodosContext.Consumer>
    );
  }
}

export default ToDosHeader;
