/*
    ==== Problem #6 ====
    A buyer is interested in seeing only BMW and Audi cars within the inventory.
    Execute a function and return an array that only contains BMW and Audi cars.
    Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
*/

module.exports = {
    problem6: function (inventory) {
        let BMWAndAudi = [];
        for(let itemIndex = 0; itemIndex < inventory.length; itemIndex++) {
            if(['BMW','Audi'].includes(inventory[itemIndex].car_make)) {
                BMWAndAudi.push(inventory[itemIndex]);
            }
        }
        return  BMWAndAudi; //Return empty list if inventory is empty or query has zero results.
    }
}