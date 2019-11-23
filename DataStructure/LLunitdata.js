
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
            console.log("In list, No data is present ! its Empty : ")
        }
    }

    printList() {
        var current = this.head;
        var str = "";
        while (current != null) {
            str += " -> " + current.data;
            current = current.next;
        }
        console.log(str);
        return str;
    }

    addNode(data) {
        var node = new Node(data);
        var current = this.head;
        if (this.head == null) {
            this.head = node;
            this.size++;
            //console.log(data);
        }
        else {
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        } this.size++;
    }

    specificPosition(data, pos) {
        var node = new Node(data);
        var curr, prev;
        curr = this.head;
        if (pos == 0) {
            node.next = this.head;
            this.head = node;
            this.size++;
        }
        else {
            var current = this.head;
            var it = 0;
            while (it < pos) {
                it++;
                prev = current;
                current = current.next;
            }
            prev.next = node;
            node.next = current;
        } this.size++;
    }
    removeElementIndex(pos) {
        var current, prev;
        current = this.head;
        if (pos == 0) {
            this.head = current.next;
            this.size--;
        }
        else {
            var current = this.head;
            var it = 0;
            while (it < pos) {
                it++;
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        } this.size--;
    }

    removeElement(element) {
        var prev = null;
        var current = this.head;
        while (current != null) {
            if (current.data == element) {
                if (prev == null)
                    this.head = current.next;
                else
                    prev.next = current.next;
            } prev = current;
            current = current.next;
        }
    }
    searchElement(element) {
        var current = this.head;
        var pos = 0;

        while (current != null) {
            if (current.data == element) {
                //console.log("found");
                return true;
            }
            pos++;
            current = current.next;
        } return false;
    }



    sort() {
        var current = this.head;
        var index;
        if (this.head == null) {
            return;
        }
        else {
            while (current != null) {
                index = current.next;
                while (index != null) {
                    if (current.data > index.data) {
                        console.log(current.data);
                        console.log(index.data);
                        var temp = current.data;
                        current.data = index.data;
                        index.data = temp;
                    }
                    index = index.next;
                }
                current = current.next;
            }
        }
    }
}




