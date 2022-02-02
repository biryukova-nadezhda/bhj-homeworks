let imgHtml = document.getElementById("cookie");
let spanHtml = document.getElementById("clicker__counter");
let counter = 0;

imgHtml.onclick = () => {
    counter++;
    spanHtml.textContent = counter;

    if (counter % 2 == 0) {
        imgHtml.width -= 20;
    } else {
        imgHtml.width += 20;
    }
}