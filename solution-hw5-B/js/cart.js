let rollCart = new Set([
    new Roll("Original", "Sugar Milk", "1", 2.49),
    new Roll("Walnut", "Vanilla Milk", "12", 3.49),
    new Roll("Raisin", "Sugar Milk", "3", 2.99),
    new Roll("Apple", "Original", "3", 3.49)
]);

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
}

window.onload = function () {
    for (const item of rollCart) {
        loadCart(item);
    }
    updateTotal();
};
