/**
@description : Create a JSON file having Inventory Details for Rice, Pulses and Wheats
            with properties name, weight, price per kg.
@uses Library:  Java JSON Library , For IOS JSON Library use
            NSJSONSerialization for parsing the JSON .
@input : read in JSON File
@logic : Get JSON Object in Java or NSDictionary in iOS. Create Inventory
            Object from JSON. Calculate the value for every Inventory.
@output :Create the JSON from Inventory Object and output the JSON String

@AdditionalWork

@description : Extend the above program to Create InventoryManager to manage the
        Inventory. The Inventory Manager will use InventoryFactory to create Inventory
        Object from JSON. The InventoryManager will call each Inventory Object in its list
        to calculate the Inventory Price and then call the Inventory Object to return the
        JSON String. The main program will be with InventoryManager
@input : read in JSON File
@logic : Get JSON Object in Java or NSDictionary in iOS. Create Inventory
         Object from JSON. Calculate the value for every Inventory.
@output : Create the JSON from Inventory Object and output the JSON String.

    @author : Deepak Singh

    @since  : 28/11/2019
 */

const fs = require('fs');
const Inventory_util = require('./inventoryManagement');
const readlinelist = require('readline-sync');
//Inventory_util.Inventory.DataCue();
//Inventory_util.inventory_user.dispalydata();
