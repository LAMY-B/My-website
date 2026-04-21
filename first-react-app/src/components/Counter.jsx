import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`; //side effect
  }, count); //dependency array

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const alert = () => {
    alert("awesome");
  };
  //const luck = () => {
  //setCount(count - 1);

  // UseState syntax
  // const [state, setState] = useState(initialState)

  return (
    <div>
      <p>Your Count {count}</p>
      <button onClick={() => setCount(count + 1)}>increament</button>
      {/* 
      <button
        onClick={() => {
          luck();
        }}
      >
        decreament
      </button> */}

      {<button onClick={handleDecrement}>Decrement</button>}

      {<button onClick={alert}>click</button>}
    </div>
  );
};
export default Counter;
