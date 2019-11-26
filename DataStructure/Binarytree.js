const utildata = require('./utilitydata/Utildata');
const readline = require('readline-sync');


var node = readline.questionInt("Enter the no nodes:");
var tree = utildata.binaryTree(node);
console.log(tree + " trees are generated.");