let progress = document.getElementById("progress");
let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", (e) => {
        let progressLoad = e.loaded / e.total;
        progress.value = progressLoad;
        console.log(`Загружено: ${e.loaded} из ${e.total}`);
    })

    let formData = new FormData(form);
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(formData);
})