

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





/**
 * 
 * @param {*} readlinessync : fetch the value fom user :
 * @param {*} module : Export module from server :
 * 
 */
var readlinessync = require('readline-sync')
module.exports = {
    LinkedList,

    //**
    //* 
    //* @param {*} str1 :
    //* @param {*} str2 :
    //*/

    isAnagram(str1, str2) {
        //var str1=13,13,11;
        //var str2=23,11,19;
        var check = false;
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

            //checked year is leap year or not
            if (month == 2 && this.isLeapYear(year)) days[month] = 29;
            //show.print()
            console.log("      " + months[month] + "      " + year);
            console.log(" Sun  Mon Tues  Wed Thus  Fri  Sat");

            //days printing
            var day = this.day(month, 1, year);

            for (let i = 0; i < day; i++) {
                show.print("     ")
            }
            for (var i = 1; i <= days[month]; i++) {
                show.print("    ", i);
                if (i < 10) {
                    show.print("    ");
                }
                if (((i + day) % 7 == 0) || (i == days[month])) {
                    console.log("    ");
                }
            }
        }
        catch (err) {
            console.log("Error: " + err);
        }
    },
    day(month, days, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        console.log(y0);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        console.log(x);
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        console.log(m0);
        var d0 = (days + x + Math.floor((31 * m0) / 12)) % 7;
        console.log(d0);

        return d0;
    },














}