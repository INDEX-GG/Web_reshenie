import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HeaderTabPanel from "./HeaderTabPanel/HeaderTabPanel";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderInventory from "./HeaderInventory/HeaderInventory";
import HeaderDownXLS from "./HeaderDownXLS/HeaderDownXLS";
import HeaderDownload from "./HeaderDownload/HeaderDownload";
import HeaderUnloading from "./HeaderUnloading/HeaderUnloading";
import { useHeaderStyle } from "./style";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ background: "white" }}>
        <HeaderWrapMUI>
          <HeaderLeftMUI>
            <HeaderTabPanel />
          </HeaderLeftMUI>
          <HeaderCenterMUI>
            <HeaderMenu />
            <HeaderInventory />
            <HeaderDownXLS />
          </HeaderCenterMUI>
          <HeaderRightMUI>
            <HeaderDownload />
            <HeaderUnloading />
          </HeaderRightMUI>
        </HeaderWrapMUI>
      </Toolbar>
    </AppBar>
  );
};
const { HeaderWrapMUI, HeaderLeftMUI, HeaderCenterMUI, HeaderRightMUI } =
  useHeaderStyle();
export default React.memo(Header);
