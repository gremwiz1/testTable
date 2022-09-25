import { FC } from "react";
import Input from "../input/input";
import Select from "../select/select";
import "./data-table-filter.css";

interface IDataTableFilter {
  filter: any;
  setFilter: any;
}
const DataTableFilter: FC<IDataTableFilter> = ({ filter, setFilter }) => {
  return (
    <div className="data-table-filter">
      <Select
        value={filter.sort}
        onChange={(selectedSort: string) =>
          setFilter({ ...filter, column: selectedSort })
        }
        defaultValue="Сортировка по"
        options={[
          { value: "Name", name: "По названию" },
          { value: "quantity", name: "По количеству" },
          { value: "distance", name: "По дистанции" },
        ]}
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort: string) =>
          setFilter({ ...filter, choice: selectedSort })
        }
        defaultValue="Значение "
        options={[
          { value: "содержит", name: "содержит" },
          { value: "больше", name: "больше" },
          { value: "меньше", name: "меньше" },
          { value: "равно", name: "равно" },
        ]}
      />
      <Input
        type="text"
        placeholder="Поиск..."
        value={filter.valueFiltration}
        onChange={(inputValue: string) =>
          setFilter({ ...filter, valueFiltration: inputValue })
        }
      />
    </div>
  );
};

export default DataTableFilter;
