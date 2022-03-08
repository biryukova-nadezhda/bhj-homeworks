let modalClose = document.querySelector(".modal__close");
let modal = document.getElementById("subscribe-modal");

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value);
}

function getCookie(name) {
    try {
        const pairs = document.cookie.split("; ");
        const cookie = pairs.find(el => el.startsWith(name + "="));
        return cookie.substring(name.length + 1);
    } catch {
        return null
    }
}

let check = getCookie("state");

if (check === null) {
    modal.className = "modal modal_active";
}

modalClose.addEventListener("click", () => {

    if (modal.className.includes("modal_active")) {
        modal.className = "modal";
        setCookie("state", "0");
        console.log(document.cookie);
    }
})

/*
function deleteCookie(name) {
    setCookie(name, "", {
        "max-age": -1
    })
}*/