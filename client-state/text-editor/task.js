//Находим элемент 
let editor = document.getElementById("editor");

/*Проверяем, записано ли у нас уже значение из поля ввода
в localStorage. Если нет, то записываем, если  записано, то 
отображаем в текстовом поле существующее записанное*/
if (localStorage.getItem("value")) {
    editor.value = localStorage.getItem("value");
} else {
    let value = editor.value;
    localStorage.setItem("value", value);
}

/*Устанавливаем обработчик события. Можно было бы использовать
обработчик события change, но это не совсем удобно, так как после
изменений надо, чтобы textArea оказалось не в фокусе, чтобы 
сохранились изменение. Не факт, что это всегда будет происходить */
editor.addEventListener("input", () => {
    let value = editor.value;
    localStorage.setItem("value", value);
})

function clearEditor() {
    let btn = document.createElement("button");
    btn.className = "btn__clear";
    btn.textContent = "Очистить";

    document.querySelector(".card").appendChild(btn);

    btn.onclick = () => {
        localStorage.clear();
        editor.value = "";
    }
}

clearEditor();