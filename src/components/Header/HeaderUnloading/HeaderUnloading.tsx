import React from "react";
import { Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const HeaderUnloading = () => {
  return (
    <Button variant="contained">
      {" "}
      <SaveIcon /> Выгрузить
    </Button>
  );
};

export default HeaderUnloading;
