import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase(){
      setCount(count+1);
   };
   function decrease(){
      setCount(count -1);
   };

   function setZero(){
    setCount(0);
   }

  return (
    <div className="App">
      <button onClick={increase}> Increase</button>
      <button onClick={decrease}> Decrease</button>
      <button onClick={setZero}> Set to Zero</button>
      {count}
    </div>
  );
}

export default App;
