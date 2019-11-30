const fs = require('fs');
const readline = require('readline-sync');

class inventoryManagement {
    constructor() {
        var readdata = fs.readFileSync("JSON/jsonInventory.json", "utf-8");
        this.inventorymanagement = JSON.parse(readdata);
        console.log(this.inventorymanagement);
    }
    addData() {
        console.log("****************************InventoryManagement*********************************");
        console.log(" 1. Rice list \n 2. Pulse List \n 3. Weats List \n");
        var showdata = readline.questionInt(" Enter your choice ! Do you want to insert item : \n");
        if (isNaN(showdata)) throw "enter valid choice.";
        switch (showdata) {
            case 1:
                this.addRice();
                break;
            case 2:
                this.addPulse();
                break;
            case 3:
                this.addWeats();
                break;
            default:
                console.log("Your choice is Inavlid ! Please try again :");
                break;
        }
        fs.writeFileSync("JSON/jsonInventory", this.readdata, 'utf-8');
    }
    removeData() {
        console.log("****************************InventoryManagement*********************************");
        console.log(" 1. Rice list \n 2. Pulse List \n 3. Weats List \n");
        var showdata = readline.questionInt(" Enter your choice ! Do you want to remove item : \n");
        if (isNaN(showdata)) throw "enter valid choice.";
        switch (showdata) {
            case 1:
                this.removeRice();
                break;
            case 2:
                this.removePulse();
                break;
            case 3:
                this.removeWeats();
                break;
            default:
                console.log("Your choice is Inavlid ! Please try again :");
                break;
        }
        fs.writeFileSync("JSON/jsonInventory", this.readdata, 'utf-8');
    }
    printDisplaydata() {
        console.log(this.readdata);
    }

    addRice() {
        var name = readline.question('Enter the Name :');
        var price = readline.question('Enter the Price : ');
        var weight = readline.question('Enter the Weight :');
        var type = readline.question('Enter the type of rice');
        this.readdata.RiceList.push({
            Name: name,
            Price: price,
            Kg: weight,
            Type: type
        })
    }
    addPulse() {
        var name = readline.question('Enter the NamPulseListe :');
        var price = readline.question('Enter the Price : ');
        var weight = readline.question('Enter the Weight :');
        var type = readline.question('Enter the type of rice');
        this.readdata.PulseList.push({
            Name: name,
            Price: price,
            Kg: weight,
            Type: type
        })
    }
    addWeats() {
        var name = readline.question('Enter the Name :');
        var price = readline.question('Enter the Price : ');
        var weight = readline.question('Enter the Weight :');
        var type = readline.question('Enter the type of rice');
        var arr = []
        arr.map((item, index) = {

        })
        this.readdata.WheatsList.push({

            Name: name,
            Price: price,
            Kg: weight,
            Type: type
        })
    }





}




var inventManagement = new inventoryManagement();
inventManagement.addData();
module.exports = {
    inventoryManagement,
}