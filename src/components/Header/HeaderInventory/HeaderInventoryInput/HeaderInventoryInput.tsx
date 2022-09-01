import { Input } from "@mui/material";
import { styled } from "@mui/system";
import React, { ChangeEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { checkOnlyNumber } from "lib/services";
const InputMUI = styled(Input)({
  padding: "0 0 0 7px",
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
  const { control } = useFormContext();
  const handleChange = (onChange: (state: string) => void) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const onlyNumber = checkOnlyNumber(value);
      if (onlyNumber || !value) {
        onChange(value);
      }
    };
  };

  return (
    <Controller
      name="stock_days"
      control={control}
      render={({ field: { value, onChange } }) => (
        <InputMUI
          type="number"
          value={value}
          onChange={handleChange(onChange)}
        />
      )}
    />
  );
};

export default React.memo(HeaderInventoryInput);
