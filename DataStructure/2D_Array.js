const util = require('./Utildata')
var rl = require('readline-sync')

function isprimeAnagram() {
    var prime = [200];
    //console.log(prime);

    prime[0] = 2;
    var index = 1, i = 3;
    while (i <= 1000) {
        var valid = false;
        //console.log(valid);
        for (var j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                //console.log('aa rha');
                valid = true;
            }
        }
        if (valid == false) {
            //console.log('nahi aa rha');
            prime.push([i]);
            //console.log(prime);
            index++;
        }
        //console.log(' i hai');

        i++;
    }
    var range = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
    //console.log(range);
    //console.log(typeof (range.Length - 1));

    console.log('Prime no between 0 to 1000 : ');

    for (var k = 0; k < range.length - 1; k++) {
        console.log(range[k] + "-" + range[k + 1]);
        for (var j = 0; j < prime.length; j++) {
            if (range[k] < prime[j] && range[k + 1] > prime[j]) {
                console.log(prime[j] + " ");
            }
        }
        console.log();
    }



    var anagram = [100];
    index = 0;
    for (var j = 0; j < prime.length; j++) {

        var temp = 0, count = prime[j];
        while (count > 0) {
            var r = count % 10; //getting remainder
            //console.log('R is' + r);
            temp = (temp * 10) + r;
            //console.log("temp is :" + temp);
            count = count / 10;
            //console.log(count);
        }
        for (var k = j + 1; k < prime.length; k++) {
            //console.log(k);
            if (prime[k] > temp + 1 || index == 100) {
                //console.log("if is");
                break;
            }
            var checkangram = util.isAnagram(prime[j], prime[k])
            if (checkangram) {
                //console.log(checkangram);

                anagram[index] = prime[j];
                index++;
                anagram[index] = prime[k];
                index++;
            }
        }
    }
    console.log("Prime anagram number:");
    for (var k = 0; k < anagram.length; k++) {
        console.log(anagram[k] + " ");
    }
    console.log();
}
isprimeAnagram();

