
const conv = require('./utility')
const readline = require('readline-sync')

var fNum = readline.question("enter the value of fehrenheit \n")
var cNum = readline.question("enter the value of celsius \n")

conv.temperatureConversion(fNum, cNum)



