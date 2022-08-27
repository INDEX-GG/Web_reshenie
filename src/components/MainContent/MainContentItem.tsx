import React, { useMemo, useState } from "react";
import { IdataItem } from "types/types";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import styled from "@emotion/styled";
import { TableRow } from "@mui/material";
import MainContentSubtitle from "./MainContentSubtitle";
import { useAppSelector } from "../../hooks/useAppStore";

interface IMainContentItemProps {
  rowItem: IdataItem;
  index: number;
}

const MainContentItem = ({ rowItem, index }: IMainContentItemProps) => {
  // console.log(rowItem);
  const { data } = useAppSelector((state) => state.TABLE);

  const columnItemArray = useMemo(() => {
    const array: { value: string; rowItem: IdataItem }[] = [];
    if (typeof rowItem === "object") {
      for (const [_, value] of Object.entries(rowItem)) {
        array.push({ value, rowItem });
      }
    }
    return array;
  }, [rowItem]);

  console.log(columnItemArray, rowItem);

  return (
    <TableRowUI sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <MainContentSubtitle
        value={rowItem.vendor_code}
        rowItem={rowItem}
        TableCellProps={{ component: "th", scope: "i" }}
      />
      <MainContentSubtitle value={rowItem.delivery_type} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem.product_type} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem.name} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem.barcode} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem[3]} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem[4]} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem[5]} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem[6]} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem[7]} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem[8]} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem.abc_segment} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem.sold_this_month} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem.fbo} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem.fbs} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem.stock} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem.msks} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem.rc} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem.ads} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem.ids} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem.smart_order_auto} rowItem={rowItem} />
      <MainContentSubtitle
        value={rowItem.smart_order_correct}
        rowItem={rowItem}
      />
      <MainContentSubtitle value={rowItem.manual_delivery} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem.price} rowItem={rowItem} />
      <MainContentSubtitle value={rowItem.comment} rowItem={rowItem} />

      {index === 0 && (
        <>
          <TableCell>{data.adjustment_cost}</TableCell>
          <TableCell>{data.delivery_cost}</TableCell>
          <TableCell>{data.manual_delivery_cost}</TableCell>
        </>
      )}
    </TableRowUI>
  );
};

const TableRowUI = styled(TableRow)({
  "&::first-of-type": {
    borderTop: "1px solid white",
  },
  "&:last-child td, &:last-child th": {
    borderRight: "1px solid #AAAAAA",
    borderBottom: "none",
  },
});

export default MainContentItem;
