/*
    ==== Problem #1 ====
    The dealer can't recall the information for a car with an id of 33 on his lot.
    Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car.
    Then log the car's year, make, and model in the console log in the format of: 
    "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"
*/

module.exports = {
    problem1: function (inventory, targetID = 33) {
        for(let itemIndex = 0; itemIndex < inventory.length; itemIndex++) {
            if(inventory[itemIndex].id === targetID){
                return  `Car ${inventory[itemIndex].id} is a ${inventory[itemIndex].car_year} ${inventory[itemIndex].car_make} ${inventory[itemIndex].car_model}`;
            }
        }
        return [];  //Return empty list if targetID is not present in the inventory or inventory itself is empty.
    }
} 