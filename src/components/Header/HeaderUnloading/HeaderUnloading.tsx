import React from "react";
import { Button, styled } from "@mui/material";
import UnloadIcon from "assets/icon/UnloadIcon";
import { Box } from "@mui/system";

const ButtonUnloading = styled(Button)(({ theme }) => ({
  fontWeight: "500",
  fontSize: "14px",
  minWidth: "128px",
  [theme.breakpoints.down(1400)]: {
    fontSize: "12px",
  },
}));
const HeaderUnloading = () => {
  return (
    <ButtonUnloading variant="contained">
      <UnloadIcon />
      <Box sx={{ marginLeft: "5px" }}>Сохранить</Box>
    </ButtonUnloading>
  );
};

export default HeaderUnloading;
