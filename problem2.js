/*
    ==== Problem #2 ====
    The dealer needs the information on the last car in their inventory.
    Execute a function to find what the make and model of the last car in the inventory is? 
    Log the make and model into the console in the format of: 
    "Last car is a *car make goes here* *car model goes here*"
*/

module.exports = {
    problem2: function (inventory) {
        if(inventory.length == 0){  //Return empty list if inventory is empty.
            return [];
        }
        maxIDIndex = 0;
        for(let itemIndex = 0; itemIndex < inventory.length; itemIndex++) {
            if(inventory[itemIndex].id > inventory[maxIDIndex].id){
                maxIDIndex = itemIndex;
            }
        }
        return  `Last car is a ${inventory[maxIDIndex].car_make} ${inventory[maxIDIndex].car_model}`;    
    }
}