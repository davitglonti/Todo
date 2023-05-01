import React,{useEffect, useState} from 'react'
import TodoHeader from '../components/TodoHeader';
import '../Css/Todo.css'
import List from '../components/List';
const TodoList = () => {
  const [textVal,setTextVal]=useState('')

  //storage
 
 const [todos,setTodos]=useState([])


    const name = JSON.parse(window.localStorage.getItem('saveinfo'));
    useEffect(() => {
      const savedDataString = localStorage.getItem('List');
      const savedData = JSON.parse(savedDataString);
      if (savedData) {
        setTodos(savedData);
      }
    }, []);
    //const image = JSON.parse(window.localStorage.getItem('saveimage'));
  localStorage.setItem("saveTodos", JSON.stringify(todos))
    const addTask = (event) => {
      if(textVal.length>1){
        const newData = [...todos, {id:todos.length+1, value: textVal, check:false}]
        setTodos(newData) 
        const newDataString = JSON.stringify(newData);
    localStorage.setItem('List', newDataString);
        setTextVal('')
        
      }
     
    }

    const deleteElement = (todo)=>{
      console.log(todo)
      setTodos(todos.filter(del=>del.id!=todo.id))
    }
    //storageImage function
      const image = localStorage.getItem('image');
    const handleClick = () => {
      window.open(image, '_blank');
    };

  //task check 
    function TaskCheck(id) {
      const newList = todos.map((item) => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            check: !item.check,
          };
  
          return updatedItem;
        }
  
        return item;
      });
  
      setTodos(newList);
    }

    // Handle the Enter key press here
    function handleKeyPress(event) {
      if (event.key === 'Enter') {
        if(textVal.length>1){
          const newData = [...todos, {id:todos.length+1, value: textVal, check:false}]
          setTodos(newData) 
          const newDataString = JSON.stringify(newData);
      localStorage.setItem('List', newDataString);
          setTextVal('')
        }
        
      }
      
  }
  return (
    <div>
     
      <TodoHeader name={name.name} />
      <img src={image} className='headerImage'  onClick={handleClick} />
      <h1>Add Your Daily Tasks</h1>
      <div>
        <input type='text' placeholder='My Task' className='taskInput' value={textVal} onChange={(e)=>setTextVal(e.target.value)} onKeyPress={handleKeyPress} />
        <button className='taskAdd' onClick={()=>addTask()} > Add</button>
    </div>
    {todos &&todos.map(todo=>{
      return (
        <div key={todo.id}>
        <List full={todo} info={todo.value} taskSave={()=>TaskCheck(todo.id)}  deleteElement={()=>deleteElement(todo)}/>
      </div>
      )
    })}
   
    
    </div>
  )
}

export default TodoList