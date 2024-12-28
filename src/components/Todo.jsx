import { useEffect, useState } from "react"
import Form from "./Form";
import AllTask from "./AllTask";

const Todo = () => {

  const todokey = "tasks"
  const [Task, setTask] = useState(() => {
    const datas = localStorage.getItem(todokey);
    if (!datas) return [];
    return JSON.parse(datas)
  })
  const [datetime, setDatetime] = useState("");
  const handleSubmit = (input) => {
    const { id, content, checked } = input;
    if (!content) return;
    const iftodoContentMatched = Task.find(curr => curr.content == content)
    if (iftodoContentMatched) return;
    if (Task.includes(input)) return;
    setTask((prev) => [...prev, { id, content, checked }]);
  }

  const handleCheckTodo = (task) => {
    const updateTask = Task.map((t) => {
      if (t.content === task) {
        return { ...t, checked: !t.checked };
      }
      return t;
    });
    setTask(updateTask);
  };
  // date and time
  useEffect(() => {
    setInterval(() => {
      const now = new Date;
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setDatetime(date + " - " + time);
    }, 1000);
  }, []);

  const handleDelete = (task) => {
    setTask(Task.filter((t) => t.content !== task));
  }

  const handelClear = () => {
    setTask([]);
  }

  // storing data in localStorage
  localStorage.setItem(todokey, JSON.stringify(Task));

  return (

    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-xl font-bold text-gray-700 mb-4 text-center">Todo App</h1>
      <h2 className="text-center m-5 text-xl font-bold">{datetime}</h2>
      <Form addingTodo={handleSubmit} />

      <ul className="space-y-3">
        {
          Task.map((task) => {
            return <AllTask key={task.id} task={task.content} onDeleteButton={handleDelete} currentTask={task.checked} oncheckedTodo={handleCheckTodo} />
          })
        }
      </ul>
      <button
        className="w-full mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
        onClick={handelClear}
      >
        Clear All
      </button>
    </div>
  )
}

export default Todo
