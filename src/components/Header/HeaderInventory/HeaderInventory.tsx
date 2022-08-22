import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const HeaderInventory = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        sx={{ marginRight: "10px", color: "#AAAAAA", fontWeight: "600" }}>
        Запас товара
      </Typography>
      <Box sx={{ width: "86px", height: "35px", bgcolor: " #E8E8E8" }}></Box>
    </Box>
  );
};

export default React.memo(HeaderInventory);
