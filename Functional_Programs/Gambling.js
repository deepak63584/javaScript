const gamb = require('./utility')
const readline = require('readline-sync')


var stack = readline.question('Enter your stack Amount: \n');

var goal = readline.question('Enter your goal Amount: \n');

var times = readline.question('Enter the times to gamble: \n');

gamb.gamble(stack, goal, times);