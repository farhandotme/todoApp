import { useState } from 'react'

const Form = (prop) => {
  const [input, setinput] = useState({})

  const handelSubmit = (e) => {
    e.preventDefault();
    prop.addingTodo(input);
    setinput({ id: "", content: "", checked: false });
  }

  const handleOnChange = (e) => {
    setinput({ id: e.target.value, content: e.target.value, checked: false })
  }
  return (
    <div>
      <form onSubmit={(e) => handelSubmit(e)}>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter a task"
            className="flex-1 px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={input.content}
            onChange={handleOnChange}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
