// // var a = 89;
// var b = '89';

// if(a===b)
//    console.log('hello');
// else
//     console.log("error");

class Board {
   constructor() {
       // dimensions
       this.rows = 3;
       this.cols = 3;

       // boards
       this.x_player   = 0b000000000;
       this.o_player   = 0b000000000;
       this.full_board = 0b111111111;

       // win conditions
       this.win_conditions = [
           0b111000000,
           0b000111000,
           0b000000111,
           0b100100100,
           0b010010010,
           0b001001001,
           0b100010001,
           0b001010100
       ];
   }

   show() {
       let idx = 0;
       for (let y = 0; y < 3; y++) {
           let row = "|";
           for (let x = 0; x < 3; x++, idx++) {
               // compute mask
               let mask = this.maskOf(idx);

               // values for player x
               if (this.x_player & mask) {
                   row += " X |";
                   continue;
               }

               // values for player o
               if (this.o_player & mask) {
                   row += " O |";
                   continue;
               }

               // empty
               row += "   |";
           }
           console.log("|---|---|---|");
           console.log(row);
       }
       console.log("|---|---|---|");
       console.log();
   }

   checkState() {
       for (let condition of this.win_conditions) {
           // check if x wins
           if ((this.x_player & condition) == condition) {
               console.log("X Wins!");
               return;
           }

           // check if o wins
           if ((this.o_player & condition) == condition) {
               console.log("O Wins!");
               return;
           }
       }

       // check draws
       if ((this.x_player | this.o_player) == this.full_board) {
           console.log("It's a draw!");
           return;
       }

       // game still going on
       console.log("The game is still going on...");
   }

   maskOf(idx) {
       return 1 << idx;
   }

   playX(idx) {
       let mask = this.maskOf(idx);
       this.x_player |= mask;
   }

   playO(idx) {
       let mask = this.maskOf(idx);
       this.o_player |= mask;
   }

   fillX(...idxArray) {
       for (let idx of idxArray) {
           this.playX(idx);
       }
   }

   fillO(...idxArray) {
       for (let idx of idxArray) {
           this.playO(idx);
       }
   }

   reset() {
       this.x_player = 0b000000000;
       this.o_player = 0b000000000;
   }
}

let board = new Board();

// X wins
board.fillX(0, 1, 2);
board.fillO(3, 5, 8);
board.checkState();
board.show();

// O wins
board.reset();
board.fillX(1, 5, 2);
board.fillO(0, 4, 8);
board.checkState();
board.show();

// draw game
board.reset();
board.fillX(2, 3, 4, 8);
board.fillO(0, 1, 5, 6, 7);
board.checkState();
board.show();

// game still going on
board.reset();
board.fillX(1, 3, 5, 6);
board.fillO(0, 2, 4, 7);
board.checkState();
board.show();