const inventory = require('../inventory').inventory; //Import inventory data.
const problem6 = require('../problem6').problem6; //Import solution function.


let result = problem6(inventory);  // Calls solution function "problem6()".
console.log(JSON.stringify(result)); // Logs the result.