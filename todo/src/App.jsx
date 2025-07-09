import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useDispatch,useSelector } from 'react-redux'
import { fetchTodos } from './features/todo/todoSlice'
const App = () => {
  const dispatch =useDispatch();
  const state = useSelector((state) => state);

  console.log(state)
  if (state.todo.isLoading){
    return <h1>loading...</h1>
  }
  return (
    <div>
     <button onClick={(e)=>(dispatch(fetchTodos()))}>fetch </button>

     {state.todo.data && state.todo.data.map((e)=>( <li>{e.title}</li>
    ))}
    </div>
  )
}

export default App