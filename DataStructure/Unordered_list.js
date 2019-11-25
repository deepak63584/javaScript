const fs = require('fs')
const inputlist = require("./utilitydata/Utildata")
const readlinelist = require('readline-sync')

var readdata = fs.readFileSync("unorder.txt", "utf-8").toString().split(" ");
//console.log(readdata);
var linkedlist = new inputlist.LinkedList();
for (var i = 0; i < readdata.length; i++) {
    linkedlist.InsertFront(readdata[i]);
}
linkedlist.DisplayList();

var searchkey = readlinelist.question('Enter the string do you want to search : \n');

if (linkedlist.Search(searchkey)) {
    linkedlist.DeleteElement(searchkey);
    linkedlist.DisplayList();
}
else {
    linkedlist.InsertFront(searchkey);
    console.log("Data is added : ")
    linkedlist.DisplayList();
}
var totallistdata = linkedlist.ReturnString();
fs.writeFileSync("unorder.txt", totallistdata, "utf-8");
linkedlist.DisplayList();
