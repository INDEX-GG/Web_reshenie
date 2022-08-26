import React, { ChangeEvent } from "react";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import DownloadIcon from "assets/icon/DownloadIcon";
import { HeaderTypography } from "../style";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppStore";
import { webReshenieAxios } from "lib/http";
import { getDataThunk } from "store/reducers/tableSlice/tableSliceAPI/tableSliceAPI";

const IconSX = {
  background: "#1976d2",
  borderRadius: "4px",
  "&:hover": {
    background: "#0060c0",
  },
};

const HeaderDownXLS = () => {
  const { marketplace, stock_days, stock, marketplace_stock } = useAppSelector(
    (state) => state.BOOKS,
  );
  const dispatch = useAppDispatch();

  const handleChengeInputFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { files } = event.target;
    console.log(files);

    if (files?.length) {
      const fileList: File[] = Array.from(files);
      const formData = new FormData();
      formData.append("marketplace", marketplace);
      formData.append("stock_days", stock);
      formData.append("our_stock", String(stock_days));
      formData.append("marketplace_stock", marketplace_stock);
      formData.append("stock_table", fileList[0]);
      formData.append("products_table", fileList[0]);
      //~~~~~~//
      const response = await webReshenieAxios.post(
        "/api/table/upload/",
        formData,
      );
      // console.log(response.data);

      dispatch(getDataThunk(response.data));
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <HeaderTypography>Документ.xls</HeaderTypography>
      <IconButton component="label" sx={IconSX}>
        <input
          hidden
          accept=".xls*"
          type="file"
          onChange={handleChengeInputFile}
        />
        <DownloadIcon />
      </IconButton>
    </Box>
  );
};

export default React.memo(HeaderDownXLS);
