export enum Categories {
  "TO_DO",
  "DOING",
  "DONE",
}
export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}
