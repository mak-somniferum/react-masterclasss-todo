import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>To dos</h1>
      <CreateToDo />
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
