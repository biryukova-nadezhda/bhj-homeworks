let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let deadCounter = 0;
let lostCounter = 0;

for (let index = 1; index <= 9; index++) {

    function getHole(index) {
        let holeHtml = document.getElementById(`hole${index}`);
        return holeHtml;
    }

    function getZero() {
        deadCounter = 0;
        lostCounter = 0;
        dead.textContent = deadCounter;
        lost.textContent = lostCounter;
    }

    let hole = getHole(index);

    hole.onclick = () => {
        if (hole.className.includes("hole_has-mole")) {
            deadCounter++;
            dead.textContent = deadCounter;
        } else {
            lostCounter++;
            lost.textContent = lostCounter;
        }

        if (deadCounter === 10) {
            alert("Вы победили!");
            getZero();
        } else if (lostCounter === 5) {
            alert("Увы, Вы проиграли. Попробуем снова?");
            getZero();
        }
    }
}