import ToDos from "./Components/ToDos/ToDos.component";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div id="css">
      <header>
        <h1>My ToDo App</h1>
      </header>

      <h2>List of ToDos</h2>
      <ToDos />
    </div>
  );
}

export default App;
