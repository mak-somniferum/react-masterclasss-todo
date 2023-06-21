import { IToDo } from "../interface";

function ToDo({ text }: IToDo) {
  return <li>{text}</li>;
}

export default ToDo;
