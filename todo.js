// DOM ELEMEMTS
const taskTodoList = document.getElementById("taskTodoList");
const taskProgressList = document.getElementById("taskProgressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addTaskBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("save-btn");
const taskInput = document.getElementById("task-input");
const taskStatus = document.getElementById("status");
const totalTasks = document.getElementsByClassName("totalTasks");

// VARIABLES FOR TASK
let isEdited = false;
let editedIndex = -1;
const tasks = [
  {
    name: "Task One",
    status: "INPROGRESS",
  },
  {
    name: "Task Two",
    status: "BLOCKED",
  },
  {
    name: "Task Three",
    status: "BLOCKED",
  },
];

function zurah() {
  taskTodoList.innerHTML = "";
  taskProgressList.innerHTML = "";
  taskDoneList.innerHTML = "";
  taskBlockedList.innerHTML = "";
  totalTasks.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    console.log("TASKS", tasks);
    const newTaskCard = `
    <div class="d-flex justify-content-between align-items-center border border-1 rounded p-2">
        <span>${tasks[i].name} - ${i}</span>
        <div>
            <button style="color: #e8ecef" class="btn"   data-bs-toggle="modal" data-bs-target="#taskModal" onclick="editTask(${i})">    
            <i class="bi bi-pencil "></i>
            </button>
            <button style="color: red" class="btn" onclick="deleteTask(${i})">
                <i class="bi bi-trash"></i>
            </button>
        </div>
    </div>
 `;

    switch (tasks[i].status) {
      case "TODO": {
        taskTodoList.innerHTML += newTaskCard;

        break;
      }
      case "INPROGRESS": {
        taskProgressList.innerHTML += newTaskCard;

        break;
      }
      case "DONE": {
        taskDoneList.innerHTML += newTaskCard;

        break;
      }
      case "BLOCKED": {
        taskBlockedList.innerHTML += newTaskCard;

        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
  }
}
zurah();
saveBtn.addEventListener("click", function () {
  if (isEdited) {
    tasks[editedIndex].name = taskInput.value;
    tasks[editedIndex].status = taskStatus.value;
    isEdited = false;
  } else {
    const newTask = {
      name: taskInput.value,
      status: taskStatus.value,
    };
    tasks.push(newTask);
  }
  taskInput.value = "";
  taskStatus.value = "TODO";
  zurah();
});

const deleteTask = (index) => {
  tasks.splice(index, 1);
  zurah();
};

zurah();

// document.querySelectorAll("editTask, addTaskBtn").forEach(function (button) {
//   button.addEventListener("click", function (e) {
//     const edit = () => {
//       console.log(edit);
//       addTaskBtn;
//     };
//     draw();
//     console.log("a");
//   });
// });
const editTask = (taskIndex) => {
  console.log(taskIndex);
  taskInput.value = tasks[taskIndex].name;
  taskStatus.value = tasks[taskIndex].status;
  isEdited = true;
  editedIndex = taskIndex;
};

function taskAmount() {
  const totalTasks = document.getElementsByClassName("totalTasks");
  totalTasks.innerTEXT = tasks.length;

  return totalTasks;
}
const listItems = document.querySelectorAll(".totalTasks");
const count = listItems.length;
console.log(count);
