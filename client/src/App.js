import "./App.css";
import { Fragment } from "react";
//components
import InputTOdo from "./components/InputTOdo";

function App() {
  return (
    <div className="container">
      <Fragment>
        <InputTOdo />
      </Fragment>
    </div>
  );
}

export default App;
