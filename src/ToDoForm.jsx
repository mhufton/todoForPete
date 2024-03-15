export default function ToDoForm({ submitHandler }) {
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <label>
        add a todo:
        <input type="text" id="todoInput" name="todoInput" />
      </label>
      <button type="submit">add to do</button>
    </form>
  )
}