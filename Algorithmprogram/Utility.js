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


    isPalindrome(n) {
        var i; var j;
        var palindromearray = []
        if (n.length >= 2) {

            var n = n.toString()
            var n1 = n                  //Original Number
            var n2 = n.split("")
            for (i = 0, j = n2.length - 1; i <= j; i++ , j--) {
                var temp = n2[i];
                n2[i] = n2[j]
                n2[j] = temp
            }
            n2 = n2.join("")
            // console.log(n2);

            // console.log("Original Number: " + n1);
            // console.log("Reversed Number: " + n2);

            if (n1 == n2) {
                console.log(n1)
                palindromearray.push(n1)
            }

        }
        return palindromearray

    },



    sort() {
        var nums = [7, -5, 3, 2, 1, 0, 45];
        console.log("Before sorting :");

        console.log(nums);

        console.log("After sorting :");


        var left = 0;
        var right = nums.length;
        if (left < right) {
            // Find the middle point
            var m = (left + right) / 2;

            // Sort first halve
            this.sort(nums, left, m);
            // Sort second halve
            this.sort(nums, m + 1, right);

            // Merge the sorted halves
            this.merge(nums, left, m, right);
        }
        return 0;
    },

    merge(nums, left, m, right) {
        var n1 = m - left + 1;
        var n2 = right - m;

        var Left_part_arra = [new int[n1]];
        var Right_part_arra = [new int[n2]];

        for (var i = 0; i < n1; ++i)
            Left_part_arra[i] = nums[left + i];
        for (var j = 0; j < n2; ++j)
            Right_part_arra[j] = nums[m + 1 + j];

        var i = 0, j = 0;

        var k = left;
        while (i < n1 && j < n2) {
            if (Left_part_arra[i] <= Right_part_arra[j]) {
                nums[k] = Left_part_arra[i];
                i++;
            }
            else {
                nums[k] = Right_part_arra[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            nums[k] = Left_part_arra[i];
            i++;
            k++;
        }

        while (j < n2) {
            nums[k] = Right_part_arra[j];
            j++;
            k++;
        }
        console.log(nums)
    },


    dayOfWeek(d, m, y) {
        console.log(d, m, y);


        var y0 = (y - (14 - m) / 12) | 0;
        //console.log(y0);

        var x = (y0 + y0 / 4 - y0 / 100 + y0 / 400) | 0;
        //console.log(x);

        var m0 = (m + 12 * ((14 - m) / 12) - 2) | 0;
        //console.log(m0);

        var d0 = (d + x + (31 * m0) / 12) % 7 | 0;
        //console.log(d0);
        console.log("your day is : ");

        switch (d0) {
            case 0:
                console.log("Sunday");
                break;
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            default:
                console.log("Invalid");
                break;
        }


    },


    returnnotes(value) {
        change = 0, TOTAL = 0;
        console.log(TOTAL);

        var notes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
        while (value > 0) {
            if (value / notes[change] != 0) {
                TOTAL += (value / notes[change]) | 0;
                console.log(TOTAL);
                console.log(notes[change] + "rs notes :" + value / notes[change]);
                value = value % notes[change];
            }
            change++;
            if (value == 0) {
                console.log("total notes :" + TOTAL);
            }

        }
        console.log(value);
        return notes;


    },



    swap(s1, i, j) {
        var ch = []
        ch = s1.toCharArray();
        var temp;
        temp = ch[i];
        ch[i] = ch[j];
        ch[j] = temp;
        return new String(ch);
    }
    permutation(s2) {
        var count = 0;
        var s1 = " ";
        //ArrayList < String > arl = new ArrayList<String>();
        //List<? extends Object> list = new ArrayList<String>();
        //ArrayList<String> obj = new ArrayList<String>(
        for (var i = 0; i < s2.length(); i++) {
            for (var j = 0; j < s2.length(); j++) {
                s1 = s2;
                console.log(i + " " + j);
                Console.log(this.swap(s1, i, j));
                count++;
            }
        }
        Console.log("no of permutation :" + count);
        return arl.toArray(new String[arl.size()]);

    },













}