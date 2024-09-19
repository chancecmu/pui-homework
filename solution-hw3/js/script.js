//store basic price
let basePrice = 2.49;

//store glazes specs
let allGlazes = [
    { type: 'original', add: 0 },
    { type: 'sugar-milk', add: 0 },
    { type: 'vanilla-milk', add: 0.50 },
    { type: 'double-chocolate', add: 1.50 },
];

//store pack specs
let allPacks = [
    { size: '1', multiply: 1 },
    { size: '3', multiply: 3 },
    { size: '6', multiply: 5 },
    { size: '12', multiply: 10 },
];

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
