const readline = require('readline-sync')

function tictacteo() {
    let player = 0;
    let Board = new Array[3][3];
    let isEmpty = true;

    Board()
    {
        console.log(" Tic Tac Teo game \n Computer is x \n player is 0 : \n");
        for (let i = 0; i < Board[i].lenght; i++) {
            for (let j = 0; j < Board[j].length; j++) {
                Board[i][j] = -10;

            }
        }
        console.log("Board is this : \n ");
        displayBoard();
    }
    displayBoard()
    {
        var count = 0;
        for (var i = 0; i < Board.lenght; i++) {
            console.log("------------------------");
            console.log("//");
            for (var j = 0; j < array[i].length; j++) {
                if (Board[i][j] === 0) {
                    count++;
                    console.log("0/ ");
                }
                elseif(Board[i][j] === 1) {
                    count++;
                    console.log("X/ ");
                }
                else {
                    console.log("  /");
                }
                console.log();
            }
            if (count === 9) {
                isEmpty = false;
            }
            console.log("----------------------------");
        }
        putval()
        {
            if (player % 2 === 1) {
                var i = (Math.random() * 10) % 3;
            }
        }

    }





}