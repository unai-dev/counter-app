import { useCounter } from "../../hooks/useCounter";

export const CustomCounter = () => {
  const { count, handdleAdd, handdleSubstract, handdleReset } = useCounter(1);
  return (
    <>
      <div className="container-counter">
        <div className="heading-counter">
          <h1>Counter App</h1>
        </div>
        <div className="count-container">
          <p>{count}</p>
        </div>
        <div className="button-container">
          <button onClick={handdleAdd} className="button increment">
            +
          </button>
          <button onClick={handdleSubstract} className="button decrement">
            -
          </button>
          <button onClick={handdleReset} className="button reset">
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
