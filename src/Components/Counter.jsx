import { useEffect, useRef, useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue = 0 }) {
  const [count, setCounter] = useState(initialValue);
  const prevCountRef = useRef(initialValue);
  const directionRef = useRef("");

  function increment() {
    setCounter((c) => {
     
        directionRef.current = "up";
      
      return c + 1;
    });
  }

  function decrement() {
    setCounter((c) => {
   
        directionRef.current = "down";
      
      return c - 1;
    });
  }

  function reset() {
    setCounter(initialValue);
    prevCountRef.current = initialValue;
    directionRef.current = "";
  }

  useEffect(() => {
    if (directionRef.current !== "") {
      console.log(`Direction: ${directionRef.current}`);
    }
  }, [count]);

  return (
    <>
      <CounterDisplay count={count} />
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Resetta</button>
    </>
  );
}

export default Counter;
