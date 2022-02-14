let reveal = Array.from(document.querySelectorAll(".reveal"));

function isVisible(element) {
    const { top, bottom } = element.getBoundingClientRect();

    if (bottom < 0) {
        return false
    }

    if (top > window.innerHeight) {
        return false
    }

    return true
}


setInterval(() => {

    reveal.forEach((element) => {
        let result = isVisible(element);

        if (result === true) {
            element.className += " reveal_active";

        } else {
            element.className = "reveal"

        }
    });

}, 1000);