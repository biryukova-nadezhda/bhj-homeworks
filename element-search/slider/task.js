let right = document.querySelector(".slider__arrow_next");
let left = document.querySelector(".slider__arrow_prev");
let divImage = Array.from(document.querySelectorAll(".slider__item"));
let countImg = 0;

right.onclick = () => {
    divImage[countImg].className = "slider__item";

    if (countImg < divImage.length - 1) {
        countImg++;
    } else {
        countImg = 0;
    }

    divImage[countImg].className += " slider__item_active";
}

left.onclick = () => {
    divImage[countImg].className = "slider__item";

    if (countImg > 0) {
        countImg--;
    } else {
        countImg = divImage.length - 1;
    }

    divImage[countImg].className += " slider__item_active";
}