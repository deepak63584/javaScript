/**
 * Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack using
    the Linked List and Print the Anagrams in the Reverse Order. Note no Collection
    Library can be used.

    @author : Deepak Singh

    @singh : 25/11/2019
 */


const stackutil = require('./utilitydata/stackutility');
const readstack = require('readline-sync');

var pnum = stackutil.primeNumber(1000);
//console.log(pnum);
for (var i = 0; i < pnum.length - 1; i++) {
    for (var j = i + 1; j = pnum.length; j++) {
        console.log(pnum[j]);

        var anagramdata = stackutil.isanagram(pnum[i], pnum[j])
        console.log(pnum);
        console.log(anagramdata);
    }
}