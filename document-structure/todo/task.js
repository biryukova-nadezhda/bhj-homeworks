//Находим элементы 
let tasksList = document.getElementById("tasks__list");
let form = document.forms["tasks__form"]
let input = document.getElementById("task__input");
let buttonAdd = document.getElementById("tasks__add");
let taskRemove;
//Блокируем событие submit у формы
form.addEventListener("submit", (e) => e.preventDefault);

//Создание шаблона задачи
function createTask() {
    let task = document.createElement("div");
    task.className = "task";

    let taskTitle = document.createElement("div");
    taskTitle.className = "task__title";
    taskTitle.textContent = input.value;

    task.appendChild(taskTitle);
    task.insertAdjacentHTML('beforeEnd', '<a href="#" class="task__remove">&times;</a>');

    input.value = "";

    return tasksList.appendChild(task);
}

//Обрабатываем клик по кнопке
buttonAdd.onclick = () => {
    if (input.value !== "") {
        createTask();
    } else {
        console.log("Пустая строка");
    }

    taskRemove = Array.from(document.querySelectorAll(".task__remove"));
    console.log(taskRemove);
    return taskRemove
}

//Удаление задачи
/*taskRemove.forEach((item) => {
    item.onclick = () => {
        item.parentElement.remove();
        return false
    }
})*/

/*
Вопрос по задаче todo: реализацию удаления задачи при нажатии на элемент с классом task__remove я вижу как у меня в конце кода в комментариях. Но вопрос
в том, что не получается сразу прописать реакцию на нажатие этого элемента, так как его еще не существует. Как правильно нужно это сделать? Я думала, что 
может сработает так, как я сделала в строке 35, т.е. при добавлении задачи, сразу и находить элементы на странице, но , видимо, так не работает, хотя 
массив с этими элементами выдает...
*/