let tasks = [
  { id: 1, title: 'Tarea 1', completed: false },
  { id: 2, title: 'Tarea 2', completed: true },
]

const getAllTasks = (req, res) => {
  res.json({ tasks })
}

const addTask = (req, res) => {
  let { title } = req.body

  if (!title) {
    res.status(403).json({ err: true, message: 'Title is required' })
  } else {
    let id = tasks.length + 1
    tasks.push({ id, title, completed: false })
    res.json({ err: false, message: 'Tarea agregada' })
  }
}

const editTask = (req, res) => {
  let id = parseInt(req.params.id)
  let taskIndex = tasks.findIndex((task) => task.id === id)

  if (taskIndex === -1) {
    res.status(404).json({ err: true, message: 'Tarea no encontrada' })
  } else {
    tasks[taskIndex].title = req.body.title
    res.json({ err: false, message: 'Tarea editada' })
  }
}

const getTask = (req, res) => {
  let id = parseInt(req.params.id)
  let taskIndex = tasks.findIndex((task) => task.id === id)

  if (taskIndex === -1) {
    res.status(404).json({ err: true, message: 'Tarea no encontrada' })
  } else {
    res.json({ task: tasks[taskIndex] })
  }
}

const completeTask = (req, res) => {
  let id = parseInt(req.params.id)
  let task = tasks.find((task) => task.id === id)

  if (task) {
    task.completed = true
    res.json({ err: false, message: 'Tarea completada' })
  } else {
    res.status(404).json({ err: true, message: 'Tarea no encontrada' })
  }
}

const uncompleteTask = (req, res) => {
  let id = parseInt(req.params.id)
  let task = tasks.find((task) => task.id === id)

  if (task) {
    task.completed = false
    res.json({ err: false, message: 'Tarea desmarcada' })
  } else {
    res.status(404).json({ err: true, message: 'Tarea no encontrada' })
  }
}

const deleteTask = (req, res) => {
  let id = parseInt(req.params.id)
  tasks = tasks.filter((task) => task.id !== id)

  res.json({ err: false, message: 'Tarea eliminada' })
}

export default {
  getAllTasks,
  addTask,
  getTask,
  editTask,
  deleteTask,
  completeTask,
  uncompleteTask,
}
