let link = Array.from(document.querySelectorAll(".has-tooltip"));
let tooltip = document.createElement("div");
tooltip.setAttribute("data-position", "bottom");

link.forEach((item) => {
    tooltip.className = "tooltip";

    item.onclick = () => {
        tooltip.className = "tooltip tooltip_active";
        tooltip.textContent = item.title;
        tooltip.style.top = item.getBoundingClientRect().top + item.getBoundingClientRect().height + "px";
        tooltip.style.left = item.getBoundingClientRect().left + "px";

        item.parentElement.insertBefore(tooltip, item);
        
        tooltip.onclick = () => {
        	tooltip.className = "tooltip";
        }

        return false
    }
})
