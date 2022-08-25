import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useAppDispatch } from "../../../hooks/useAppStore";
import { pushDataMarketplace } from "store/reducers/booksSlice/booksSlice";
import { styled } from "@mui/system";

const TabMUI = styled(Tab)({
  fontWeight: "600",
  fontSize: "16px",
});

const HeaderTabPanel = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState("yandex");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    dispatch(pushDataMarketplace(newValue));
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <TabMUI value="yandex" label="Яндекс" />
      <TabMUI value="ozon" label="OZON" />
    </Tabs>
  );
};

export default React.memo(HeaderTabPanel);
