let menuLink = Array.from(document.querySelectorAll(".menu__link"));
let menuSub = Array.from(document.querySelectorAll(".menu_sub"));
// menu_active
for (let index = 0; index < menuLink.length; index++) {

    function giveName(index) {
        let menuLinkHtml = menuLink[index];
        return menuLinkHtml;
    }

    let linkMenu = giveName(index);
    let parent = linkMenu.closest(".menu")

    linkMenu.onclick = () => {
        if (parent.className.includes("menu_sub")) {
            parent.className += " menu_active";
            return false
        }

    }
}