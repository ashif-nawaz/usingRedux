import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const counterSlice = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = (e) => {
    dispatch(counterActions.increment());
  };

  const increaseByHandler = (e) => {
    dispatch(counterActions.increaseBy({ value: 5 }));
  };

  const decrementHandler = (e) => {
    dispatch(counterActions.decrement());
  };

  const toggleControlsHandler = (e) => {
    dispatch(counterActions.toggleShowControls());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterSlice.counter}</div>

      {counterSlice.showCounter && (
        <div>
          <button onClick={incrementHandler}>INCREMENT</button>
          <button onClick={increaseByHandler}>IncreaseBy</button>
          <button onClick={decrementHandler}>DECREMENT</button>
        </div>
      )}

      <button onClick={toggleControlsHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
