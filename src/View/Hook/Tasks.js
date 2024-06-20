

//  Usestate and use effect


import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

 export function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I have rendered {count} times!</h1>;
}

// next//

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

 export function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Result: {calculation}</p>
    </>
  );
}
