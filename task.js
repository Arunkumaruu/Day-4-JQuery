document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#taskInput").addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.className = "complete";
    completeButton.onclick = () => markAsComplete(li);
    li.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = () => deleteTask(li);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}

function markAsComplete(taskItem) {
    taskItem.classList.toggle("completed");
}

function deleteTask(taskItem) {
    taskItem.remove();
}
