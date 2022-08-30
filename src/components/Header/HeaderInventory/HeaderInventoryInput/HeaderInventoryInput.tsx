import { Input } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useFormContext } from "react-hook-form";

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
  const { register } = useFormContext();
  return <InputMUI type="number" {...register("stock_days")} />;
};

export default React.memo(HeaderInventoryInput);
