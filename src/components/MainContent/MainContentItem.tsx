import React, { useMemo, useState } from "react";
import { IdataItem } from "types/types";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import styled from "@emotion/styled";
import { TableRow } from "@mui/material";
import { useAppSelector } from "../../hooks/useAppStore";

interface IMainContentItemProps {
  rowItem: IdataItem;
  index: number;
}
// const TableLeftMUI = styled("div")({
//   // position: "absolute",
// });
// const TableRightMUI = styled("div")({
//   // position: "absolute",
// });

const MainContentItem = ({ rowItem, index }: IMainContentItemProps) => {
  const { data } = useAppSelector((state) => state.TABLE);

  return (
    <TableRowUI>
      {/* <TableLeftMUI> */}
      <TableCell100MUI>{rowItem.vendor_code}</TableCell100MUI>
      <TableCell100MUI>{rowItem.delivery_type}</TableCell100MUI>
      <TableCell100MUI>{rowItem.product_type} </TableCell100MUI>
      <TableCell150MUI>{rowItem.name} </TableCell150MUI>
      <TableCell130MUI>{rowItem.barcode} </TableCell130MUI>
      {/* </TableLeftMUI>
      <TableRightMUI> */}
      <TableCell70MUI>{rowItem[0]}</TableCell70MUI>
      <TableCell70MUI>{rowItem[1]}</TableCell70MUI>
      <TableCell70MUI>{rowItem[2]}</TableCell70MUI>
      <TableCell70MUI>{rowItem[3]}</TableCell70MUI>
      <TableCell70MUI>{rowItem[4]}</TableCell70MUI>
      <TableCell70MUI>{rowItem[5]}</TableCell70MUI>
      <TableCell100MUI>{rowItem.abc_segment}</TableCell100MUI>
      <TableCell100MUI>{rowItem.sold_this_month}</TableCell100MUI>
      <TableCell70MUI>{rowItem.fbo}</TableCell70MUI>
      <TableCell70MUI>{rowItem.fbs}</TableCell70MUI>
      <TableCell70MUI>{rowItem.stock}</TableCell70MUI>
      <TableCell70MUI>{rowItem.msks}</TableCell70MUI>
      <TableCell70MUI>{rowItem.rc}</TableCell70MUI>
      <TableCell70MUI>{rowItem.ads}</TableCell70MUI>
      <TableCell100MUI>{rowItem.ids}</TableCell100MUI>
      <TableCell100MUI>{rowItem.smart_order_auto}</TableCell100MUI>
      <TableCell70MUI>{rowItem.smart_order_correct}</TableCell70MUI>
      <TableCell100MUI>{rowItem.manual_delivery}</TableCell100MUI>
      <TableCell100MUI>{rowItem.price}</TableCell100MUI>
      <TableCell100MUI>{rowItem.comment}</TableCell100MUI>

      {index === 0 && (
        <>
          <TableCell70MUI>{data.adjustment_cost}</TableCell70MUI>
          <TableCell70MUI>{data.delivery_cost}</TableCell70MUI>
          <TableCell70MUI>{data.manual_delivery_cost}</TableCell70MUI>
        </>
      )}
      {/* </TableRightMUI> */}
    </TableRowUI>
  );
};

const TableRowUI = styled(TableRow)({
  // position: "relative",
  // display: "flex",
  "&::first-of-type": {
    borderTop: "1px solid white",
  },
  "&:last-child td, &:last-child th": {
    borderRight: "1px solid #AAAAAA",
    borderBottom: "none",
  },
});
const TableCell70MUI = styled(TableCell)({
  [`&.${tableCellClasses.body}`]: {
    minWidth: "70px",
    maxWidth: "71px",
    fontSize: "14px",
    borderRight: "1px solid #AAAAAA",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    padding: " 12px 5px 4px",
  },
});
const TableCell100MUI = styled(TableCell)({
  [`&.${tableCellClasses.body}`]: {
    minWidth: "100px",
    maxWidth: "100px",
    fontSize: "14px",
    borderRight: "1px solid #AAAAAA",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    padding: " 12px 5px 4px",
  },
});
const TableCell130MUI = styled(TableCell)({
  [`&.${tableCellClasses.body}`]: {
    minWidth: "130px",
    maxWidth: "130px",
    fontSize: "14px",
    borderRight: "1px solid #AAAAAA",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    padding: " 12px 5px 4px",
  },
});
const TableCell150MUI = styled(TableCell)({
  [`&.${tableCellClasses.body}`]: {
    minWidth: "150px",
    maxWidth: "150px",
    fontSize: "14px",
    borderRight: "1px solid #AAAAAA",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    padding: " 12px 5px 4px",
  },
});

export default MainContentItem;
