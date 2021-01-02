import { Route, Switch } from "react-router-dom";

import ToDos from "./Components/ToDos/ToDos.component";
import AboutUs from "./Pages/AboutUs/about-us.component";
import Contact from "./Pages/Contact/contact.component";
import SingleTodo from "./Pages/SingleTodo/single-todo.component";
import Header from "./Common/Header/header.component";
import Footer from "./Common/Footer/footer.componet";
import Home from "./Pages/Home/home.component";
import { TodosContextProvider } from "./Contexts/todos.context";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <TodosContextProvider>
      <div id="css">
        <Header />
        <>
          <Switch>
            <Route path="/todos/:id" component={SingleTodo} />
            <Route path="/todos" component={ToDos} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        </>
        <Footer />
      </div>
    </TodosContextProvider>
  );
}

export default App;
