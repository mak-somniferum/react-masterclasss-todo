import { useSetRecoilState } from 'recoil';
import { Categories, IToDo } from '../interface';
import { toDoState } from '../atoms';
import { styled } from 'styled-components';

const ToDoText = styled.p`
  display: block;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 0.875rem;

  button {
    border: 0;
    font-size: 1rem;
    padding: 0.3rem 0.875rem;
    border-radius: 0.25rem;
    background-color: #fff;
    cursor: pointer;
  }
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: Categories) => {
    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      const newToDo = { id, text, category: newCategory };
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  };
  const onDelete = () => {
    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
      return [...oldToDos.slice(0, targetIndex), ...oldToDos.slice(targetIndex + 1)];
    });
  };
  return (
    <li>
      <ToDoText>{text}</ToDoText>
      <ButtonBox>
        {category !== Categories.TO_DO && <button onClick={() => onClick(Categories.TO_DO)}>To Do</button>}
        {category !== Categories.DOING && <button onClick={() => onClick(Categories.DOING)}>Doing</button>}
        {category !== Categories.DONE && <button onClick={() => onClick(Categories.DONE)}>Done</button>}
        <button onClick={() => onDelete()}>Delete</button>
      </ButtonBox>
    </li>
  );
}

export default ToDo;
