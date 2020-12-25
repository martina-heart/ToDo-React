import ToDosList from "../ToDos-List/ToDos-List.component";
import ToDosHeader from "../ToDosHeader/ToDosHeader.component";
import Footer from "../Footer/Footer.components";
import "./ToDos.component.css";

const ToDos = () => {
  return (
    <div id="todos">
      <ToDosHeader />
      <ToDosList />
      <Footer />
    </div>
  );
};

export default ToDos;
