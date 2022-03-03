let loader = document.getElementById("loader");

//ункция отображения курса валют
function exchangeRates(obj) {
    let courseBoard = document.getElementById("items").querySelector(".item");

    for (let prop in obj) {
        let charCode = obj[prop].CharCode;
        let value = obj[prop].Value;

        let htmlBlock = `
                        <div class="container" style="display: flex; width: 100%;">
                        <div class="item__code">${charCode}</div>
                        <div class="item__value">${value}</div>
                        <div class="item__currency">руб.</div>
                        </div>`;

        courseBoard.insertAdjacentHTML("afterBegin", htmlBlock);
    }
}

//Создание объекта
const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {

    if (xhr.readyState === xhr.DONE) {
        loader.className = "loader";
        let obj = JSON.parse(xhr.responseText).response.Valute;
        exchangeRates(obj);
    }
})

//Формирование запроса
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
//Отправка запроса
xhr.send();

/*
1. Не уверена, так ли я получила нужные мне значения объекта, да и сам объект...
2. В условиях задачи не было прописано, что нужно дописать еще стили какие-то или блоки, но если ничего не дописывать, то 
результат выводит в строку. В общем, либо я неправильно что-то выполнила, что у меня вывод был не как на гифке. Я дописала стили и 
обернула информацию о каждом из курсов в контейнер.
*/