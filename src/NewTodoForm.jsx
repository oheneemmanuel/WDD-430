import { useState } from "react"
export function NewTodoForm({onSubmit}) {
    //props.onSubmit
    const [newItem, setNewItem] = useState("")
    //function for the add button
    function handleAdd(e) {
      //To prevent the page from refreshing 
      e.preventDefault()

      onSubmit(newItem)

      //setTodos(currentTodo => {
      //  return [
      //    ...currentTodo,
      //    {id: crypto.randomUUID(),
      //    title: newItem,
      //    completed: false},
//
      //  ]
      //})
      setNewItem('')

    }
    return (
        <form onSubmit={handleAdd} className='new-item-form'>
            <div className='form-row'>
              <label htmlFor='item'>New Item</label>
              <input 
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type='text' id='item' 
              />
            </div>
            <button className='btn'>Add</button>
        </form>
    )
}