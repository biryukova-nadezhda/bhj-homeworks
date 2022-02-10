let dropdownValue = document.querySelector(".dropdown__value");
let dropdownList = document.querySelector(".dropdown__list");
let dropdownLink = Array.from(document.querySelectorAll(".dropdown__link"));

function dropdownValueEvent() {
    dropdownList.className += " dropdown__list_active";
}

dropdownValue.addEventListener("click", dropdownValueEvent);

for (let index = 0; index < dropdownLink.length; index++) {
    function giveName(index) {
        let name = dropdownLink[index];
        return name
    }

    let dropdownLinkName = giveName(index);

    dropdownLinkName.onclick = () => {
        dropdownList.className = "dropdown__list";
        dropdownValue.textContent = dropdownLinkName.textContent;
        return false
    }

    /*function dropdownLinkEvent() {
        dropdownList.className = "dropdown__list";
        dropdownValue.textContent = dropdownLinkName.textContent;
        return false
    }

    dropdownLinkName.addEventListener("click", dropdownLinkEvent, false);*/
}