const fs = require('fs');
const readlinelist = require('readline-sync');


class Inventory {
    constructor() {

        var readdata = fs.readFileSync("JSON/jsonInventory.json", "utf-8");
        this.Inventory = JSON.parse(readdata);
        //console.log(this.Inventory);

    }
    dispalydata() {
        console.log("************************INVENTORY DATA*****************************");
        console.log(" 1. Rice list \n 2. Pulse List \n 3. Weats List \n");

        var showdata = readlinelist.question(" Enter your choice \n");
        console.log("*******************************************************************");
        switch (showdata) {
            case 1:
                console.log("\t\n Rice List");
                console.log("\t\t NAME \t\tPRICE \tQuantity \tType of Rice");

                for (let i = 0; i < this.Inventory.RiceList.length; i++) {
                    console.log('\t\t ' + this.Inventory.RiceList[i].Name + '\t' + this.Inventory.RiceList[i].Price + '\t' + this.Inventory.RiceList[i].Kg + '\t\t' + this.Inventory.RiceList[i].Type)

                }
                break;
            case 2:
                console.log("\t\n Pulse List");
                console.log("\t\t NAME \t\tPRICE \tQuantity \tType of Pulse");
                for (let i = 0; i < this.Inventory.PulseList.length; i++) {
                    console.log('\t\t ' + this.Inventory.PulseList[i].Name + '\t' + this.Inventory.PulseList[i].Price + '\t' + this.Inventory.PulseList[i].Kg + '\t\t' + this.Inventory.PulseList[i].Type)

                }
                break;
            case 3:
                console.log();
                console.log("\t\n Wheats List");
                console.log("\t\t NAME \t\t\tPRICE \tQuantity  Type of Weat");
                for (let i = 0; i < this.Inventory.WheatsList.length; i++) {
                    console.log('\t\t ' + this.Inventory.WheatsList[i].Name + '\t' + this.Inventory.WheatsList[i].Price + '\t' + this.Inventory.WheatsList[i].Kg + '\t    ' + this.Inventory.WheatsList[i].Type)
                }
                break;
            default:
                console.log("Your choice is Inavlid ! Please try again :");
                break;
        }
        // console.log("\t\n Rice List");
        // console.log("\t\t NAME \t\tPRICE \tQuantity \tType of Rice");

        // for (let i = 0; i < this.Inventory.RiceList.length; i++) {
        //     console.log('\t\t ' + this.Inventory.RiceList[i].Name + '\t' + this.Inventory.RiceList[i].Price + '\t' + this.Inventory.RiceList[i].Kg + '\t\t' + this.Inventory.RiceList[i].Type)

        // }
        // console.log();
        // console.log("********************************************************************");
        // console.log("\t\n Pulse List");
        // console.log("\t\t NAME \t\tPRICE \tQuantity \tType of Pulse");
        // for (let i = 0; i < this.Inventory.PulseList.length; i++) {
        //     console.log('\t\t ' + this.Inventory.PulseList[i].Name + '\t' + this.Inventory.PulseList[i].Price + '\t' + this.Inventory.PulseList[i].Kg + '\t\t' + this.Inventory.PulseList[i].Type)

        // }
        // console.log();
        // console.log("********************************************************************");
        // console.log("\t\n Wheats List");
        // console.log("\t\t NAME \t\t\tPRICE \tQuantity  Type of Weat");
        // for (let i = 0; i < this.Inventory.WheatsList.length; i++) {
        //     console.log('\t\t ' + this.Inventory.WheatsList[i].Name + '\t' + this.Inventory.WheatsList[i].Price + '\t' + this.Inventory.WheatsList[i].Kg + '\t    ' + this.Inventory.WheatsList[i].Type)

        // }

    }







}







module.exports = {
    Inventory,
}