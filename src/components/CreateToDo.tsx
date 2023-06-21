import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

export interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);

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

  return (
    <>
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
    </>
  );
}

export default CreateToDo;
