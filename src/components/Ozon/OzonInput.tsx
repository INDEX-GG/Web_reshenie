import { Input } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { setNewData } from "store/reducers/tableSlice/tableSlice";
import { useAppDispatch } from "../../hooks/useAppStore";

const InputMUI = styled(Input)({});

const OzonInput = ({ defaultValue }: any) => {
  const dispatch = useAppDispatch();
  const { control } = useForm();

  const onChengeState = (e: any, onChange: (srt: string) => void) => {
    dispatch(setNewData(e.target.value));
    onChange(e.target.value);
  };

  return (
    <form>
      <Controller
        name="Input"
        control={control}
        defaultValue={defaultValue}
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

export default React.memo(OzonInput);
