export interface IFilter {
  column: "name" | "quantity" | "distance" | "";
  choice: "содержит" | "больше" | "меньше" | "равно" | "";
  valueFiltration: number | string;
}
export interface ITableData {
  id: string;
  data: string;
  name: string;
  quantity: number;
  distance: number;
}
