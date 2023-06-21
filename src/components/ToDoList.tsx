import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
  toDo: string;
}

interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();

  const onSubmit = ({ toDo }: IForm) => {
    setToDos(oldToDos => [{ id: Date.now(), text: toDo, category: "TO_DO" }, ...oldToDos]);
    setValue("toDo", "");
  };

  console.log(toDos);

  return (
    <div>
      <h1>To dos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="write a to do"
        />
        <span>{errors?.toDo?.message}</span>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
