const binarysrch = require('./Utility')
const readline = require('readline-sync')
var arr1 = [3, 60, 35, 2, 45, 320, 5];

console.log(arr1);

var key = readline.question('Enter your key do you whant to search :')

//binarysrch.binary(key);

console.log(binarysrch.binary(arr1, key));
