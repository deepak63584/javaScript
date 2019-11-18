// methods.isPalindrome = function (n) {
//     var i; var j;
//     var palindromearray = []
//     if (n.length >= 2) {

//         var n = n.toString()
//         var n1 = n                  //Original Number
//         var n2 = n.split("")
//         for (i = 0, j = n2.length - 1; i <= j; i++ , j--) {
//             var temp = n2[i];
//             n2[i] = n2[j]
//             n2[j] = temp
//         }
//         n2 = n2.join("")
//         // console.log(n2);

//         // console.log("Original Number: " + n1);
//         // console.log("Reversed Number: " + n2);

//         if (n1 == n2) {
//             console.log(n1)
//             palindromearray.push(n1)
//         }

//     }
//     return palindromearray

// }