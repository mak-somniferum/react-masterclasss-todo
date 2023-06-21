import { atom } from "recoil";
import { IToDo } from "./interface";

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
