import React, { ChangeEvent } from "react";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import DownloadIcon from "assets/icon/DownloadIcon";
import { HeaderTypography } from "../style";
import { useFormContext } from "react-hook-form";

const IconSX = {
  background: "#1976d2",
  borderRadius: "4px",
  "&:hover": {
    background: "#0060c0",
  },
};

const HeaderDownAttributes = () => {
  const { register } = useFormContext();

  const handleChengeInputFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { files } = event.target;
    console.log(files);
    if (files?.length) {
      const fileList: File[] = Array.from(files);
      console.log(fileList[0]);
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <HeaderTypography>Остаток.xls</HeaderTypography>
        <IconButton component="label" sx={IconSX}>
          <input name="stock_table" hidden accept=".xls*" type="file" />
          <DownloadIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <HeaderTypography>Атрибуты.xls</HeaderTypography>
        <IconButton component="label" sx={IconSX}>
          <input
            {...register("products_table")}
            hidden
            accept=".xls*"
            type="file"
            onChange={handleChengeInputFile}
          />
          <DownloadIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default React.memo(HeaderDownAttributes);
