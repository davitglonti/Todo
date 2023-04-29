import React from 'react'

const todoList = () => {
    const cat = JSON.parse(window.localStorage.getItem('saveinfo'));
    console.log(cat.name)
  return (
    <div>todoList
        <h1>{cat.name} </h1>
    </div>
  )
}

export default todoList