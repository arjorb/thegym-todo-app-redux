const TodoInput = () => {
  return (
    <div>
      <h1 className='text-6xl text-center font-bold text-gray-100'>Todos</h1>
      <div className='flex gap-3 items-center py-3 px-7 rounded-full shadow-3xl mt-6'>
        <input type='text' placeholder='add todo...' onChange={handleChange} value={input} className='w-full bg-transparent text-lg border-none outline-none placeholder:text-gray-200' />
        <HiPlusCircle onClick={handleAdd} size={30} className={`cursor-pointer ${input === '' ? 'text-slate-300' : 'text-green-500'} `} />
      </div>
    </div>
  );
};

export default TodoInput;
