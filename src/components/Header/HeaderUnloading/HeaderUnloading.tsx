import React from "react";
import { Button } from "@mui/material";
import UnloadIcon from "assets/icon/UnloadIcon";
import { Box } from "@mui/system";

const HeaderUnloading = () => {
  return (
    <Button
      variant="contained"
      sx={{ fontSize: { xs: "10px", lg: "14px" }, fontWeight: "600" }}>
      <UnloadIcon />
      <Box sx={{ marginLeft: "5px" }}>Выгрузить</Box>
    </Button>
  );
};

export default HeaderUnloading;
