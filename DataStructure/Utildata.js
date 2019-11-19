var fs = require('fs');
var rl = require('readline-sync');


module.exports = {

    //read UnOrder List File 
    readFile(fileName) {
        var content = fs.readFileSync(fileName).toString().split(" ");
        return content;
    },

    writeFile(fileName, data) {
        var content = fs.writeFileSync(fileName, data, 'utf-8');
        return content;
    },





















}