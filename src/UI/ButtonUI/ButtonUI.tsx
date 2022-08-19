import React from "react";
import { Button, ButtonProps } from "@mui/material";

const ButtonUI = (props: ButtonProps) => {
  const { children, ...otherProps } = props;
  return <Button {...otherProps}>{children}</Button>;
};

export default React.memo(ButtonUI);
