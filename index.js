document.addEventListener("DOMContentLoaded", function () {   
    const taskInput = document.getElementById("task");
    const dueDateInput = document.getElementById("due-date");
    const priorityInput = document.getElementById("priority");
    const taskList = document.getElementById("task-list");
  
    document.getElementById("add-task").addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;
        
        if (taskText) {
            
            const listItem = document.createElement("li");
       
            listItem.innerHTML = `
                <span>${taskText}</span>
                <span class="due-date">Due Date: ${dueDate}</span>
                <span class="priority">Priority: ${priority}</span>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            `;

            taskList.appendChild(listItem);     
            taskInput.value = "";
            dueDateInput.value = "";
            priorityInput.value = "low";

            listItem.querySelector(".complete-btn").addEventListener("click", function () {
                listItem.classList.toggle("completed");
            });          

            listItem.querySelector(".delete-btn").addEventListener("click", function () {

                taskList.removeChild(listItem);
            });
        }
    });
});
