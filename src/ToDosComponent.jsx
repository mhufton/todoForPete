const ToDosComponent = ({ todos }) => {

  return (
    <div className='pete'>
      <h1 className="todos-title">All My todos:</h1>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>{todo}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default ToDosComponent;