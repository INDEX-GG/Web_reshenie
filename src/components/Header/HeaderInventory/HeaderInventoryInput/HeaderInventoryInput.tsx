import { Input } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { pushDataStock } from "store/reducers/booksSlice/booksSlice";
import { useAppDispatch } from "../../../../hooks/useAppStore";

const InputMUI = styled(Input)({
  padding: "0",
  "&:hover": {
    "&:not(.Mui-disabled)": {
      "&:before": {
        borderBottom: "none",
      },
    },
  },
  "&:after": {
    borderBottom: "none",
  },
  "&:hover:not:before": {
    borderBottom: "none",
  },
  "&::before": {
    border: "none",
  },

  "& .MuiInput-input": {
    padding: "0",
    height: "35px",
    textAlign: "center",
    "&::after": {
      borderBottom: "none",
    },
    "&::before": {
      border: "none",
    },
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
              type="number"
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
