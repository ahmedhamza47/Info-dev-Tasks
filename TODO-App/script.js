window.addEventListener("load", () => {
  const form = document.querySelector(".form");
  const input = document.querySelector("#new-task-inp");
  const list = document.querySelector(".tasks");
  const addBtn = document.querySelector(".add-button");
  addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const item = input.value;
    console.log(item);
    if (!item) {
      alert("Please enter a task");
      return;
    }
    //creating a html element
    const task_el = document.createElement("div");
    task_el.classList.add("task");
    const TaskContent = document.createElement("div");
    TaskContent.classList.add("content");
    //TaskContent.innerText = item;
    task_el.appendChild(TaskContent);
    const taskInp = document.createElement("input");
    taskInp.classList.add("text");

    taskInp.type = "text";
    taskInp.value = item;
    taskInp.setAttribute("readonly", "readonly");
    TaskContent.appendChild(taskInp);

    //adding button to the tasks
    const actionElement = document.createElement("div");
    actionElement.classList.add("actions");

    const editBtnEl = document.createElement("button");
    editBtnEl.classList.add("btn");
    editBtnEl.classList.add("btn-outline-primary");
    editBtnEl.type = "button";
    editBtnEl.innerHTML = "Edit";

    const deleteBtnEl = document.createElement("button");
    deleteBtnEl.classList.add("btn");
    deleteBtnEl.classList.add("btn-outline-danger");
    deleteBtnEl.type = "button";
    deleteBtnEl.innerHTML = "Delete";

    //adding buttons as child elements
    actionElement.appendChild(editBtnEl);
    actionElement.appendChild(deleteBtnEl);
    task_el.appendChild(actionElement);

    //adding all html elemtnts to .tasks
    list.appendChild(task_el);

    //editing the added tasks

    editBtnEl.addEventListener("click", function () {
      if (editBtnEl.innerHTML.toLowerCase() == "edit") {
        editBtnEl.innerHTML = "Save";
        taskInp.removeAttribute("readonly", "readonly");
        taskInp.focus();
      } else {
        editBtnEl.innerHTML = "Edit";
        taskInp.setAttribute("readonly", "readonly");
      }
    });
  });
});
