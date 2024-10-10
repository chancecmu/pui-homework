function updateTotal() {
    const totalMaster = document.querySelector('#masterTotal');
    let price = 0;
    for (const item of rollCart) {
        price += item.totalPrice;
    }
    totalMaster.innerText = "$ " + price.toFixed(2);
}

//Load cart
function loadCart(item) {
    const template = document.getElementById("cart-item-template");
    const clone = template.content.cloneNode(true);

    // Set image
    clone.querySelector(".preview img").src = `../assets/products/${rolls[item.type].imageFile}`;

    // Set description
    clone.querySelector('.item-description').innerHTML =
        item.type + " Cinnamon Roll<br>" +
        "Glazing: " + item.glazing + "<br>" +
        "Pack size: " + item.size;

    // Set price
    clone.querySelector(".item-price").innerText = `$ ${item.totalPrice.toFixed(2)}`;

    // Remove button
    item.element = clone.querySelector('.cart-item');
    const removeButton = clone.querySelector(".remove");
    removeButton.addEventListener("click", function () {
        removeItem(item);
    });

    // Append the cloned item to the cart
    const cartList = document.querySelector("#loadCart");
    cartList.appendChild(clone);
}

function removeItem(item) {
    item.element.remove();
    rollCart.delete(item);

    updateTotal();
    saveToLocalStorage();
}

window.onload = function () {
    for (const item of rollCart) {
        loadCart(item);
    }
    updateTotal();
};


