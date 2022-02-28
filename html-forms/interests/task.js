let interest = Array.from(document.querySelectorAll(".interest__check"));

interest.forEach((item) => {
    item.onclick = (event) => {
        event.preventDefoult;
        let parent = item.closest(".interests").parentElement.querySelector(".interest__check");
        let child = Array.from(item.closest(".interest").querySelectorAll(".interest__check"));

        if (item.checked) {
            parent.checked = true;
            child.forEach((elem) => elem.checked = true)
        } else {
            parent.checked = false;
            child.forEach((elem) => elem.checked = false)
        }
    }
})