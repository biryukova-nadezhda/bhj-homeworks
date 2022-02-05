let modalMain = document.getElementById("modal_main");
modalMain.className += " modal_active";

let modalClose = Array.from(document.querySelectorAll(".modal__close"));
let showSuccess = Array.from(document.getElementsByClassName("show-success"));
let modalSuccess = document.getElementById("modal_success")

modalClose[0].onclick = () => {
    modalMain.className = " modal";
}
modalClose[2].onclick = () => {
    modalMain.className = " modal";
    modalSuccess.className = " modal";
}

showSuccess[0].onclick = () => {
    modalSuccess.className += " modal_active";
}