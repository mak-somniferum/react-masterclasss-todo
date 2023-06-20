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

function ToDoList (){
  const { register, watch, handleSubmit, formState } = useForm(); // register: input 등록 / watch: 감지 / handleSubmit: onValid & onInvalid
  const onValid = (data: any) => {
    console.log(data)
  }
  console.log(formState.errors)
  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
        <input {...register("Email", { required: "Email is required" })} placeholder="Email" />
        <input {...register("First Name", { required: true })} placeholder="First Name" />
        <input {...register("Last Name", { required: true })} placeholder="Last Name" />
        <input {...register("Password", { required: true, minLength: { value: 8, message: "Your password is too short." } })} placeholder="Password" />
        <input {...register("Address", { required: true })} placeholder="Address" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;