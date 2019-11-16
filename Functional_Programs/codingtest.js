// // //console.log(8 - (- 2));


// var arr = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'];
// var a = arr.toString()
// console.log(a.split(''));
// // var ab = []
// // for (var i = 0; i < a.length; i++) {
// //     ab[i] = a[i]
// // }
// // console.log(ab);

// // var rls = require('readline-sync')

// // var chars = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"];
// // var a = chars.toString();
// // // a.split();
// // var disp = a.split();
// // console.log(disp);

// // var max = 100000000;
// // var random = (Math.random() * max);

// // while (random > 0) {
// //     rls.append(chars[random % chars.length]);
// //     random /= chars.length;
// // }
// // couponCode = rls.toString();

// // console.log(couponCode);

// function coupon_code(couponcode2) {
//     var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';

//     var max = 100000000;
//     var random = parseInt(Math.random() * max)
//     var str = " ";
//     var arr = [];
//     console.log(str);
//     while (random > 0) {
//         str.concat(chars[random % arr.length]);
//         console.log(str);
//         random = parseInt(random / arr.length);
//         arr.push(str);
//     }

//     console.log(arr.join);
//     return random;
// }

const read = require('readline-sync');
let couponNo = read.questionInt('Enter the Coupon Number : ')

generateCoupon(couponNo);


function generateCoupon(no) {

    // creating arr and initializing by false value
    let arr = new Array(no);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = false;
    }

    let dist = 0;

    while (dist < no) {
        //generating random numbers
        let value = (Math.random() * 10000000 | 0);

        //if arr[value] is false the change its value to true and print the dist value dist counter increment 
        if (!arr[value]) {
            dist++;
            arr[value] = true;
            console.log(value);
        }
    }

}    