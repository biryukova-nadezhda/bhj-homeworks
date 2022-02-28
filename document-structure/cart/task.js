let basket = document.querySelector(".cart__products");
let products = Array.from(document.querySelectorAll(".product"));
let quantityControl = Array.from(document.querySelectorAll(".product__quantity-control"));

//console.log(quantityControl)

quantityControl.forEach((elem) => {
    elem.onclick = () => {
            let elemContent = elem.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent;

            let curentQuantity = Number(elemContent);
            curentQuantity++
            console.log(`${curentQuantity}`)
            if (elem.className.includes("product__quantity-control_dec")) {
                curentQuantity++;
                elemContent = `${curentQuantity}`;
                //console.log(elem.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent = 5)
            }

            if (elem.className.includes("product__quantity-control_inc")) {
                console.log("+");
            }
        }
        //console.log(elem)
})