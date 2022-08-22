import React from "react";
import { Button } from "@mui/material";

const HeaderDownload = () => {
  return (
    <Button
      variant="contained"
      sx={{
        marginRight: "15px",
        fontSize: { xs: "10px", lg: "14px" },
        fontWeight: "600",
      }}>
      Сохранить
    </Button>
  );
};

export default HeaderDownload;
