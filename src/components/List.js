import React,{useState,useEffect} from 'react'
import '../Css/List.css'
import deleteElementIcon from '../images/delete.png'
import doneElement from '../images/done.png'
const List = ({info,taskSave, full,deleteElement}) => {
  
  
   //'todolist'
  return (
    <div className={full.check ? 'todolist todolistWhite': "todolist"}>
      <div>
        <h1 className='todolistinfo'>{info}</h1>
      </div>
      <div>
        <img src={doneElement} className='doneElement' onClick={()=>taskSave()}/>
        <img src={deleteElementIcon} className='delElement' onClick={()=>deleteElement()}/>
      </div>
    </div>
  )
}

export default List