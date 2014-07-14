/*/ JavaScript Document /*/

window.onload = function() {
var currentPlayer = 'O';
var i;
var numTurns = 0;
var o = false;
var oWins = 0;
var playAgain;
var cellArray = new Array(9);
var ties = 0;
var x = false;
var xWins = 0;

alert('Welcome to the TicTaco Game');

var display = document.getElementById('cell1');
	
alert('This is before function');

//Cells declaration
var cellOne = document.getElementById("cell1");

//Click function declaration
tableclick = function() {
	this.innerHTML = tableclick.token;
	tableclick.token = tableclick.token === 'X' ? 'O' : 'X';
	this.onclick = function(){return;};
};
tableclick.token = 'X';

for(i=1; i < 10; ++i) {
	document.getElementById('cell' + i).onclick = tableclick;
}
};

// New game button function declaration
function newGame() {
	var o = prompt("Are you sure you want to start a new game?");
	if (o==='yes') {
	playAgain();
	}
	else {
		alert("BYE!!");
	}
}

// Reset button function declaration
//Clearing out all the cells
function playAgain() {
var numTurns = 0;
alert("You have now clicked the reset button!");
cell1.innerHTML= " ";
cell2.innerHTML= " ";
cell3.innerHTML= " ";
cell4.innerHTML= " ";
cell5.innerHTML= " ";
cell6.innerHTML= " ";
cell7.innerHTML= " ";
cell8.innerHTML= " ";
cell9.innerHTML= " ";
}

// Checking all the winning combinations

// Winning Combos function declaration
function winCombos(){
alert("begining winCombos"); // To test the function
numTurns ++;

if( ((cell1==="X") && (cell2==="X") && (cell3==="X")) ||
	((cell4==="X") && (cell5==="X") && (cell6==="X")) ||
	((cell7==="X") && (cell8==="X") && (cell9==="X")) ||

	((cell1==="X") && (cell4==="X") && (cell7==="X")) ||
	((cell2==="X") && (cell5==="X") && (cell8==="X")) ||
	((cell3==="X") && (cell6==="X") && (cell9==="X")) ||

	((cell1==="X") && (cell5==="X") && (cell9==="X")) ||
	((cell3==="X") && (cell5==="X") && (cell7==="X")) ||

	((cell1==="O") && (cell2==="O") && (cell3==="O")) ||
	((cell4==="O") && (cell5==="O") && (cell6==="O")) ||
	((cell7==="O") && (cell8==="O") && (cell9==="O")) ||

	((cell1==='X') && (cell4==="O") && (cell7==="O")) ||
	((cell2==='X') && (cell5==="O") && (cell8==="O")) ||
	((cell3==='X') && (cell6==="O") && (cell9==="O")) ||

	((cell1==="O") && (cell5==="O") && (cell9==="O")) ||
	((cell3==="O") && (cell5==="O") && (cell7==="O")))

{
	alert("You have won the game.Do you want to play again?");
	xWins++;
	oWins++;
	playAgain();
}

else {
	alert("You lost the game!");
	alert('Bye Bye!');
}
}
// End of the game
