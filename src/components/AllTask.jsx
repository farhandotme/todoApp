
// eslint-disable-next-line react/prop-types
const AllTask = ({task, onDeleteButton, currentTask, oncheckedTodo}) => {

  return (
    <div>
      <li className="flex items-center justify-between px-4 py-2 bg-gray-100 border rounded-md">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-5 h-5 text-blue-500" onChange={() => oncheckedTodo(task)} />
          <span className={`text-gray-700 ${currentTask ? "line-through" : ""} `}>{task}</span>
        </div>
        <button
          className="text-red-500 hover:text-red-600"
          onClick={() => onDeleteButton(task)}
        >
          Delete
        </button>
      </li>
    </div>
  )
}


export default AllTask
