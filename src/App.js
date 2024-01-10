import styles from "./App.module.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Job salary={2000} position="Back-end" company="Amazon" />
      <Job salary={3000} position="Front-end" company="Tik Tok" />
      <Job salary={4000} position="DevOpts" company="Youtube" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1><i>{props.salary}</i></h1>
      <h1><i>{props.position}</i></h1>
      <h1><i>{props.company}</i></h1>
    </div>
  );
};

export default App;
