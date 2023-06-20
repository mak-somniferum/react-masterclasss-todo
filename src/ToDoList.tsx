import { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList(){
//   const [todo, setTodo] = useState("");
//   const [todoError, setTodoError] = useState("");
//   const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodoError("");
//     setTodo(value);
//   }
//   const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(todo)
//     if (todo.length < 10) {
//       return setTodoError("To do should be longer");
//     }
//   }
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={todo} placeholder="write a to do" />
//         <button>Add</button>
//         {todoError !== "" ? todoError : null}
//       </form>
//     </div>
//   );
// }

interface IForm {
  Email: string;
  FirstName: string;
  LastName: string;
  Password: string;
  PasswordChk: string;
  Address?: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register, // input 등록
    watch, // 감지
    handleSubmit, // validatin
    formState: { errors }, // errors
    setError,
  } = useForm<IForm>({
    defaultValues: {
      Email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.Password !== data.PasswordChk) {
      setError("PasswordChk", { message: "Password is not the same" }, { shouldFocus: true });
    }
    setError("extraError", { message: "Server offline" });
  };
  console.log(errors);
  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
        <input style={{ borderColor: errors?.Email && "red" }} {...register("Email", { required: "Email is required", pattern: { value: /^[A-Za-z0-9._%+-]+@naver\.com$/, message: "Only naver.com emails allowed" } })} placeholder="Email" />
        <span>{errors?.Email?.message}</span>
        <input
          {...register("FirstName", {
            required: "FirstName is required",
            validate: {
              noNico: value => (value.includes("nico") ? "No nicos allowed" : true),
              noNick: value => (value.includes("nick") ? "No nicks allowed" : true),
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.FirstName?.message}</span>
        <input {...register("LastName", { required: "LastName is required" })} placeholder="Last Name" />
        <span>{errors?.LastName?.message}</span>
        <input {...register("Password", { required: "Password is required", minLength: { value: 4, message: "Your password is too short." } })} placeholder="Password" />
        <span>{errors?.Password?.message}</span>
        <input {...register("PasswordChk", { required: "Password check is required" })} placeholder="Password check" />
        <span>{errors?.PasswordChk?.message}</span>
        <input {...register("Address")} placeholder="Address" />
        <span>{errors?.Address?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
