import React from "react";
import { FC } from "react";
import { ITableData } from "../../utils/types";
import TableRow from "../table-row/table-row";
import "./data-table.css";

interface IDataTable {
  tableData: ITableData[];
  pageSize: number;
}
const DataTable: FC<IDataTable> = ({ tableData, pageSize }) => {
  const [numberPage, setNumberPage] = React.useState(1);
  const [currentData, setCurrentData] = React.useState<ITableData[]>([]);
  React.useEffect(() => {
    if (tableData.length > 0) {
      setCurrentData(tableData.slice(0, pageSize - 1));
      setNumberPage(1);
    }
    if (tableData.length === 0) {
      setNumberPage(0);
    }
  }, [tableData, pageSize]);
  function handleClickReducePage() {
    if (numberPage - pageSize > 0) {
      setCurrentData(
        tableData.slice(numberPage - pageSize - 1, numberPage - 1)
      );
      setNumberPage(numberPage - pageSize);
    }
  }

  function handleClickAddPage() {
    if (numberPage + pageSize < tableData.length) {
      setCurrentData(
        tableData.slice(
          numberPage + pageSize - 1,
          numberPage - 1 + 2 * pageSize
        )
      );
      setNumberPage(numberPage + pageSize);
    }
  }
  return (
    <>
      <div className="table">
        <div className="table__head">
          <div className="table__head_cell">Дата</div>
          <div className="table__head_cell">Название</div>
          <div className="table__head_cell">Количество</div>
          <div className="table__head_cell">Дистанция</div>
        </div>
        <div className="table__content">
          {tableData.length > 0
            ? currentData.map((item) => (
                <TableRow rowData={item} key={item.id} />
              ))
            : "Ничего не найдено"}
        </div>
        <div className="page-number-block">
          <p>{` ${numberPage} - ${
            tableData.length > numberPage + pageSize - 1
              ? numberPage + pageSize - 1
              : tableData.length
          } of ${tableData.length}`}</p>
          <p
            className="page-number-block__button"
            onClick={handleClickReducePage}
          >
            {"<"}
          </p>
          <p className="page-number-block__button" onClick={handleClickAddPage}>
            {">"}
          </p>
        </div>
      </div>
    </>
  );
};

export default DataTable;
