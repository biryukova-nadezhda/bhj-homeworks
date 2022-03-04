//Нахождение элементов
let input = document.getElementById("task__input");
let buttonAdd = document.getElementById("tasks__add");
let taskList = document.getElementById("tasks__list");

//Функция создания задачи
function createTask() {
    taskList.insertAdjacentHTML('afterBegin', `
    <div class="task">
        <div class="task__title"> ${input.value.trim()} </div>
        <a href="#" class="task__remove">&times;
    </a></div>`);

    input.value = "";
    
    let removeElement = taskList.querySelector(".task").querySelector(".task__remove");

    removeElement.onclick = () => {
    	removeElement.parentElement.remove();
    	return false
    }
    
}

buttonAdd.addEventListener("click", (event) => {
    event.preventDefault();
    if (input.value.trim().length !== 0) {
        createTask();
    }
});
