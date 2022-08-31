import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/system";
import { useFormContext } from "react-hook-form";

const TabMUI = styled(Tab)({
  fontWeight: "500",
  fontSize: "16px",
});

const HeaderTabPanel = () => {
  const { setValue } = useFormContext();
  const [value, setTabsValue] = React.useState("yandex");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue("marketplace", newValue);
    setTabsValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <TabMUI value="yandex" label="Яндекс" />
      <TabMUI value="ozon" label="OZON" />
    </Tabs>
  );
};

export default React.memo(HeaderTabPanel);
