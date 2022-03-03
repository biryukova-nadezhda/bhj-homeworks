function getQuestion(obj) {
    let pollTitle = document.getElementById("poll__title");
    pollTitle.textContent = obj.title;

    let pollAnswers = document.getElementById("poll__answers");
    let arrayAnswer = obj.answers;

    arrayAnswer.forEach((item) => {
        let button = document.createElement("button");
        button.className = "poll__answer";
        button.textContent = `${item}`;

        pollAnswers.appendChild(button);

        button.onclick = () => {
            alert("Спасибо! Ваш голос засчитан");
        }
    })


}

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        let obj = JSON.parse(xhr.responseText).data;
        getQuestion(obj);
    }
})

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();