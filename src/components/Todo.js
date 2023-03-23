import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <div className='flex flex-col items-center mt-16'>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todo;
