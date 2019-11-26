class Queue {
    constructor() {
        this.data = [];
    }
    isEmpty() {
        if (this.data == 0) {
            return true;
        } return false;
    }
    inqueue(x) {
        return this.data.push(x);
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return true;
        } return this.data.shift();
    }
    print() {
        var str = "";
        for (var i = 0; i < this.data.length; i++) {
            str += this.data[i] + " ";
        }
        console.log(str);
    }
}
module.exports = {
    Queue
}

