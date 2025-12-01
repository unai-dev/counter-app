import { useState } from "react";

export const useCounter = (initialState: number = 10) => {
  const [count, setCount] = useState(initialState);

  const handdleAdd = () => {
    setCount(count + 1);
  };
  const handdleSubstract = () => {
    if (count === 0) return;
    setCount(count - 1);
  };
  const handdleReset = () => {
    setCount(0);
  };

  return {
    count,
    handdleAdd,
    handdleSubstract,
    handdleReset,
  };
};
