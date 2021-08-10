const inventory = require('../inventory').inventory; //Import inventory data.
const problem5 = require('../problem5').problem5; //Import solution function.
const problem4 = require('../problem4').problem4; //Import solution function of previous problem.


let result = problem5(problem4(inventory));  // Calls solution function "problem5()".
console.log(result.length); // Logs the result.