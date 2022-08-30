import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { setConstantValue } from "typescript";

const TestBody = () => {
  const { setValue } = useFormContext();

  useEffect(() => {
    setValue("our_stock", "test");
  }, []);
  return <div>TestBody</div>;
};

export default TestBody;
