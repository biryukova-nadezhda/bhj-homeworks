//Нахождение элементов на странице
let chatWidget = document.querySelector(".chat-widget");
let messagesBox = document.getElementById("chat-widget__messages");
let input = document.getElementById("chat-widget__input");

//массив сообщений бота
let arrayMessages = [
    "Привет",
    "Как дела?",
    "Может поговорим?",
    "Пока",
    "С тобой не весело!",
    "Улыбнись",
    "Что-что? Я не расслышал)",
];

//Объявление функций
//Функции для вывода рандомного сообщения бота
function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function randomMessage(array) {
    let index = getRandom(array.length);
    return array[index];
}

//Функция взятия текущего времени
function getCurrentTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
}

function chatActive() {
    if (!chatWidget.className.includes("chat-widget_active")) {
        chatWidget.className = "chat-widget chat-widget_active";
    }
}

function sendMessageBot() {
    let time = getCurrentTime();
    let messages = randomMessage(arrayMessages);

    //Создание блока СМС
    let message = document.createElement("div");
    message.className = "message";

    let messageTime = document.createElement("div");
    messageTime.className = "message__time";
    messageTime.textContent = time;

    let messageText = document.createElement("div");
    messageText.className = "message__text";
    messageText.textContent = messages;

    message.appendChild(messageTime);
    message.appendChild(messageText);

    messagesBox.appendChild(message);
}

function sendMessage() {
    let time = getCurrentTime();
    let messages = input.value.trim();

    //Создание блока СМС
    let message = document.createElement("div");
    message.className = "message message_client";

    let messageTime = document.createElement("div");
    messageTime.className = "message__time";
    messageTime.textContent = time;

    let messageText = document.createElement("div");
    messageText.className = "message__text";
    messageText.textContent = messages;

    message.appendChild(messageTime);
    message.appendChild(messageText);

    messagesBox.appendChild(message);
    input.value = "";

    sendMessageBot();
}

//Назначение обработчиков событий
chatWidget.addEventListener("click", chatActive);

document.addEventListener("keyup", (event) => {
    if (event.key === "Enter" && input.value.trim().length !== 0) {
        sendMessage();
    }
});