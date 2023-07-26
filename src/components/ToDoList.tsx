import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import { Categories } from '../interface';
import { styled } from 'styled-components';

const Box = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  padding: 0.875rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const SelectBox = styled.select`
  border-radius: 0.25rem;
  border: 0;
  padding: 0.3rem;
  margin: 0.875rem 0;
`;

const ListBox = styled.ul`
  margin-top: 0.875rem;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    width: 100%;
    list-style: 0;
    padding: 0.875rem;
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const NoList = styled.span`
  display: block;
  margin: 0.875rem 0;
  text-align: center;
  color: #fff;
  font-size: 0.875rem;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as any);
  };
  return (
    <Box>
      <Header>To dos</Header>
      <SelectBox value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </SelectBox>
      <CreateToDo />
      {toDos.length !== 0 ? (
        <ListBox>
          {toDos?.map(toDo => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </ListBox>
      ) : (
        <NoList>아직 {category === Categories.TO_DO ? '할 일' : category === Categories.DOING ? '하는 일' : category === Categories.DONE ? '한 일' : '일'}이 없습니다!</NoList>
      )}
    </Box>
  );
}

export default ToDoList;
