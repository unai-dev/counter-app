// Este componente es el que se va a renderizar en el index.html

import { useState } from "react"; // useState es un hook que nos permite manejar el estado de un componente
// un hook es una función que nos permite manejar el estado de un componente

export const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);

  const onClick = () => {
    setCounter((c) => c + 1);
  };

  return (
    <>
      <h1>El valor del contador es: {counter}</h1>
      <button onClick={onClick}>Incrementar contador +1</button>
    </>
  );
};
