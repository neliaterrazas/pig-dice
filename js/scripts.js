 // function Player (name, total, roundTotal, rollTimes) {
 //   this.name: "",
 //   this.total: 0,
 //   this.roundTotal: 0,
 //   this.rollTimes: []
 // }


var roll = diceRoll();
function diceRoll() {
  return Math.floor(6*Math.random())+1;
}
console.log(diceRoll());



 $(document).ready(function(){
   var roll = diceRoll();
   $("#playerName").submit(function(event) {
     var nameOne = $("input#nameOne").val();
     var nameTwo = $("input#nameTwo").val();
     $(".nameOne").text(nameOne);
     $(".nameTwo").text(nameTwo);



     $("#nameChart").show();
     $("#playerName").hide();


     event.preventDefault();
   });

   $("#rollDice").click(function() {
     $("#output1").text(diceRoll());

   });
});



// Player1.
//
//
// console.log (Player1)
//
// Player1.roundTotal+= diceRoll();
//
// console.log(Player1);
//
// Player1.total+= Player1.roundTotal;
//
// console.log(Player1);


 //
 // if(diceRoll() === 1) {
 //   Player1.roundTotal = 0;
 // } else {
 //   Player1.roundTotal += diceRoll();
 // }
