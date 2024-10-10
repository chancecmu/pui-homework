let rollCart = new Set();

function saveToLocalStorage() {
    const rollArray = Array.from(rollCart);
    const rollArrayString = JSON.stringify(rollArray);

    localStorage.setItem('storedRolls', rollArrayString);
    console.log(rollCart);
}

if (localStorage.getItem('storedRolls') != null) {
    retrieveFromLocalStorage();
}

function retrieveFromLocalStorage() {
    const rollArrayString = localStorage.getItem('storedRolls');
    const rollArray = JSON.parse(rollArrayString);
    rollCart = new Set(rollArray);
}

