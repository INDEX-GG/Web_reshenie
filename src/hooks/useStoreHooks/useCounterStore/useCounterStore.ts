import { useAppDispatch, useAppSelector } from "../../useAppStore";
import {
  decrement,
  increment,
  selectCounter,
} from "store/reducers/counterSlice/counterSlice";

export const useCounterStore = () => {
  const { counter } = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();

  const handleUpCounter = () => {
    dispatch(increment(1));
  };

  const handleDownCounter = () => {
    dispatch(decrement(1));
  };

  return {
    counter,
    handleUpCounter,
    handleDownCounter,
  };
};
