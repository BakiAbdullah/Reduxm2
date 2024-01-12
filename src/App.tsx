import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex w-full justify-center items-center h-screen bg-slate-600">
      <div className="flex border border-blue-200 rounded-md bg-orange-100 p-10">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 mr-3 rounded-md text-white bg-green-600 text-xl font-semibold"
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md text-white bg-green-600 text-xl font-semibold"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-3">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md text-white bg-red-600 text-xl font-semibold"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
