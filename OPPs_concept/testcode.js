const fs = require('fs');
const utility = require('../Utility/oopsUtility')

class Clinique {
    constructor() {
        let content = utility.readFromFile('../JSON/cliniqueData.json')  // reading json data from file
        this.details = JSON.parse(content);     // storing json object
    }
}
