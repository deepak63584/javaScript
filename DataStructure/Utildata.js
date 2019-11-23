

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
    InsertSorted(data) {
        var newNode = new Node(data);
        var current = this.head;
        var previous = this.head;
        if (this.head == null) {
            newNode.next = this.head;
            this.head = newNode;
            return true;
        }
        else {
            if (current.data >= newNode.data) {
                newNode.next = this.head;
                this.head = newNode;
                console.log(current.data);
                return true;
            }
            while (current.data < newNode.data) {
                if (current.next == null) {
                    break;
                }
                previous = current;
                current = current.next;
            }
            if (previous.data < newNode.data && newNode.data < current.data) {
                newNode.next = previous.next;
                previous.next = newNode;
                return true;
            }
            else {
                newNode.next = current.next;
                current.next = newNode;
                return true;
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
    DisplayIntList() {
        var current = this.head;
        if (head != null) {
            while (current != null) {
                console.log(current.data + "-->");
                current = current.next;
            }
            console.log("null");
            console.log();
        }
        else {
            console.log("List is empty");
        }
    }
    /*************************************DisplayStringList method************************/
    DisplayStringList() {
        var current = this.head;
        // console.log(this.head);
        var arr = " ";
        while (current != null) {
            // var arr = " ";
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
            console.log("List is empty");
            return null;
        }
    }
    /***************************************ReturnString method************************/
    ReturnNumberString() {
        var stringText = "";
        var current = head;
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
            console.log("List is empty");
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
    /***************************************Search-integer method************************/
    SearchInt(key) {
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
    DeleteKeyElement(key) {
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
    /***************************************DeleteKeyElement(string) method************************/
    DeleteIntKeyElement(key) {
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















}