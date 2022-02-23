let link = Array.from(document.querySelectorAll(".has-tooltip"));
let tooltip = document.createElement("div");
tooltip.setAttribute("data-position", "top");

link.forEach((item) => {
    tooltip.className = "tooltip";

    item.onclick = () => {
        tooltip.className = "tooltip tooltip_active";
        tooltip.textContent = item.title;

        let parent = item.parentElement;
        parent.insertBefore(tooltip, item);
        console.log(parent);
        return false
    }
})

/*Почему-то текст не располагается там, где должен быть... Хотя я же задаю дата-атрибут. А второе, я правильно поняла, что с помощью
метода inserAdjacentHTML() мы не можем задать уже созданный блок? Т.е., если сипользовать код выше, то мы не можем прописать:
item.inserAdjacentHTML('beginBefore', tooptip), надо прописывать весь HTML-код? Т.е. с помощью этого метода шаблон не создать...
*/