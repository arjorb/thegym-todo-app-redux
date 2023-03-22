import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, completedTodo } from '../features/todo';
import { FaTrash } from 'react-icons/fa';

const TodoList = () => {
  const todos = useSelector(state => state.todo.value);
  const dispatch = useDispatch();

  const todoElements = todos.map(todo => (
    <div key={todo.id} className='flex justify-between gap-5 items-center mt-5 border-b-2 border-gray-100 pb-2 w-150'>
      <div className='flex gap-3 items-baseline'>
        <input type='checkbox' id='todo' onChange={() => dispatch(completedTodo(todo.id))} checked={todo.isChecked} />
        <label htmlFor='todo' className={`text-xl text-gray-500 leading-tight ${todo.isChecked ? 'line-through' : 'no-underline'}`}>
          {todo.title}
        </label>
      </div>
      <div onClick={() => dispatch(removeTodo(todo.id))} className='bg-red-50 p-3 rounded-full cursor-pointer'>
        <FaTrash className='text-red-300' />
      </div>
    </div>
  ));
  return (
    <div>
      {todos.length === 0 && <h1 className='text-4xl font-bold text-gray-200 text-center mt-20'>No Todo</h1>}
      {todoElements}
    </div>
  );
};

export default TodoList;
