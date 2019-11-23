const fs = require('fs')
const inputlist = require("./Utildata")
const readlinelist = require('readline-sync')

var readdata = fs.readFileSync("unorder.txt", "utf-8").toString().split(" ");
//console.log(readdata);
var linkedlist = new inputlist.LinkedList();
for (var i = 0; i < readdata.length; i++) {
    linkedlist.InsertFront(readdata[i]);
}
linkedlist.DisplayStringList();

var searchkey = readlinelist.question('Enter the string do you want to search : \n');

if (linkedlist.Search(searchkey)) {
    linkedlist.DeleteKeyElement(searchkey);
    linkedlist.DisplayStringList();
}
else {
    linkedlist.InsertFront(searchkey);
    console.log("Data is added : ")
    linkedlist.DisplayStringList();
}
fs.writeFileSync("unorder.txt", searchkey, "utf-8");
