import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';
import { styled } from 'styled-components';

export interface IForm {
  toDo: string;
}

const Input = styled.input`
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.3rem;
  border: 0;
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 5px;

  div {
    flex: 1;
  }
`;

const Message = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 0.875rem;
  color: #ff4747;
`;

const Button = styled.button`
  border: 0;
  font-size: 1rem;
  padding: 0.3rem 0.875rem;
  border-radius: 0.25rem;
  background-color: #fff;
  cursor: pointer;
`;

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();

  const onSubmit = ({ toDo }: IForm) => {
    setToDos(oldToDos => [{ id: Date.now(), text: toDo, category }, ...oldToDos]);
    setValue('toDo', '');
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            {...register('toDo', {
              required: 'Please write a To Do',
            })}
            placeholder="write a to do"
          />
          <Message>{errors?.toDo?.message}</Message>
        </div>
        <Button>Add</Button>
      </Form>
    </>
  );
}

export default CreateToDo;
