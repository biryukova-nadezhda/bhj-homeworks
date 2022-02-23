/*const messages = document.querySelector('.chat-widget__messages');
// добавит
messages.innerHTML += `
  <div class="message">
    <div class="message__time">09:21</div>
    <div class="message__text">
      Добрый день, мы ещё не проснулись. Позвоните через 10 лет
    </div>
  </div>
`;*/

let widget = document.querySelector(".chat-widget");

widget.onclick = () => {
    widget.className = "chat-widget chat-widget_active"
}

let chatInput = document.getElementById("chat-widget__input");

chatInput.addEventListener("keyup", sentMessage);

function sentMessage(e) {
    if (e.ctrlKey && e.keyCode == 13) {
        chatInput.value = "Работай дальше";
    }
    console.log(e.keyCode)
}