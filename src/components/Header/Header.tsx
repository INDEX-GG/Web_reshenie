import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HeaderTabPanel from "./HeaderTabPanel/HeaderTabPanel";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderInventory from "./HeaderInventory/HeaderInventory";
import HeaderDownload from "./HeaderDownload/HeaderDownload";
import HeaderUnloading from "./HeaderUnloading/HeaderUnloading";
import { useHeaderStyle } from "./style";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/useAppStore";
import TestBody from "./TestBody/TestBody";
import HeaderDownAttributes from "./HeaderDownAttributes/HeaderDownAttributes";
import HeaderDownRemainder from "./HeaderDownRemainder/HeaderDownRemainder";
import { postBooksThunk } from "store/reducers/tableSlice/tableSliceAPI/tableSliceAPI";
import HeaderButtonYandex from "./HeaderButtonYandex/HeaderButtonYandex";

export interface IPostData {
  marketplace: string;
  stock_days: string;
  our_stock: string;
  marketplace_stock: string;
  stock_table: File | null;
  products_table: File | null;
}

const Header = () => {
  const dispatch = useAppDispatch();

  const methods = useForm<IPostData>({
    defaultValues: {
      marketplace: "yandex",
      stock_days: "0",
      our_stock: "rc",
      marketplace_stock: "samara",
      stock_table: null,
      products_table: null,
    },
  });
  const onSubmit: SubmitHandler<IPostData> = async (data) => {
    dispatch(postBooksThunk(data));
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <FormProvider {...methods}>
        <AppBar position="static">
          <Toolbar sx={{ background: "white" }}>
            <HeaderWrapMUI>
              <HeaderLeftMUI>
                <HeaderTabPanel />
              </HeaderLeftMUI>
              <HeaderCenterMUI>
                <HeaderMenu />
                <HeaderInventory />
                {/*  */}
                <TestBody />
                <HeaderDownAttributes />
                <HeaderDownRemainder />
                <HeaderButtonYandex />
              </HeaderCenterMUI>
              <HeaderRightMUI>
                <HeaderDownload />
                <HeaderUnloading />
              </HeaderRightMUI>
            </HeaderWrapMUI>
          </Toolbar>
        </AppBar>
      </FormProvider>
    </form>
  );
};
const { HeaderWrapMUI, HeaderLeftMUI, HeaderCenterMUI, HeaderRightMUI } =
  useHeaderStyle();
export default React.memo(Header);
