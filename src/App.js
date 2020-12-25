import ToDos from "./Components/ToDos/ToDos.component";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodosContextProvider } from "./Contexts/todos.context";
function App() {
  return (
    <TodosContextProvider>
      <div id="css">
        <header>
          <h1>My ToDo App</h1>
        </header>
        <h2>List of ToDos</h2>
        <ToDos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
