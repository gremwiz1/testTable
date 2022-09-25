export interface IFilter {
  column: "Name" | "quantity" | "distance" | "";
  choice: "содержит" | "больше" | "меньше" | "равно" | "";
  valueFiltration: number | string;
}
export interface ITableData {
  id: string;
  Data: string;
  Name: string;
  quantity: number;
  distance: number;
}
