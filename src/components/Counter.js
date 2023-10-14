import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/actions/counterActions";

const Counter = () => {
  const dispatch = useDispatch();
  const myCountValue = useSelector((store) => store.count);

  // store consume - useSelector
  // to update the value in store / to throw action to the reducer - useDispatch

  return (
    <div>
      <h1>Counter</h1>
      <h3>Count: {myCountValue}</h3>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </div>
  );
};

export default Counter;
