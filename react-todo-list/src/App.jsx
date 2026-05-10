import { useState, useEffect } from 'react'
import './App.css'
import { NewTodoForm } from './NewTodoForm'
import { prerenderToNodeStream } from 'react-dom/static'
import { TodoList } from './TodoList'

export default function App() {
 
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  //storing our todo
  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {

    setTodos(currentTodo => {
        return [
          ...currentTodo,
          {id: crypto.randomUUID(),
          title,
          completed: false},

        ]
      })
   
  }
 
  // a funtion to mark the check box if completed
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id ) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }
  //function to handle a delete todo
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })

  }
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className='header'>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
    
  )
}
