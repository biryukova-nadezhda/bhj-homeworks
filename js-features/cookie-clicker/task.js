let imgHtml = document.getElementById("cookie");
let spanHtml = document.getElementById("clicker__counter");
let counter = 0;

imgHtml.onclick = () => {
    counter++;
    spanHtml.textContent = counter;
    imgHtml.width = counter % 2 ? 220 : 200;
}