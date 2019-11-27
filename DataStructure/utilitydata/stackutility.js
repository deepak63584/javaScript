/**
 * Creating node class and constructor for traversing each node 
 */

class Node {
    constructor(top, max) {
        this.top = top;
        this.max = max;

    }
}

// Creating object of the node class
var arr = new Node;

/**
 * Creating a Single LinkedList class
 */
class Stacklinkedlist {
    constructor() {
        this.top = -1;
        this.size = 0;
    }
    /**
     * if top is Empty then list is empty
     */
    isEmpty() {
        if (this.top == -1) {
            return true;
        } return false;
    }

    /**
     * size of the list
     */
    size() {
        return this.size;
    }
    /**
     * 
     * @param {*} data : add data into list with respect to the top 
     */
    pushdata(data) {
        if (this.top == (this.max - 1)) {
            return false;
        }
        else {
            arr[++this.top] = data;
            this.size++;
            return true;
        }
    }


    /**
     * deleting a element from the front 
     */
    pop() {
        if (this.top == -1) {
            return false;
        }
        else {
            arr[this.top--];
            this.size--;
            return true;
        }
    }

    //trturn the value of top
    peek() {
        return arr[this.top];
    }

    /**
     * display the each list element
     */
    display() {
        var str = "";
        for (var i = 0; i < this.size; i++) {
            str = str + arr[i] + " ";
        }
        console.log(str);
    }
}
module.exports = {
    Stacklinkedlist,


    /**
     * 
     * @param {*} range : range will define by user where to find the prime Number 
     */
    primeNumber(range) {
        var count;
        var pos = 0;
        // Creating a new array to store the prime number
        var arr = new Array();
        for (var i = 2; i <= range; i++) {
            count = 0;
            for (var j = 2; j < i; j++) {
                if ((i % j) == 0) {
                    count++;
                    break;
                }
            }
            if (count == 0) {
                arr[pos] = i++;
                pos++;
            }
        }
        return arr;
    },

    /**
     * 
     * @param {*} num : num will define by user where to find the prime Number 
     */
    isPrime(num) {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    },

    display(n) {
        var arr = [2];
        for (var i = 3; i < n; i += 2) {
            if (this.isPrime(i)) {
                arr.push(i);
            }
        }
        console.log(arr); // use arr result on your own
    },

    /**
     * 
     * @param {*} n1 :user define num which is check the another no will be anagram or not 
     * @param {*} n2 : second user define no.
     */
    isanagram(n1, n2) {
        console.log(n1, " " + n2)
        //comparing the length of each array element
        if (n1.length !== n2.length) {
            return false;
        }
        n1count = this.count(n1);
        n2count = this.count(n2);
        for (var i = 0; i < n2count.length; i++) {
            if (n1count[i] != n2count[i]) {
                return false;
            }
        }
        return true;
    },
    count(n) {
        var count1 = [10];
        var temp = n;
        while (temp != 0) {
            var r = temp % 10;
            count1[r]++;
            temp = temp / 10;
        }
        return count1;
    },







}
