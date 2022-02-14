let rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));
let index = 0;
let indexNext = 0;

function rotatorView(array, index) {
    let result = array[index].classList.contains("rotator__case_active");

    if (indexNext < rotatorCase.length - 1) {
        indexNext = index + 1;
    } else {
        indexNext = 0;
    }

    if (result === true) {
        array[index].classList.remove("rotator__case_active");
        array[indexNext].classList.add("rotator__case_active");
    } else {
        array[index].classList.add("rotator__case_active");
    }
}

rotatorView(rotatorCase, index);

setInterval(() => {
    if (index < rotatorCase.length - 1) {
        index++
    } else {
        index = 0;
    }

    rotatorView(rotatorCase, index);
}, 1000);