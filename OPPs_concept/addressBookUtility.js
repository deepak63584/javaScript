
/**
 * @description: Address Book Management
 * 
 * @author : Deepak Singh
 * 
 * @since : 29/11/2019 
 */




const fs = require('fs');
const readline = require('readline-sync');

class addressBook {
    constructor() {
        var readdata = fs.readFileSync("JSON/jsonAddressBook.json", "utf-8");
        this.addbookdata = JSON.parse(readdata);
        console.log(this.addbookdata);
    }
}




var addbook = new addressBook();

module.exports = {
    addressBook,
}