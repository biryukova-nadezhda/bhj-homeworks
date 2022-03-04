let interest = Array.from(document.querySelectorAll(".interest__check"));

interest.forEach((item) => {
    item.onclick = (event) => {
        event.preventDefoult;
      
        let child = Array.from(item.closest(".interest").querySelectorAll(".interest__check"));

        if(!item.closest(".interests_active")) {
        	if(item.checked === true) {
        		child.forEach((element) => {element.checked = true})
        	} else {
        		child.forEach((element) => {element.checked = false})
        	}
        }
    }
})
