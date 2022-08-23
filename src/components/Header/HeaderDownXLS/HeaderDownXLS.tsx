import React from "react";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import DownloadIcon from "assets/icon/DownloadIcon";
import { HeaderTypography } from "../style";

const HeaderDownXLS = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <HeaderTypography>Документ.xls</HeaderTypography>
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
