let book = document.getElementById("book");
let fontSize = Array.from(document.querySelectorAll(".font-size"));
let color = Array.from(document.querySelectorAll(".color"))

book.classList.add("font-size_active")

function resize(element) {

    if (element.className.includes("font-size_small")) {
        book.classList.remove("book_fs-big");
        book.classList.add("book_fs-small");

    } else if (element.className.includes("font-size_big")) {
        book.classList.remove("book_fs-small");
        book.classList.add("book_fs-big");

    } else {
        book.className = "book";
    }
}

function changeColor(element) {

    //Проверка цвета текста
    if (element.className.includes("text_color_gray")) {
        book.classList.remove("book_color-whitesmoke");
        book.classList.remove("book_color-black");

        book.classList.add("book_color-gray");
    }

    if (element.className.includes("text_color_whitesmoke")) {
        book.classList.remove("book_color-black");
        book.classList.remove("book_color-gray");

        book.classList.add("book_color-whitesmoke");
    }

    if (element.className.includes("text_color_black")) {
        book.classList.remove("book_color-whitesmoke");
        book.classList.remove("book_color-gray");

        book.classList.add("book_color-black");
    }

    //Проверка фона
    if (element.className.includes("bg_color_black")) {
        book.classList.remove("book_bg-white");
        book.classList.remove("book_bg-gray");

        book.classList.add("book_bg-black");
    }

    if (element.className.includes("bg_color_gray")) {
        book.classList.remove("book_bg-white");
        book.classList.remove("book_bg-black");

        book.classList.add("book_bg-gray");
    }

    if (element.className.includes("bg_color_white")) {
        book.classList.remove("book_bg-black");
        book.classList.remove("book_bg-gray");

        book.classList.add("book_bg-white");
    }

}

fontSize.forEach((item) => {
    item.onclick = () => {
        resize(item);
        return false
    }
})

color.forEach((item) => {
    item.onclick = () => {
        changeColor(item);
        return false
    }
})