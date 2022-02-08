let menuLink = Array.from(document.querySelectorAll(".menu__link"));

for (let index = 0; index < menuLink.length; index++) {

    function giveName(index) {
        let name = menuLink[index];
        return name;
    }

    let linkMenu = giveName(index);

    linkMenu.onclick = () => {
        let close = linkMenu.parentElement.querySelector(".menu_sub");

        if (close != null) {


            if (close.className.includes("menu_active")) {
                close.className = "menu menu_sub"
                return false
            } else {
                close.className += " menu_active"
                return false
            }
        }
    }
}