// En el controlador se encuentra la logica de nuestro programa, siguiendo el modelo MVC

// En un MVC completo esto iria en modelo conectado a una base de datos, pero eso se va a hacer más adelante.

let tasks = [
  {id: 1, title: "Tarea 1", completed: false},
  {id: 2, title: "Tarea 2", completed: true},
]

const getAllTasks = (req, res) => {
  res.render("index", {title: "Lista de tareas", tasks})
}

const getAddTaskForm = (req, res) => {
  res.render("add", {title: "Agregar Tarea"})
}

const addTask = (req, res) => {
  let { title } = req.body
  let id = tasks.length + 1
  tasks.push({ id, title, completed: false })
  res.redirect("/")
}

const getEditTaskForm = (req, res) => {
  let id = parseInt(req.params.id)
  let task = tasks.find(task => task.id === id)

  if (!task) {
    res.redirect("/")
  } else {
    res.render("edit", {title: "Editar Tarea", task})
  }
}

const editTask = (req, res) => {
  let id = parseInt(req.params.id)
  let taskIndex = tasks.findIndex(task => task.id === id)
  
  if(taskIndex === -1) {
    res.redirect("/")
  } else {
    tasks[taskIndex].title = req.body.title
    res.redirect("/")
  }
}

const completeTask = (req, res) => {
  let id = parseInt(req.params.id)
  let task = tasks.find(task => task.id === id)

  if (task) {
    task.completed = true
  }

  res.redirect("/")
}

const uncompleteTask = (req, res) => {
  let id = parseInt(req.params.id)
  let task = tasks.find(task => task.id === id)

  if (task) {
    task.completed = false
  }

  res.redirect("/")
}

const deleteTask = (req, res) => {
  let id = parseInt(req.params.id)
  tasks = tasks.filter((task) => task.id !== id)
  res.redirect("/")
}

export default {
  getAllTasks,
  getAddTaskForm,
  getEditTaskForm,
  addTask,
  editTask,
  deleteTask,
  completeTask,
  uncompleteTask
}