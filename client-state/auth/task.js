let form = document.getElementById("signin__form");
let welcome = document.getElementById("user_id");
const xhr = new XMLHttpRequest();

function auth() {
    form.parentElement.className = "signin";
    welcome.textContent = localStorage.getItem("id");
    welcome.parentElement.className = "welcome welcome_active";
    createBtn();
}

function createBtn() {
    let btnLogOut = document.createElement("button");
    btnLogOut.setAttribute("id", "logout__btn")
    btnLogOut.className = "btn btn_logout";
    btnLogOut.textContent = "Выйти";

    document.querySelector(".card").appendChild(btnLogOut);

    btnLogOut.onclick = () => {
        localStorage.clear();
        location.reload()
    }
}

if (localStorage.getItem("id")) {
    auth();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    xhr.onload = () => {
        let check = JSON.parse(xhr.responseText).success;

        if (check === true) {
            let userId = JSON.parse(xhr.responseText).user_id;
            localStorage.setItem("id", userId);

            auth();

        } else {
            alert("Неверный логин/пароль");
        }

    }

    let formData = new FormData(form);
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.send(formData);
})