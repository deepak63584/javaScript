class Node {
    constructor(top, max) {
        this.top = top;
        this.max = max;

    }
}
var arr = new Node;
class Stacklinkedlist {
    constructor() {
        this.top = -1;
        this.size = 0;
    }
    isEmpty() {
        if (this.top == -1) {
            return true;
        } return false;
    }
    size() {
        return this.size;
    }
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
    peek() {
        return arr[this.top];
    }
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

    primeNumber(range) {
        var count;
        var pos = 0;
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
    //**
    //* 
    //* @param {*} str1 :
    //* @param {*} str2 :
    //*/
    isanagram(n1, n2) {
        console.log(n1, " " + n2)
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
