var s = require('readline-sync')

console.log('hello', s)

function getAllPermutations(string) {
    var count = 0;
    var results = [];

    if (string.length === 1) {
        results.push(string);
        console.log(results);
        return results;
    }

    for (var i = 0; i < string.length; i++) {
        var firstChar = string[i];
        var charsLeft = string.substring(0, i) + string.substring(i + 1);
        var innerPermutations = this.getAllPermutations(charsLeft);
        for (var j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
            count++;
        }
        console.log("no of permutation :" + count);
    }
    return results;
}
