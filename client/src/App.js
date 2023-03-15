import "./App.css";
import { Fragment } from "react";
//components
import InputTOdo from "./components/InputTOdo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <div className="container">
      <Fragment>
        <InputTOdo />
        <ListTodo/>
      </Fragment>
    </div>
  );
}

export default App;
