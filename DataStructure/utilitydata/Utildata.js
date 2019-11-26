

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }



    isempty() {
        if (this.head == 0) {
            console.log("list is empty...")
        }
    }


    InsertFront(data) {
        var newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    /**
 * @description : method for sorting linked list in ascending order
 * */
    sortdata() {
        var current = this.head,
            nextNode = null;
        var temp;
        // checking linked list is empty or not 
        if (this.head == null) {
            return;
        }
        else {
            // loop until current node is null
            while (current != null) {
                nextNode = current.next;
                while (nextNode != null) {
                    // comparing the current and next node
                    if (current.data > nextNode.data) {
                        // current node is greater than next node
                        // then swaping both the node
                        temp = current.data;
                        current.data = nextNode.data;
                        nextNode.data = temp;
                    }
                    nextNode = nextNode.next;
                }
                current = current.next;
            }
        }
    }


    InsertSorted(data) {
        var newNode = new Node(data);
        var current = this.head;
        //var previous = this.head;
        //if head is null or head data is larger than new node 
        //the make new node as a head
        if (this.head == null || current.data >= newNode.data) {

            newNode.next = this.head;
            this.head = newNode;
        }
        else {

            // loop until node larger than new node found
            while (current.next != null && current.next.data < newNode.data) {
                current = current.next;
            }
            // if new node larger than all node in the list then add to the last
            if (current.next == null) {
                current.next = newNode;
            }
            else {
                // node lager than new node is found then add before larger node
                newNode.next = current.next;
                current.next = newNode;
            }
        }
    }
    /***************************************insertNextToKey method************************/
    InsertNextTOKey(key, data) {
        var current = this.head;
        while (current.data != key) {
            if (current.next == null) {
                break;
            }
            current = current.next;
        }
        if (current.data == key) {
            var newNode = new Node(data);
            newNode.next = current.next;
            current.next = newNode;
            console.log("element is added to list");
            return true;
        }
        else {
            console.log("key is not in the list");
            return false;
        }
    }
    /*************************************DisplayStringList method************************/
    DisplayList() {
        var current = this.head;
        var arr = " ";
        while (current != null) {
            arr += current.data + "->";
            current = current.next;
        }
        console.log(arr);
        console.log();
    }
    /***************************************ReturnString method************************/
    ReturnString() {
        var stringText = "";
        var current = this.head;
        if (this.head != null) {
            stringText += current.data;
            current = current.next;
            while (current != null) {
                stringText = stringText + " " + current.data;
                current = current.next;
            }
            return stringText;
        }
        else {
            Console.WriteLine("List is empty");
            return null;
        }
    }

    /***************************************ReturnString method***********************
    public int ReturnIntArray()
    {
        int[] intArray = new int[1000];
        Node current = head;
        if (head != null)
        {
            int i = 0;
            while (current != null)
            {
                intArray[i] = current.data;
                current = current.next;
                i++;
            }
            return intArray;
        }
        else
        {
            console.log("List is empty");
            return null;
        }
    }
    */
    /***************************************Search-string method************************/
    Search(key) {
        var current = this.head;
        if (this.head == null) {
            console.log("List is empty so none element deleted");
            return false;
        }
        while (current.data != key) {
            if (current.next == null) {
                break;
            }
            current = current.next;
        }
        if (current.data == key) {
            console.log("element found in list");
            return true;
        }
        else {
            console.log("element is not in list");
            return false;
        }
    }
    /***************************************DeleteFront method************************/
    DeleteFront() {
        if (this.head == null) {
            console.log("List is empty so none element deleted");
        }
        else if (this.head.next == null) {
            this.head = null;
        }
        else {
            this.head.data = this.head.next.data;
            this.head.next = this.head.next.next;
        }
    }
    /***************************************DeleteKeyElement(string) method************************/
    DeleteElement(key) {
        var current = this.head;
        var previous = this.head;
        if (current.data == key) {
            this.head.data = this.head.next.data;
            this.head.next = this.head.next.next;
            console.log("1st element deleted from the list");
            return true;
        }
        else {
            current = current.next;
        }
        while (current.data != key) {
            if (current.next == null) {
                break;
            }
            previous = current;
            current = current.next;
        }
        if (current.data == key) {
            previous.next = current.next;
            console.log("element  deleted from the list");
            return true;
        }
        else {
            console.log("element is not in list");
            return false;
        }
    }

    // end of all methods.
}



class Bank {
    constructor(balance) {
        this.balance
    }
}




/**
 * 
 * @param {*} readlinessync : fetch the value fom user :
 * @param {*} module : Export module from server :
 * 
 */
const dequtil = require('./dequeue')
const queutil = require('./QueueUtility')
var readlinessync = require('readline-sync')
module.exports = {
    LinkedList,
    Bank,

    //**
    //* 
    //* @param {*} str1 :
    //* @param {*} str2 :
    //*/

    isAnagram(str1, str2) {
        var count = 0;
        var string1 = str1.toString().split("");
        string1.sort();
        var string2 = str2.toString().split("");
        string2.sort();

        var l1 = string1.length;
        //console.log(l1);
        if (string1.length != string2.length) {
            return false;
        }

        else {
            for (var i = 0; i < l1; i++) {
                if (string1[i] == string2[i]) {
                    count++;
                }
            }
            if (count == string1.length) {
                return true;
                //console.log("string are anagram");
            }
            else {
                return false;
                //console.log("string are not anagram");
            }
        }
    },
    sort(no) {
        var arr = no;
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = i + 1; i < arr.length; j++) {
                if (no[i] < no[j]) {
                    var temp = no[i];
                    no[i] = no[j];
                    no[j] = temp;
                }
            }
        }
        return (arr);
    },



    isLeapYear(year) {
        /*
        * ensure year is of four digit
        */
        //condition for checking leap 
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            return true;
        }
        else {
            return false;
        }
    },

    GetLast_Date(month, year) {
        var lastDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month == 2) {
            if (this.isLeapYear(year)) {
                return 29;
            }
            else {
                return lastDates[month - 1];
            }
        }
        else {
            return lastDates[month - 1];
        }
    },
    day(month, days, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        // console.log(y0);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        //console.log(x);
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        //console.log(m0);
        var d0 = (days + x + Math.floor((31 * m0) / 12)) % 7;
        //.log(d0);

        return d0;
    },
    // GetCalenderArray(firstDay, lastDay) {
    //     var calenderArray = [6, 7];
    //     var date = 1;
    //     for (var i = 0; i < 6; i++) {
    //         if (i == 0) {
    //             for (var j = 7 - firstDay; j < 7; j++) {
    //                 calenderArray[i, j] += date;
    //                 date++;
    //             }
    //         }
    //         else {
    //             for (var j = 0; j < 7; j++) {
    //                 if (date <= lastDay) {
    //                     calenderArray[i, j] += date;
    //                     date++;
    //                 }
    //             }

    //         }
    //     }
    //     //console.log((calenderArray));

    //     return calenderArray;

    // },

    calender(month, year) {

        var months = [
            "",
            "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ];
        var days = [0, 31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
        try {
            // input year & month from user
            //var year= rl.questionInt("enter the year:");
            //var month=rl.questionInt("enter the month:");

            //checking Month & year is valid or not
            if (month < 0 || month > 12)
                throw "Month value is Invalid , Please Enter a value in range 1-12"
            if (month == undefined || year == undefined)
                throw "NO input found";
            console.log();

            //checked year is leap year or not
            if (month == 2 && this.isLeapYear(year)) days[month] = 29;
            //show.print()
            console.log("              " + months[month] + " " + year);
            console.log();

            console.log("Mon   Tue   Wed   Thu   Fri   Sat   Sun");

            //days printing
            var day = this.day(month, 1, year);
            //console.log(day);

            for (let i = 0; i < day; i++) {
                process.stdout.write("     ");
                //console.log(i);

            }
            for (var i = 1; i <= days[month]; i++) {
                process.stdout.write("   ", i);
                //console.log(i);

                if (i < 10) {
                    process.stdout.write("   ");
                    //console.log(i);

                }
                if (((i + day) % 7 == 0) || (i == days[month])) {
                    //console.log(i);

                    console.log("   ");
                }
            }
        }

        catch (err) {
            console.log("Error:   " + err);
        }
    },




    checkPalindromeWord(word) {


        var size = word.length;
        var isPalindrome = true;

        //Dequeue
        //let dequtil = new.Dequeue();
        // var ch = word.split(" ");

        for (let i = 0; i < size; i++) {
            //To add element from rear
            dequtil.addRear(word[i]);
        }
        while (!dequtil.isEmpty() && dequtil.front != dequtil.rear) {
            //if removed element from front is not equal to removed element from rear then returns false
            if (dequtil.removeFront() == dequtil.removeRear()) {
                isPalindrome = true;
            }
            else {
                return false;
            }
        }
        return true;
    },































    //Queue Data Structure
    //Simulate Banking Cash Counter
    cashCounter(balance) {
        var totalAmt = balance;
        console.log(totalAmt);
        var queue = new queutil.Queue();

        //take input no of user in queue
        var pepole = readlinessync.questionInt("enter the no pepole in queue:");
        for (var i = 0; i < pepole.length; i++) {
            queue.inqueue(i);
        }

        //travers loop for no. of pepole in queue
        while (pepole > 0) {
            var ch = 0, amount = 0;
            ch = readlinessync.questionInt("\n1.Press 1 for Deposit Amount.\n2.Prss 2 for Withdraw Amount.\n");
            switch (ch) {
                case 1:
                    //deposit amount
                    amount = readlinessync.questionInt("Enter the Amount : ");
                    totalAmt = this.depositAmt(totalAmt, amount);
                    break;
                case 2:
                    //withdraw amount
                    amount = readlinessync.questionInt("Enter the Amount :");
                    totalAmt = this.withdrawAmt(totalAmt, amount);
                    break;
                default:
                    Console.WriteLine("invalid input!! enter your option again:");
            }
            pepole--;
        }

    },
    //deposit Amount
    depositAmt(totalAmt, amount) {
        totalAmt += amount;
        console.log("Updated Balnce:" + totalAmt);
        return totalAmt;
    },
    //withdraw Amount
    withdrawAmt(totalAmt, amount) {
        if (totalAmt > amount) {
            totalAmt -= amount;
            console.log("Updated Balnce:" + totalAmt);
            return totalAmt;
        } return console.log("Insufficent Balancle..\nCurrent Balance:" + totalAmt);

    },






    //Dequeue Data Structure
    //Palindrome-Checker
    checkPalindrome(str) {
        console.log(str);

        var dqueue = new dequtil.Dequeue();
        var count = 0;
        var Palindrome = false;
        for (var i = 0; i < str.length; i++) {
            console.log(typeof (dqueue.addRear(str[i])));
        }
        console.log(
            dqueue.qprint());
        while (!dqueue.isEmpty() && dqueue.front !== dqueue.rear) {
            var str = "", str2 = "";
            str1 = dqueue.removeRear();
            console.log(str1)
            str2 = dqueue.removeFront();
            console.log(str2);

            if (str1 === str2) {
                count++;
            }
        }
    },


    factorial(n) {
        var fact = 1;
        for (i = 1; i <= n; i++) {
            //fact=fs.readFileSync(fileName).toString().split(" ");
            //return content;
            fact = fact * i;
        } return fact;
    },
    binaryTree(node) {
        var number = (Math.floor(this.factorial(2 * node)) / (this.factorial(node + 1) * this.factorial(node)));
        return number;
    },













}