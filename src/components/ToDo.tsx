import { useSetRecoilState } from "recoil";
import { Categories, IToDo } from "../interface";
import { toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: Categories) => {
    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      const newToDo = { id, text, category: newCategory };
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && <button onClick={() => onClick(Categories.TO_DO)}>To Do</button>}
      {category !== Categories.DOING && <button onClick={() => onClick(Categories.DOING)}>Doing</button>}
      {category !== Categories.DONE && <button onClick={() => onClick(Categories.DONE)}>Done</button>}
    </li>
  );
}

export default ToDo;
