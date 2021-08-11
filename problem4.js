/*
    ==== Problem #4 ====
    The accounting team needs all the years from every car on the lot.
    Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
*/

module.exports = {
    problem4: function (inventory) {
        if(inventory.length == 0){ 
            return [];
        }
        let yearList = [];
        for(let itemIndex = 0; itemIndex < inventory.length; itemIndex++) {
            yearList.push(inventory[itemIndex].car_year);
        }
        return  yearList;   //Return empty list if inventory is empty.
    }
}