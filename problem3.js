/*
    ==== Problem #3 ====
    The marketing team wants the car models listed alphabetically on the website.
    Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
*/

module.exports = {
    problem3: function (inventory) {
        let temp;
        for(let itemIndex = 0; itemIndex < inventory.length - 1; itemIndex++) {
            for(let compareIndex = itemIndex + 1; compareIndex < inventory.length; compareIndex++) {
                if(inventory[itemIndex].car_model.localeCompare(inventory[compareIndex].car_model) > 0) {
                    temp = inventory[compareIndex];
                    inventory[compareIndex] = inventory[itemIndex];
                    inventory[itemIndex] = temp;
                }
            }
        }
        return  inventory;    
    }
}