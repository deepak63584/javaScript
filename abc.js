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














var que=require('./Utility/Queue');
var rl=require('readline-sync');
var util=require("./Utility/Utility");
var queue= new que.Queue();

console.log("......Welcom To The JS Bank......");
var balance=15000;
console.log("Current Balanc:"+balance);
util.cashCounter(balance);







    //Queue Data Structure
    //Simulate Banking Cash Counter
    cashCounter(balance){
        var totalAmt=balance;
        console.log(totalAmt);
        var queue= new que.Queue();

        //take input no of user in queue
        var pepole=rl.questionInt("enter the no pepole in queue:");
        for(var i=0;i<pepole.length;i++){
            queue.inqueue(i);
        }

        //travers loop for no. of pepole in queue
        while(pepole > 0){
            var ch=0,amount=0;
            ch=rl.questionInt("\n1.Press 1 for Deposit Amount.\n2.Prss 2 for Withdraw Amount.\n");
            switch(ch){
                case 1:
                    //deposit amount
                    amount=rl.questionInt("Enter the Amount : ");
                   totalAmt= this.depositAmt(totalAmt,amount);
                   break;
                case 2:
                    //withdraw amount
                    amount=rl.questionInt("Enter the Amount :");
                   totalAmt= this.withdrawAmt(totalAmt,amount);
                   break;
            }
                pepole--;
        }
       
    },
    //deposit Amount
    depositAmt(totalAmt,amount){
        totalAmt+=amount;
        console.log("Updated Balnce:"+totalAmt);
        return totalAmt;
    },
    //withdraw Amount
    withdrawAmt(totalAmt,amount){
        if(totalAmt>amount){
            totalAmt-=amount;
            console.log("Updated Balnce:"+totalAmt);
            return totalAmt;
        }return console.log("Insufficent Balancle..\nCurrent Balance:"+totalAmt);
        
    },
    //Dequeue Data Structure
    //Palindrome-Checker
    checkPalindrome(str){
        var dqueue=new dque.Dequeue();
        var count=0;
        var Palindrome=false;
        for(var i=0;i<str.length;i++){
            dqueue.addRear(str[i]);
        }
        dqueue.qprint();
        while(!dqueue.isEmpty() && dqueue.front!==dqueue.rear){
            var str="",str2="";
            str1=dqueue.removeRear();
            str2=dqueue.removeFront();
            if(str1===str2){
                count++;
            }
        }
    },