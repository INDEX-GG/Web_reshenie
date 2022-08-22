import React from "react";
import { Box } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import DownloadIcon from "assets/icon/DownloadIcon";

const HeaderDownXLS = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        sx={{ marginRight: "10px", color: "#AAAAAA", fontWeight: "600" }}>
        Документ.xls
      </Typography>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        sx={{ background: "#1976d2", borderRadius: "4px" }}>
        <input hidden accept="image/*" type="file" />
        <DownloadIcon />
      </IconButton>
    </Box>
  );
};

export default React.memo(HeaderDownXLS);
