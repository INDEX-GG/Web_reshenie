import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";

import { useAppSelector } from "../../hooks/useAppStore";
import { MainContentObj } from "./MainContentObj";

const TableCellUI = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    color: "#AAAAAA",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "100%",
    padding: "0px",
    textAlign: "center",
    borderBottom: "1px solid white",
    minWidth: "110px",
    maxWidth: "170px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "14px",
    borderRight: "1px solid #AAAAAA",

    minWidth: "110px",
    maxWidth: "170px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    padding: " 12px 5px 4px",
  },
});
const TableRowUI = styled(TableRow)({
  "&::first-of-type": {
    borderTop: "1px solid white",
  },
  "&:last-child td, &:last-child th": {
    borderRight: "1px solid #AAAAAA",
    borderBottom: "none",
  },
});

const MainContent = () => {
  const { data, isLoading, error } = useAppSelector((state) => state.TABLE);

  if (isLoading) {
    <h1>Loading...</h1>;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {error}
        <TableHead>
          <TableRow>
            {MainContentObj.map((title, index) => (
              <TableCellUI key={index}>{title}</TableCellUI>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.result.map((i) => (
            <TableRowUI
              key={i.vendor_code}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCellUI component="th" scope="i">
                {i.vendor_code}
              </TableCellUI>
              <TableCellUI>{i.delivery_type}</TableCellUI>
              <TableCellUI>{i.product_type}</TableCellUI>
              <TableCellUI>{i.title}</TableCellUI>
              <TableCellUI>{i.barcode}</TableCellUI>
              <TableCellUI align="right">{i.march}</TableCellUI>
              <TableCellUI align="right">{i.april}</TableCellUI>
              <TableCellUI align="right">{i.may}</TableCellUI>
              <TableCellUI align="right">{i.june}</TableCellUI>
              <TableCellUI align="right">{i.july}</TableCellUI>
              <TableCellUI align="right">{i.august}</TableCellUI>
              <TableCellUI align="right">{i.abc_segment}</TableCellUI>
              <TableCellUI align="right">{i.sales_month}</TableCellUI>
              <TableCellUI align="right">{i.current_sales_fbo}</TableCellUI>
              <TableCellUI align="right">{i.current_sales_fbs}</TableCellUI>
              <TableCellUI align="right">{i.samara}</TableCellUI>
              <TableCellUI align="right">{i.remainder_mckc}</TableCellUI>
              <TableCellUI align="right">{i.remainder_rc}</TableCellUI>
              <TableCellUI align="right">{i.ads}</TableCellUI>
              <TableCellUI align="right">{i.current_idc}</TableCellUI>
              <TableCellUI align="right">{i.delivery_cost}</TableCellUI>
              <TableCellUI align="right">{i.adjustment_cost}</TableCellUI>
              <TableCellUI align="right">{i.manual_delivery_cost}</TableCellUI>
              <TableCellUI align="right">{i.shop_price}</TableCellUI>
              <TableCellUI align="right">{i.сomments}</TableCellUI>
            </TableRowUI>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(MainContent);
