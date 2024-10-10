//store basic price
let basePrice;
let rollType;

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.totalPrice = this.calculatePrice();
        this.element = null;
    }

    calculatePrice() {
        // Find the associated price adaptations for glazing and pack size
        let glazePrice = allGlazes.find(glaze => glaze.type === this.glazing).add;
        let packPrice = allPacks.find(pack => pack.size === this.size).multiply;

        // Calculate total price as a number (without toFixed here)
        return (this.basePrice + glazePrice) * packPrice;
    }
}

const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }
};

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








