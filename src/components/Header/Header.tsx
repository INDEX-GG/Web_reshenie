import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HeaderTabPanel from "./HeaderTabPanel/HeaderTabPanel";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderInventory from "./HeaderInventory/HeaderInventory";
import HeaderDownload from "./HeaderDownload/HeaderDownload";
import HeaderUnloading from "./HeaderUnloading/HeaderUnloading";
import { useHeaderStyle } from "./style";
import { FormProvider, useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/useAppStore";
import TestBody from "./TestBody/TestBody";
import HeaderDownAttributes from "./HeaderDownAttributes/HeaderDownAttributes";
import HeaderDownRemainder from "./HeaderDownRemainder/HeaderDownRemainder";

interface IData {
  marketplace: string;
  stock_days: string;
  our_stock: string;
  marketplace_stock: string;
  stock_table: File;
  products_table: File;
}

const Header = () => {
  const dispatch = useAppDispatch();
  const methods = useForm();
  const onSubmit = async (data: IData) => {
    const formData = new FormData();
    formData.append("marketplace", data.marketplace);
    formData.append("stock_days", data.stock_days);
    formData.append("our_stock", data.our_stock);
    formData.append("marketplace_stock", data.marketplace_stock);
    formData.append("stock_table", data.stock_table);
    formData.append("products_table", data.products_table);
    console.log(formData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <AppBar position="static">
          <Toolbar sx={{ background: "white" }}>
            <HeaderWrapMUI>
              <HeaderLeftMUI>
                <HeaderTabPanel />
              </HeaderLeftMUI>
              <HeaderCenterMUI>
                <TestBody />
                <HeaderInventory />
                <HeaderMenu />
                <HeaderDownAttributes />
                <HeaderDownRemainder />
              </HeaderCenterMUI>
              <HeaderRightMUI>
                <HeaderDownload />
                <HeaderUnloading />
              </HeaderRightMUI>
            </HeaderWrapMUI>
          </Toolbar>
        </AppBar>
      </form>
    </FormProvider>
  );
};
const { HeaderWrapMUI, HeaderLeftMUI, HeaderCenterMUI, HeaderRightMUI } =
  useHeaderStyle();
export default React.memo(Header);
