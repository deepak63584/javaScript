/**
 * Creating node class and constructor for traversing each node 
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next;
    }
}

/**
 * Creating a queue class
 */
class Queue_LinkList {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
        //console.log(size);

    }
    /**
     * If front and rear both are empty then its empty
     */
    isempty() {
        if (this.rear == null) {
            return true;
        }
        // else
        //     console.log('data empty');
        return false;
    }

    // size of the queue
    size() {
        return this.size;
    }

    /**
  * 
  * @param {*} data : add a node element with respect of front side
  */
    enqueue(data) {

        var node = new Node(data);
        if (this.rear == null) {
            this.front = node;
            this.rear = node;
            this.size++;
            return
        }
        this.rear.next = node;
        this.rear = node;
        this.size++;
    }


    /**
     * deleting a element from the front 
     */
    dequeue() {
        if (this.front == null) {
            console.log("List is Empty");
            return null;
        }
        var temp = this.front;
        this.front = this.front.next;

        if (this.front == null)
            this.rear = null;
        return temp.data;
    }

    //printing each element inside the queue
    display() {

        var arr = "";
        console.log(arr)
        while (this.rear != null) {
            arr += this.dequeue() + " ";
        }
        console.log(arr);
        return arr;
    }

    /**
     * sort the queue in accending order
     */
    sort() {
        var arr = "";
        var current = this.front;
        while (current != this.rear) {
            if (current.data > current.next.data) {
                var temp = current.data;
                current = current.next.data;
                current.next = temp;
                arr += current.data;
            }
            current = current.next;
        }
        console.log(arr);
    }
}


module.exports = {
    Queue_LinkList,
}