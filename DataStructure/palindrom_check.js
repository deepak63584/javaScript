var rl = require('readline-sync');
var deq = require('./utilitydata/dequeue')
var util = require('./utilitydata/Utildata');

var str = rl.question("Enter the String:");
palindrome = util.checkPalindrome(str);
console.log(palindrome);
if (palindrome === true)
    console.log(str + " is palindrome String.");
else
    console.log(str + " is not palindrome String.");