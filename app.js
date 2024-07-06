const inputBox = document.querySelector("Input");
const taskContainer = document.querySelector(".tasks");
const emptyTaskImg = document.querySelector(".empty_task");

let counter = 0;
const addTask = () => {
  if (inputBox.value == "") {
    alert("Please enter you task");
  } else {
    let list = document.createElement("li");
    list.innerHTML = `${inputBox.value.trim()} <span>\u00d7</span>`;
    taskContainer.appendChild(list);
    counter++;
    emptyTask();
  }
  inputBox.value = "";
  saveData();
};

taskContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      counter--;
      emptyTask();
      saveData();
    }
  },
  false
);

inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add_btn").click();
  }
});

const saveData = () => {
  localStorage.setItem("data", taskContainer.innerHTML);
  localStorage.setItem("counter", counter);
};
const showTask = () => {
  taskContainer.innerHTML = localStorage.getItem("data");
  counter = localStorage.getItem("counter");
  emptyTask();
};

const emptyTask = () => {
  if (counter === 0) {
    emptyTaskImg.style.display = "block";
  } else {
    emptyTaskImg.style.display = "none";
  }
};

showTask();
