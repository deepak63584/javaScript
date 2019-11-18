const input = require('./Utility')
const readline = require('readline-sync')

var value = readline.questionInt("Enter amount do you want to change : \n");

input.returnnotes(value);