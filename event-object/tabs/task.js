let tabHtml = Array.from(document.querySelectorAll(".tab"));
let tabContentHtml = Array.from(document.querySelectorAll(".tab__content"));

for (let index = 0; index < tabHtml.length; index++) {
    function giveNameTab(index) {
        let name = tabHtml[index];
        return name
    }

    let tabName = giveNameTab(index);

    function tabNameEvent() {

        if (tabName.className.includes("tab_active")) {
            return false
        } else {
            let elementActive = document.querySelector(".tab_active");
            let elementContent = document.querySelector(".tab__content_active");

            elementActive.className = "tab";
            elementContent.className = "tab__contents";

            tabName.className += " tab_active";
            tabContentHtml[index].className += " tab__content_active";
        }
    }

    tabName.addEventListener("click", tabNameEvent);

}