import { useState } from "react";

function ToDoList(){
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const { 
      currentTarget: { value }, 
    } = event;
    setTodoError("");
    setTodo(value);
  }
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo)
    if (todo.length < 10) {
      return setTodoError("To do should be longer");
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} placeholder="write a to do" />
        <button>Add</button>
        {todoError !== "" ? todoError : null}
      </form>
    </div>
  );
}

export default ToDoList;