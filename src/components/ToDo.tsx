import { useSetRecoilState } from "recoil";
import { IToDo } from "../interface";
import { toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: IToDo["category"]) => {
    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      const newToDo = { id, text, category: newCategory };
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={() => onClick("DOING")}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={() => onClick("TO_DO")}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={() => onClick("DONE")}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
