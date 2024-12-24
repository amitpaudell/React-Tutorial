import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const increaseFun = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };
  const decreaseCount = () => {
    if (counter <= 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Wecome to Couter Program: {counter}</h1>
      <p>
        Counter:<span className="cnt">{counter}</span>
      </p>
      <button className="btn" onClick={increaseFun}>
        Increase Value
      </button>
      <button className="btn2" onClick={decreaseCount}>
        Decrease Value
      </button>
      <p>Footer:{counter}</p>
    </>
  );
}

export default App;
