document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function() {
        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });

    function addTask(text) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${text}</span>
            <button class="delete">Delete</button>
        `;

        taskList.appendChild(li);

        const deleteButton = li.querySelector(".delete");
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(li);
        });
    }
});
