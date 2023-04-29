import React,{useState} from 'react'
import TodoHeader from '../components/TodoHeader';
import '../Css/Todo.css'
import List from '../components/List';
const TodoList = () => {
  const [textVal,setTextVal]=useState('')
 const [todos,setTodos]=useState([])
    const name = JSON.parse(window.localStorage.getItem('saveinfo'));
    //const image = JSON.parse(window.localStorage.getItem('saveimage'));

    const addTask = () => {
      if(textVal.length>1){
        setTodos([...todos, {id:todos.length+1, value: textVal, check:false}])
      }
      
    }

    const deleteElement = (todo)=>{
      console.log(todo)
      setTodos(todos.filter(del=>del.id!=todo.id))
    }
    console.log(todos)
    /*
    const taskSave=(todo)=>{
      console.log(todo)
      setTodos(todos.filter(todos=>todos.id==todo.id ? todo.check=true: todo.check=false))
    }
   */
  return (
    <div>
      <TodoHeader name={name.name} />
      <h1>Add Your Daily Tasks</h1>
      <div>
        <input type='text' placeholder='My Task' className='taskInput' onChange={(e)=>setTextVal(e.target.value)}/>
        <button className='taskAdd' onClick={()=>addTask()}> Add</button>
    </div>
    {todos.map(todo=>{
      return (
        <List full={todo} info={todo.value} taskSave={()=>todo.check=!todo.check}  deleteElement={()=>deleteElement(todo)}/>
      )
    })}
    
    </div>
  )
}

export default TodoList