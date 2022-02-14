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

    function dropdownLinkEvent(event) {
        dropdownList.className = "dropdown__list";
        dropdownValue.textContent = dropdownLinkName.textContent;
        event.preventDefault();
    }

    dropdownLinkName.addEventListener("click", dropdownLinkEvent, false);
}