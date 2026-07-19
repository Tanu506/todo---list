const taskInput = document.querySelector("#taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  addTask();
});

taskInput.addEventListener('keydown',function(e){
    if(e.key == 'Enter'){
        addTask()
    }
  })

taskList.addEventListener('change',function(e){
    if(e.target.type == 'checkbox'){
      (e.target.nextElementSibling).classList.toggle('completed')
    }
})

function addTask() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox'
  checkBox.id = 'checkOrNot'

  const editButton = document.createElement("button")
  const task = taskInput.value.trim();
  
  if (task === "") {
    return;
  }

  taskList.appendChild(li);
  li.appendChild(checkBox)
  li.appendChild(span);
  li.appendChild(editButton)
  li.appendChild(deleteButton);

  span.classList.add("tasks");
  deleteButton.classList.add("dltBtn");

  editButton.classList.add('editBtn')
  editButton.textContent = 'Edit';

  span.textContent = task;
  deleteButton.textContent = "Delete";
  
  taskInput.value = "";
  taskInput.focus();


}
taskList.addEventListener("click", function (event) {
  if(event.target.classList.contains("dltBtn")) {
    event.target.parentElement.remove();
  } 
  // else if(event.target.classList.contains("editBtn")){
  //   editButton.textContent = 'Save'
  //   const li = event.target.parentElement
  //   const input = document.createElement("input")
  //   li.querySelector('.tasks').replaceWith(input)
  // }
});

