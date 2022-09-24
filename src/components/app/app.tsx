import React, { useMemo, useState, useEffect } from "react";
import DataTableFilter from "../data-table-filter/data-table-filter";
import DataTable from "../data-table/data-table";
import * as appApi from "../../utils/api";
import "./app.css";

interface IFilter {
  column: "Name" | "quantity" | "distance" | "none";
  choice: "содержит" | "больше" | "меньше" | "равно" | "";
  valueFiltration: number | string;
}
interface ITableData {
  id: string;
  Data: string;
  Name: string;
  quantity: number;
  distance: number;
}
function App() {
  const [tableData, setTableData] = useState<ITableData[]>([]);
  const [filter, setFilter] = useState<IFilter>({
    column: "none",
    choice: "",
    valueFiltration: "",
  });

  useEffect(() => {
    appApi
      .getContent()
      .then((data) => {
        setTableData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const sortedAndSearchedTableData = useMemo(() => {
    if (
      filter.column === "none" ||
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
      return tableData.filter((item) => item[field] === filter.valueFiltration);
    }
    if (filter.choice === "больше") {
      return tableData.filter((item) => item[field] > filter.valueFiltration);
    }
    if (filter.choice === "меньше") {
      return tableData.filter((item) => item[field] < filter.valueFiltration);
    }
  }, [filter, tableData]);
  return (
    <div className="app">
      <DataTableFilter filter={filter} setFilter={setFilter} />
      <DataTable tableData={sortedAndSearchedTableData} pageSize={10} />
    </div>
  );
}
export default App;
