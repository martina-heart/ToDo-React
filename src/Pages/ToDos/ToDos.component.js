import ToDosList from "../ToDos-List/ToDos-List.component";
import ToDosHeader from "../ToDosHeader/ToDosHeader.component";
import ToDosFooter from "../ToDosFooter/ToDosFooter.components";
import "./ToDos.component.css";

const ToDos = () => {
  return (
    <div id="todos">
      <ToDosHeader />
      <ToDosList />
      <ToDosFooter />
    </div>
  );
};

export default ToDos;
