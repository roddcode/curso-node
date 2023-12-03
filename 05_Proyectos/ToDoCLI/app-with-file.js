import { readFileSync, writeFileSync } from 'fs';
import { createInterface } from 'readline';
import chalk from 'chalk';

const tasks = [];
const DB_FILE = "tasks.txt";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log(chalk.yellow.bold('---- TO DO APP ----'));
  console.log('1. Agregar Tarea');
  console.log('2. Listar Tareas');
  console.log('3. Completar tarea');
  console.log('4. Salir');
}

function loadTasks() {
  try {
    const data = readFileSync(DB_FILE, "utf-8");
    let lines = data.split("\n");

    lines.forEach(line => {
      if (line.trim() !== "") {
        const [task, completed] = line.split("|");
        tasks.push({ task, completed: completed === 'true' }); // Use 'true' as a string
      }
    });
    console.log("Las tareas se han cargado con éxito");
  } catch (e) {
    console.log("No hay tareas pendientes");
  }
}

function saveTask() {
  const data = tasks.map((task) => `${task.task}|${task.completed}`).join("\n");
  writeFileSync(DB_FILE, data, "utf-8");
  console.log("TAREA AGREGADA A LA BD CON ÉXITO");
}

function addTask() {
  rl.question(chalk.bgMagentaBright('Escribe la tarea: '), (task) => {
    tasks.push({ task, completed: false });
    console.log('Tarea agregada con éxito');
    saveTask();
    displayMenu();
    chooseOption();
  });
}

function listTasks() {
  console.log(chalk.bgMagentaBright('---- Task list ----'));
  if (tasks.length === 0) {
    console.log('No hay tareas pendientes');
  } else {
    tasks.forEach((task, index) => {
      let status = task.completed ? '✅' : '❎';
      if (task.completed) {
        console.log(chalk.green(`${index + 1}. ${status} - ${task.task}`));
      } else {
        console.log(chalk.red(`${index + 1}. ${status} - ${task.task}`));
      }
    });
  }
  displayMenu();
  chooseOption();
}

function completeTask() {
  rl.question(
    chalk.bgMagentaBright('Digita el número de la tarea a completar: '),
    (task) => {
      const index = parseInt(task) - 1;
      if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        saveTask();
        console.log("TAREA COMPLETADA");
      } else {
        console.log("NÚMERO DE TAREA INVÁLIDO");
      }
      displayMenu();
      chooseOption();
    }
  );
}

function chooseOption() {
  rl.question(
    'Elige una opción, digitando el número de tu opción: ',
    (choice) => {
      switch (choice) {
        case '1':
          addTask();
          break;
        case '2':
          listTasks();
          break;
        case '3':
          completeTask();
          break;
        case '4':
          console.log('SALIR DEL PROGRAMA');
          rl.close();
          break;
        default:
          console.log(chalk.red('Opción inválida'));
          displayMenu();
          chooseOption();
          break;
      }
    }
  );
}

loadTasks();
displayMenu();
chooseOption();

