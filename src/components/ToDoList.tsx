import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

const toDoState = atom({
  key: "toDo",
  default: [],
});

interface IForm {
  toDo: string;
}

function ToDoList() {
  const [value, modFn] = useRecoilState(toDoState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };

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
        <li></li>
      </ul>
    </div>
  );
}

export default ToDoList;
