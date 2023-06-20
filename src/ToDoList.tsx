import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}
function ToDoList() {
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
    </div>
  );
}

export default ToDoList;
