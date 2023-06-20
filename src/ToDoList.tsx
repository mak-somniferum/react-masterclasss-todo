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
  const { register, watch } = useForm();
  // console.log(register("todo"))
  console.log(watch())
  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("First Name")} placeholder="First Name" />
        <input {...register("Last Name")} placeholder="Last Name" />
        <input {...register("Phone Number")} placeholder="Phone Number" />
        <input {...register("Address")} placeholder="Address" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;