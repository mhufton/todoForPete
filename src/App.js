import logo from "./logo.svg"
import "./App.css"
import ToDosComponent from "./ToDosComponent"
import { useState } from "react"
import ToDoForm from "./ToDoForm"

function App() {
  const initialTodos = ["run", "clean", "fart"]
  const [todos, setTodos] = useState(initialTodos)
  console.log(todos)

  const submitHandler = (event) => {
    // prevent screen from resetting or flickering
    event.preventDefault()

    // grab the todo from the input
    const newTodo = event.target.elements.todoInput.value

    // set the state with the new input
    setTodos([...todos, newTodo])

    // reset form status
    event.target.elements.todoInput.value = ""
  }

  return (
    <div className="App">
      <ToDosComponent todos={todos} />
      <ToDoForm submitHandler={submitHandler} />
    </div>
  )
}

export default App
