//store basic price
let basePrice = 2.49;

//store glazes specs
let allGlazes = [
    { type: 'Original', add: 0 },
    { type: 'Sugar Milk', add: 0 },
    { type: 'Vanilla Milk', add: 0.50 },
    { type: 'Double Chocolate', add: 1.50 },
];

//store pack specs
let allPacks = [
    { size: '1', multiply: 1 },
    { size: '3', multiply: 3 },
    { size: '6', multiply: 5 },
    { size: '12', multiply: 10 },
];

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
}

function updatePrice() {
    //grab elements
    let chosenGlaze = document.querySelector('#glazingOptions').value;
    let chosenPack = document.querySelector('#packOptions').value;

    //see if selection exists in class of glazes or pack, get associated price adaptation
    //for .find documentation: https://www.w3schools.com/jsref/jsref_find.asp
    let glazePrice = allGlazes.find(glaze => glaze.type === chosenGlaze).add;
    let packPrice = allPacks.find(pack => pack.size === chosenPack).multiply;

    //calc total price based on price adaptation
    let totalPrice = ((basePrice + glazePrice) * packPrice).toFixed(2);

    //update the price by the add the cart button
    let showPrice = document.querySelector('#totalPrice');
    showPrice.innerText = "$ " + totalPrice;
}
