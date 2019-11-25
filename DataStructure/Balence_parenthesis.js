/*Desc ­> Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the
performance of operations. Ensure parentheses must appear in a balancedfashion.
     I/P ­> read in Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)
     Logic ­> Write a Stack Class to push open parenthesis “(“ and pop closed parenthesis “)”. At the End of the Expression
         if the Stack is Empty then the Arithmetic Expression is Balanced. Stack Class Methods are Stack(), push(),
        pop(), peak(), isEmpty(), size()
     O/P ­> True or False to Show Arithmetic Expression is balanced or not.
*/


const stackutil = require('./utilitydata/stackutility');
const readline = require('readline-sync');


var stackdata = new stackutil.Stacklinkedlist();
var expressions = readline.question("Enter the Expression : ");
for (var i = 0; i < expressions.length; i++) {
    var char = expressions.charAt(i);
    if (char == "{" || char == "[" || char == "(") {
        //console.log("aa raha");
        stackdata.pushdata(char);
        //console.log(char);
    }
    else if (char == ')' || char == '}' || char == ']') {
        stackdata.pop();
        //console.log("nahi aa rha ");

        console.log(char);
    }
}
if (stackdata.size == 0) {
    console.log("Stack expression is balenced : ");
}
else {
    console.log("Stack expression is not balenced : ");
}