let chosenGlaze;
let chosenPack;

function updatePrice() {
    //grab elements
    chosenGlaze = document.querySelector('#glazingOptions').value;
    chosenPack = document.querySelector('#packOptions').value;

    // Find the associated price adaptations for glazing and pack size
    let glazePrice = allGlazes.find(glaze => glaze.type === chosenGlaze).add;
    let packPrice = allPacks.find(pack => pack.size === chosenPack).multiply;

    // Calculate total price as a number (without toFixed here)
    let totalPrice = (basePrice + glazePrice) * packPrice;

    //update the price by the add the cart button
    let showPrice = document.querySelector('#totalPrice');
    showPrice.innerText = "$ " + totalPrice.toFixed(2);
}

window.onload = function () {
    let glazes = document.querySelector('#glazingOptions');
    let packs = document.querySelector('#packOptions');

    for (let i = 0; i < allGlazes.length; i++) {
        var option = document.createElement('option');
        option.text = allGlazes[i].type;
        option.value = allGlazes[i].type;
        glazes.add(option);
    }

    for (let i = 0; i < allPacks.length; i++) {
        var option = document.createElement('option');
        option.text = allPacks[i].size;
        option.value = allPacks[i].size;
        packs.add(option);
    }

    //relates to passed parameters from the detail links
    const queryString = window.location.search; //get stuff after ?
    const params = new URLSearchParams(queryString); //set up roll variable
    rollType = params.get('roll'); //grab value inside of roll

    // Update the header text
    const headerElement = document.querySelector('#roll-header-text');
    headerElement.innerText = rollType + " Cinnamon Roll";

    // Update the image
    const rollImage = document.querySelector('#roll-img');
    rollImage.src = '../assets/products/' + rolls[rollType].imageFile;

    // Update the base price
    basePrice = rolls[rollType].basePrice;

    updatePrice();

    document.querySelector('#cartBtn').addEventListener('click', function () {
        rollCart.add(new Roll(rollType, chosenGlaze, chosenPack, basePrice));
        saveToLocalStorage();
    });
}