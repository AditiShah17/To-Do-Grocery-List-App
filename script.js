function addTask(){
    const input = document.getElementById('taskInput');
    const Ullist = document.getElementById('todoList');

    const taskText = input.value.trim();
    if(taskText !== ""){

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = taskText;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editTask(span);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Delete";
        removeButton.onclick = () => removeTask(li);

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(removeButton);

        Ullist.appendChild(li);

        input.value = "";

    }else{
        alert("Please Enter a Valid Task");
    }

} 

function editTask(span){
    const newTask = prompt("Edit your Task:", span.textContent);

    if(newTask !== null && newTask.trim() !== ""){
        span.textContent = newTask.trim();
    }
}

function removeTask(task){
    const ul = document.getElementById("todoList");
    ul.removeChild(task);

}