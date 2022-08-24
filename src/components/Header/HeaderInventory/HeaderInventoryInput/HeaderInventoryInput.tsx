import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { pushDataStock } from "store/reducers/booksSlice/booksSlice";
import { useAppDispatch } from "../../../../hooks/useAppStore";

export default function HeaderInventoryInput() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    dispatch(pushDataStock(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("example")} />
    </form>
  );
}
