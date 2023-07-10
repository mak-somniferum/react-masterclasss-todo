import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  const [toDo, doing, done] = useRecoilValue(toDoSelector); // selector가 배열을 return 할 때는 좌변처럼 변수가 아닌 배열로 표현할 수 있다.
  return (
    <div>
      <h1>To dos</h1>
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map(toDo => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map(doing => (
          <ToDo key={doing.id} {...doing} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map(done => (
          <ToDo key={done.id} {...done} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
