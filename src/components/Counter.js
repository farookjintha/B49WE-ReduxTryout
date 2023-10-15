import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, reset } from "../store/actions/counterActions";
import { increment, decrement, reset } from "../rtk-store/slices/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const myCountValue = useSelector((store) => store.count);

  console.log("My count: ", myCountValue);
  // store consume - useSelector
  // to update the value in store / to throw action to the reducer - useDispatch

  return (
    <div>
      <h1>Counter</h1>
      <h3>Count: {myCountValue.count}</h3>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </div>
  );
};

export default Counter;
