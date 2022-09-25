import React, { useMemo, useState, useEffect } from "react";
import DataTableFilter from "../data-table-filter/data-table-filter";
import DataTable from "../data-table/data-table";
import * as appApi from "../../utils/api";
import "./app.css";
import { IFilter, ITableData } from "../../utils/types";
import { getDataOnRussian } from "../../utils/helpers";

function App() {
  const [tableData, setTableData] = useState<ITableData[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [filter, setFilter] = useState<IFilter>({
    column: "",
    choice: "",
    valueFiltration: "",
  });

  useEffect(() => {
    appApi
      .getContent()
      .then((data: ITableData[]) => {
        data.forEach((item) => {
          item.data = getDataOnRussian(item.data);
        });
        setTableData(data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const sortedAndSearchedTableData = useMemo(() => {
    if (
      filter.column === "" ||
      filter.choice === "" ||
      filter.valueFiltration === ""
    ) {
      return tableData;
    }
    const field = filter.column;
    if (filter.choice === "содержит") {
      return tableData.filter((item) =>
        item[field]
          .toString()
          .toLowerCase()
          .includes(filter.valueFiltration.toString())
      );
    }
    if (filter.choice === "равно") {
      return tableData.filter(
        (item) => item[field].toString() === filter.valueFiltration.toString()
      );
    }
    if (filter.choice === "больше") {
      return tableData.filter((item) => item[field] > filter.valueFiltration);
    }
    if (filter.choice === "меньше") {
      return tableData.filter((item) => item[field] < filter.valueFiltration);
    }
    return tableData;
  }, [filter, tableData]);
  return isLoading ? (
    <div className="app">
      <DataTableFilter filter={filter} setFilter={setFilter} />
      <DataTable tableData={sortedAndSearchedTableData} pageSize={10} />
    </div>
  ) : (
    <div>Грузится...</div>
  );
}
export default App;
