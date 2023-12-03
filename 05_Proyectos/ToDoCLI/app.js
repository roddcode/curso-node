import { createInterface } from 'readline'
import chalk from 'chalk'

const tasks = []

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

function displayMenu() {
  console.log(chalk.yellow.bold('---- TO DO APP ----'))
  console.log('1. Agregar Tarea')
  console.log('2. Listar Tareas')
  console.log('3. Completar tarea')
  console.log('4. Salir')
}

function addTask() {
  rl.question(chalk.bgMagentaBright('Escribe la tarea: '), (task) => {
    tasks.push({ task, completed: false })
    console.log('Tarea agregada con exito')
    displayMenu()
    chooseOption()
  })
}

function listTasks() {
  console.log(chalk.bgMagentaBright('---- Task list ----'))
  if (tasks.length == 0) {
    console.log('No hay tareas pendientes')
  } else {
    tasks.forEach((task, index) => {
      let status = task.completed ? '✅' : '❎'
      if(task.completed) {
        console.log(chalk.green(`${index + 1}. ${status} - ${task.task}`))
      } else {
        console.log(chalk.red(`${index + 1}. ${status} - ${task.task}`))
      }
      
    })
  }
  displayMenu()
  chooseOption()
}

function completeTask() {
  rl.question(
    chalk.bgMagentaBright('Digita el numero de la tarea a completar: '),
    (task) => {
      const index = parseInt(task) - 1
      if(index >= 0 && index < tasks.length) {
        tasks[index].completed = true
        console.log("TAREA COMPLETADA");
      } else {
        console.log("NUMERO DE TAREA INVALIDO");
      }
      displayMenu();
      chooseOption();
    }
  )
}

function chooseOption() {
  rl.question(
    'Elige una opcion, digitando el numero de tu opcion',
    (choice) => {
      switch (choice) {
        case '1':
          addTask()
          break
        case '2':
          listTasks()
          break
        case '3':
          completeTask()
          break
        case '4':
          console.log('SALIR DEL PROGRAMA')
          rl.close()
          break
        default:
          console.log(chalk.red('Opcion invalida'))
          displayMenu()
          chooseOption()
          break
      }
    }
  )
}

displayMenu()
chooseOption()
