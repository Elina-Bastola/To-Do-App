import React from 'react'
import ToDoList from './Components/ToDoList/ToDo'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-gray-500 via-gray-600 to-slate-300 overflow-x-hidden'>
      <ToDoList />
    </div>
  )
}

export default App