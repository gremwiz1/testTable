import { FC } from "react";
import { ITableData } from "../../utils/types";
import "./table-row.css";

interface ITableRow {
  rowData: ITableData;
}
const TableRow: FC<ITableRow> = ({ rowData }) => {
  return (
    <div className="table-row">
      <div className="table-row__cell">{rowData.data}</div>
      <div className="table-row__cell">{rowData.name}</div>
      <div className="table-row__cell">{rowData.quantity}</div>
      <div className="table-row__cell">{rowData.distance}</div>
    </div>
  );
};

export default TableRow;
