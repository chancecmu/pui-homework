//HW5 Testing instances ---------------------------------------------------------------------------------------

let rollCart = [
    new Roll("Original", "Sugar Milk", "1", 2.49),
    new Roll("Walnut", "Vanilla Milk", "12", 3.49),
    new Roll("Raisin", "Sugar Milk", "3", 2.99),
    new Roll("Apple", "Original", "3", 3.49),
]

function loadCart() {
    const template = document.querySelector('#cart-item-template');
    const cartList = document.querySelector('#loadCart');

    // Clear the current cart list to prevent duplicates on reload
    cartList.innerHTML = '';

    for (let i = 0; i < rollCart.length; i++) {
        const roll = rollCart[i];

        let clone = document.importNode(template.content, true);

        // Updating image
        clone.querySelector('.preview img').src = '../assets/products/' + rolls[roll.type].imageFile;

        // Updating description
        clone.querySelector('.item-description').innerHTML =
            roll.type + " Cinnamon Roll<br>" +
            "Glazing: " + roll.glazing + "<br>" +
            "Pack size: " + roll.size;

        // Set the remove button id to the roll index
        const removeButtonElement = clone.querySelector('.remove');
        removeButtonElement.id = roll.index;
        removeButtonElement.addEventListener('click', function () {
            removeRoll(roll.index);  // Pass the roll index to removeRoll
        });

        // Updating price
        clone.querySelector('.item-price').innerText = "$ " + roll.totalPrice;

        // Add to the cart list
        cartList.appendChild(clone);
    }

    // Update master total
    updateTotal();
}


function updateTotal() {
    const totalElement = document.querySelector('#masterTotal');
    let total = 0;

    // Sum the total price of all rolls in the cart
    for (let i = 0; i < rollCart.length; i++) {
        total += parseFloat(rollCart[i].totalPrice);
    }

    totalElement.innerText = "$ " + total.toFixed(2);
}

function removeRoll(index) {
    // Remove item from the rollCart array using the unique index
    rollCart = rollCart.filter(roll => roll.index !== index); // Filter out roll with that unique index

    // reflect the updated rollCart array
    loadCart();

    // Update total price
    updateTotal();
}

window.onload = function () {
    loadCart();
}


