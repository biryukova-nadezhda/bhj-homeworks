let timerHtml = document.getElementById("timer");

let timer = setInterval(() => {
    timerHtml.textContent = Number(timerHtml.textContent) - 1;

    if (timerHtml.textContent == 0) {
        alert("Вы победили в конкурсе!")
        window.location.href = "https://webfonts.ru/beermoney/beermoney.zip"; //дополнительный пункт, скачивание файла
        clearTimeout(timer);
    }
}, 1000);