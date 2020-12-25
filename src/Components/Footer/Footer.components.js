import "./Footer.components.css";
import { Button } from "react-bootstrap";

const Footer = (props) => {
  return (
    <div className="flex-container">
      <div>
        <h5>Actions</h5>
        <Button
          size="sm"
          onClick={function () {
            return props.onClickAllHandler();
          }}
        >
          Mark all Completed
        </Button>
        <Button
          variant="primary"
          size="sm"
          active
          onClick={function () {
            return props.onClickClearHandler();
          }}
        >
          Clear Completed
        </Button>
      </div>
      <div>
        <h5>Remaining Todos</h5>
        <Button>1 item left</Button>
      </div>
      <div>
        <h5>Filter by status</h5>
        <Button variant="outline-secondary" size="sm">
          All
        </Button>
        <br />
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={function () {
            return props.onClickActiveHandler();
          }}
        >
          Active
        </Button>
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={function () {
            return props.onClickCompletedHandler();
          }}
        >
          Completed
        </Button>
      </div>
    </div>
  );
};

export default Footer;
