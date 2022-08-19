import React from "react";
import { Box } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

const HeaderDownXLS = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography sx={{ marginRight: "10px" }}>Документ.xls</Typography>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <SaveAltIcon />
      </IconButton>
    </Box>
  );
};

export default React.memo(HeaderDownXLS);
