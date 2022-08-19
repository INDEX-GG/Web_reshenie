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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container xs>
            <Grid xs>
              <HeaderTabPanel />
            </Grid>
            <Grid xs>
              <HeaderMenu />
            </Grid>
            <Grid xs>
              <HeaderInventory />
            </Grid>
            <Grid xs>
              <HeaderDownXLS />
            </Grid>
            <Grid xs>
              <HeaderDownload />
            </Grid>
            <Grid xs>
              <HeaderUnloading />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default React.memo(Header);
