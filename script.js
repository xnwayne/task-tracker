const inputEl = document.querySelector("#task-input");
const submitBtn = document.querySelector("#submit-btn");
const tasksContainer = document.querySelector(".tasks");
const errorEl = document.querySelector(".error");
const deleteBtn = document.querySelectorAll(".delete");

let tasks = [];

const submitTask = () => {
  let task = "";
  if (inputEl.value.length > 2) {
    task = inputEl.value;
    tasksContainer.innerHTML = "";
  } else {
    errorEl.style.display = "block";
    return;
  }
  tasks.unshift(task);
  inputEl.value = "";
  tasksContainer.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    tasksContainer.innerHTML += ` <div class="task">
      <div class="task-text">
      <div class="checkbox"></div>
              <p>${tasks[i]}</p>
            </div>
             <img src="./assets/delete.svg" alt="delete" class="delete"/>
            </div>`;
  }
  markDone();
  deleteTask();
};

submitBtn.addEventListener("click", () => {
  submitTask();
});

inputEl.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    submitTask();
  } else if (e.keyCode) {
    errorEl.style.display = "none";
  }
});

const markDone = () => {
  const checkBoxes = Array.from(document.querySelectorAll(".checkbox"));

  checkBoxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      e.target.style.background = "#727272";
      e.srcElement.parentNode.children[1].style.color = "#727272";
      e.srcElement.parentNode.children[1].style.textDecoration = "line-through";
    });
  });
};

const deleteTask = () => {
  const deleteBtns = Array.from(document.querySelectorAll(".delete"));

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const parent = e.target.parentNode;
      parent.style.display = "none";
      const toRemove = parent.children[0].children[1].textContent;
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i] === toRemove) {
          tasks.splice(i, 1);
        }
      }
    });
  });
};


// TODO: Add notification on item deletion
// TODO: Implement Local Storage
// TODO: Make it responsive