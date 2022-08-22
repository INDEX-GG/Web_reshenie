import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Unstable_Grid2";
import { Paper, styled } from "@mui/material";
import HeaderTabPanel from "./HeaderTabPanel/HeaderTabPanel";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderInventory from "./HeaderInventory/HeaderInventory";
import HeaderDownXLS from "./HeaderDownXLS/HeaderDownXLS";
import HeaderDownload from "./HeaderDownload/HeaderDownload";
import HeaderUnloading from "./HeaderUnloading/HeaderUnloading";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const HeaderWrapUI = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
}));
const HeaderLeftUI = styled("div")(({ theme }) => ({
  width: "30%",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    width: "20%",
  },
}));
const HeaderCenter = styled("div")(({ theme }) => ({
  width: "40%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    width: "60%",
  },
}));
const HeaderRightUI = styled("div")(({ theme }) => ({
  width: "30%",
  display: "flex",
  justifyContent: "center",

  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    width: "20%",
  },
}));

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ background: "white" }}>
        <HeaderWrapUI>
          <HeaderLeftUI>
            <HeaderTabPanel />
          </HeaderLeftUI>
          <HeaderCenter>
            <HeaderMenu />
            <HeaderInventory />
            <HeaderDownXLS />
          </HeaderCenter>
          <HeaderRightUI>
            <HeaderDownload />
            <HeaderUnloading />
          </HeaderRightUI>
        </HeaderWrapUI>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Header);
