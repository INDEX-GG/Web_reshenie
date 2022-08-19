import React from "react";
import { useCounterStore } from "../../hooks/useStoreHooks/useCounterStore/useCounterStore";
import { useCustomRouter } from "../../hooks/useCustomRouter";
import TestIcon from "assets/icon/TestIcon";

const Counter = () => {
  const { handlePushTo } = useCustomRouter();
  const { counter, handleUpCounter, handleDownCounter } = useCounterStore();
  return (
    <div>
      <h1>Work store</h1>
      <h1>{counter}</h1>
      <button onClick={handleUpCounter}>+1</button>
      <button onClick={handleDownCounter}>-1</button>
      <h1>Wrok Icon in TSX COMPONENT</h1>
      <TestIcon />
      <h1>Work React Router Dom</h1>
      <button onClick={handlePushTo("ozon")}>navigate to ozon</button>
    </div>
  );
};

export default React.memo(Counter);
