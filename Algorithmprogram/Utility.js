var readlinessync = require('readline-sync')
module.exports = {

    Counttest(s) {
        var count = [];
        s = s.toLowerCase();
        let c = new Array(25);
        for (var i = 0; i < s.length; i++) {
            c[s.charAt(i) - 97]++;
        }
        return c;
    },

    anagram(s1, s2) {
        console.log(s1, " " + s2)
        if (s1.length !== s2.length) {
            return false;
        }
        s1count = this.Counttest(s1);
        s2count = this.Counttest(s2);
        for (var i = 0; i < s2count.length; i++) {
            if (s2count[i] != s1count[i]) {
                return false;
            }
        }
        return true;
    },


    prime() {
        console.log();
        var b;
        for (j = 2; j <= 1000; j++) {
            b = true;
            for (i = 2; i < j / 2; i++) {
                if (j % i == 0) {
                    b = false;
                    break;
                }
            }
            if (b)
                console.log(j + "\t ");
        }
        return 0;
    },

    primeAnagrams() {
        var ar = [];//generics concept
        console.log();
        var b;
        for (j = 2; j <= 1000; j++) {
            b = true;
            for (i = 2; i < j / 2; i++) {
                if (j % i == 0) {
                    b = false;
                    break;
                }
            }
            if (b) {
                console.log("klsdfj");

                ar.push(j);
                //console.log(ar);
            }

            //console.log(ar);
            //this.anagram(s1, s2)
        }
        for (i = 0; i < ar.length; i++) {
            console.log(ar.length);
            console.log(ar);
            for (j = i + 1; j < ar.length; j++) {
                if (this.anagram(ar[i], ar[j])) {
                    console.log(ar[i] + "  " + ar[j]);
                }
            }
        }
        return 0;
    },


    insertionSort() {
        var arr = [5, 2, 6, 1, 3, 9];
        var temp;
        for (i = 1; i < arr.length; i++) {
            for (j = i; j > 0; j--) {
                if ((arr[j] - arr[j - 1]) < 0) {
                    temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                }
                else
                    break;
            }
        }
        console.log(arr);

        return arr;
    },

    //     for (var i = 1; i < arr.length; i++) {
    //         if (arr[i] < arr[0]) {
    //             //move current element to the first position
    //             arr.unshift(arr.splice(i, 1)[0]);
    //         }
    //         else if (arr[i] > arr[i - 1]) {
    //             //leave current element where it is
    //             continue;
    //         }
    //         else {
    //             //find where element should go
    //             for (var j = 1; j < i; j++) {
    //                 if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
    //                     //move element
    //                     arr.splice(j, 0, arr.splice(i, 1)[0]);
    //                 }
    //             }
    //         }
    //     }
    //     return arr;
    // },

    bubbleSort(numbers) {
        //var numbers = [9, 4, 9, 24, 6, 14, 3, 7, 75, 10]
        var temp;
        for (i = 0; i < numbers.length; i++) {
            for (j = 1; j < (numbers.length - i); j++) {
                //if numbers[j-1] > numbers[j], swap the elements
                if (numbers[j - 1] > numbers[j]) {
                    temp = numbers[j - 1];
                    numbers[j - 1] = numbers[j];
                    numbers[j] = temp;
                }
            }
        }

        return numbers;
    },

    binary(arr1, n) {
        var arr = this.bubbleSort(arr1);
        var high = arr.length - 1, low = 0, mid;

        //var key = readlinessync.question('Enter your key do you whant to search :')

        console.log(arr);

        while (low <= high) {
            mid = (low + high) / 2;
            if (n == arr[mid]) {
                return mid;
            } else if (arr[mid] < n) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        //console.log(mid);
        //console.log(n);
        //console.log();
        return 0;
    },














}