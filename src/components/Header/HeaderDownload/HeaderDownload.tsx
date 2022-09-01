import React from "react";
import { Button, styled } from "@mui/material";

const ButtonDownload = styled(Button)(({ theme }) => ({
  fontWeight: "500",
  fontSize: "14px",
  marginRight: "15px",
  minWidth: "128px",

  [theme.breakpoints.down(1400)]: {
    fontSize: "12px",
  },
}));

const HeaderDownload = () => {
  return (
    <ButtonDownload
      variant="contained"
      type="submit"
      sx={{ textTransform: "none", fontSize: "16px" }}>
      Отправить
    </ButtonDownload>
  );
};

export default HeaderDownload;
