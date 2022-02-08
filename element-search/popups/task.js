let modalMain = document.getElementById("modal_main");
modalMain.className += " modal_active";

let modalClose = Array.from(document.querySelectorAll(".modal__close"));
let showSuccess = document.querySelector(".show-success");
let modalSuccess = document.getElementById("modal_success");

for (let index = 0; index < modalClose.length; index++) {

    function giveName(index) {
        let modalCloseFn = modalClose[index];
        return modalCloseFn
    }

    let modalCloseItem = giveName(index);

    modalCloseItem.onclick = function() {
        modalMain.className = " modal";
        modalSuccess.className = " modal";
    }
}

showSuccess.onclick = () => {
    modalMain.className = " modal";
    modalSuccess.className += " modal_active";
}