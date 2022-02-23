let interest = Array.from(document.querySelectorAll(".interest__check"));

/*interest.forEach((item) => {
    item.addEventListener("change", () => {
        console.log(item.checked);
    })
})*/

for (let index = 0; index < interest.length; index++) {

    let item = interest[index];
    item.onchange = () => {
        if (item.checked) {
            interest[index + 1].checked = true;
            interest[index - 1].checked = true;
        }
    }
}