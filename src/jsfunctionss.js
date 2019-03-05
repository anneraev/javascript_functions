for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 5 === 0) {
        console.log(currentNumber, "chicken") // Only 2, 4, 6 will appear
    } else if (currentNumber % 7 === 0) {
        console.log(currentNumber, "monkey") // Only 2, 4, 6 will appear
    }
}

let bandNumber = 0

const takeNumber = function (bandName) {
    bandNumber += 1;
    return bandNumber + ". " + bandName;
}

const scum = takeNumber("Galactic Scum");
console.log(scum); // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs");
console.log(under);  // This should print "2. Underdogs" in the console

const toxic = takeNumber("Toxic Megacolon");
console.log(toxic);

const hamburger = {
    name: 'Hamburger',
    type: 'beef',
    cooked: false,
}
const zucchini = {
    name: 'Zucchini',
    type: 'vegetable',
    cooked: false,
}
const chickenBreast = {
    name: 'Chicken Breast',
    type: 'chicken',
    cooked: false,
}
const corn = {
    name: 'Corn',
    type: 'vegetable',
    cooked: false,
}
const steak = {
    name: 'Steak',
    type: 'beef',
    cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill(currentObject) {
    // Modify the food so that it is cooked
    if (currentObject.cooked === false) {
        currentObject.cooked = true;
    };
    // Put the cooked food into the appropriate array
    if (currentObject.cooked) {
        cookedFood.push(currentObject);
    };
};

for (var i = 0; i < foods.length; i += 1) {
    grill(foods[i])
};

console.log(cookedFood);