//Нахождение элементов 
let quantityControl = Array.from(document.querySelectorAll(".product__quantity-control"));
let buttonAdd = Array.from(document.querySelectorAll(".product__add"));
let basket = document.querySelector(".cart__products");

//Определение функций
function chancheValue(item) {
	let curentValue = item.parentElement.querySelector(".product__quantity-value").textContent;
		
	if(item.className.includes("product__quantity-control_dec")) {
		curentValue--;
		item.parentElement.querySelector(".product__quantity-value").textContent = curentValue;
	}

	if(item.className.includes("product__quantity-control_inc")) {
		curentValue++;
		item.parentElement.querySelector(".product__quantity-value").textContent = curentValue;
	}

	if(curentValue < 0) {
		curentValue = 0;
		item.parentElement.querySelector(".product__quantity-value").textContent = curentValue;
	}
}

function addBasket(item) {
	let id = item.closest(".product").dataset.id;
	let curentValue = item.parentElement.querySelector(".product__quantity-value").textContent;
	let srcImage = item.closest(".product").querySelector(".product__image").src;
	let createBlock = `
			<div class="cart__product", data-id = "${id}">
				<img class="cart__product-image", src="${srcImage}">
				<div class="cart__product-count"> ${curentValue} </div>
			</div>`;
	
	let basketContent = Array.from(basket.querySelectorAll(".cart__product"));

	if(basketContent.length === 0) {
		basket.insertAdjacentHTML('afterBegin', createBlock);
	} else {
		let check = basketContent.find((el) => el.dataset.id === id);

		if(check === undefined) {
			basket.insertAdjacentHTML('afterBegin', createBlock);
		} else {
			check.querySelector(".cart__product-count").textContent = curentValue;
		}

	}
}

//Назначение обаботчиков событий
quantityControl.forEach((item) => {

	item.onclick = () => {
		chancheValue(item);
	}
})

buttonAdd.forEach((item) => {

	item.onclick = () => {
		addBasket(item);
	}
})
