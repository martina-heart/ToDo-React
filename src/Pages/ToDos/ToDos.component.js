import ToDosList from "../../Components/ToDos-List/ToDos-List.component";
import ToDosHeader from "../../Components/ToDosHeader/ToDosHeader.component";
import ToDosFooter from "../../Components/ToDosFooter/ToDosFooter.components";
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
