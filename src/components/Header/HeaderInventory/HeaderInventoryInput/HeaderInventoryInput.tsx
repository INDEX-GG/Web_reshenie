import { Input } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { pushDataStock } from "store/reducers/booksSlice/booksSlice";
import { useAppDispatch } from "../../../../hooks/useAppStore";

const InputMUI = styled(Input)({
  "& .MuiInput-input": {
    textAlign: "center",
  },
});

const HeaderInventoryInput = () => {
  const dispatch = useAppDispatch();
  const { control } = useForm();

  const onChengeState = (e: any, onChange: (srt: string) => void) => {
    dispatch(pushDataStock(e.target.value));
    onChange(e.target.value);
  };

  return (
    <form>
      <Controller
        name="Input"
        control={control}
        defaultValue=""
        render={({ field: { value, onChange } }) => {
          return (
            <InputMUI
              value={value}
              onChange={(e) => onChengeState(e, onChange)}
            />
          );
        }}
      />
    </form>
  );
};

export default React.memo(HeaderInventoryInput);
