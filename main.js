//Grab all elements and cells and store them in variables 
const allCells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('.reset');
const boxBar = document.querySelector('.boxed');

// Store Variables 
let row = '';
let column = '';
let winner = false;

//Gameboard array

let gameBoard = [
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
]

//reset button 
resetButton.addEventListener("click", reset)

function reset(){
  
  gameBoard = [
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
]
  winner = false
  player1.turn = true
  player2.turn = false
  boxBar.innerText = `${player1.name}'s Turn!`
  allCells.forEach(function (clear){
    clear.style.backgroundColor = "white"
    clear.innerHTML = ""   
  })
}

//Object storing players
let player1 = {

    name: '',
    color: "yellow",
    turn: true,
}
let player2 = {

    name: '',
    color: "red",
    turn: false,
}


//function for playermove and switching turns 
allCells.forEach(function(cell){
    cell.addEventListener("click", handleClick)
});

//Functions

function updateTurn(){
  if (!player1.name || !player2.name) {
  player1.name = prompt("Player 1: Please enter your name") || "Player 1"
  player2.name = prompt("Player 2: Please enter your name") || "Player 2"
  }


    if (player1.turn){
     boxBar.innerText = `${player1.name}'s Turn!`
    } else {
    boxBar.innerText = `${player2.name}'s Turn!`
    }
  }

updateTurn();

function handleClick(event){

if (winner) return
  const [row, col] = event.target.id.split("-")
  let moveMade = false;
  
  if (player1.turn) {
    for (let i=5; i > -1; i--){
      if(gameBoard[i][col] === "") {
        
        allCells[parseInt(col) + (i*7)].style.backgroundColor = player1.color
        gameBoard[i][col] = player1.color        
        
        moveMade = true;
        break;
      }
    }
    if (moveMade) {
          checkWinner(player1.color)
          if (winner){
            boxBar.innerText = `${player1.name} WON!!!`
          } else {
          player1.turn = false
          player2.turn = true
          updateTurn();
      }
    }
  } else {
      for (let i=5; i > -1; i--){
        if(gameBoard[i][col] === "") {

          allCells[parseInt(col) + (i*7)].style.backgroundColor = player2.color
          gameBoard[i][col] = player2.color       
        
          moveMade = true;
          break;
        }
      }
      if (moveMade) {
        checkWinner(player2.color)
        if (winner){
            boxBar.innerText = `${player2.name} WON!!!`
          } else {
        player1.turn = true
        player2.turn = false
      updateTurn();
      }
    }
  }
}
  

//Winning function 
function checkWinner(player){


//winning logic
//Diagonal bottom left
for (let row=5; row >=3 ; row--){
  for (let col=0; col <=3 ; col++){
    if(gameBoard[row][col] === player && gameBoard[row-1][col+1] === player && gameBoard[row-              2]      [col+2] === player && gameBoard[row-3][col+3] === player){
          winner = true;
         return; 
        }
    }
}

//Diagonal bottom right 
for (let row=5; row >=3 ; row--){
    for (let col=6; col >=3 ; col--){
      if(gameBoard[row][col] === player && gameBoard[row-1][col-1] === player && gameBoard[row-2][col-2] ===         player && gameBoard[row-3][col-3] === player){
          winner = true;
         return; 
       }
    }
}

// Winning logic vertical      
for (let col=0; col<7; col++){
  for(let row=0; row<6; row++){
    if(gameBoard[row][col] === player && gameBoard[row-1][col] === player && gameBoard[row-2][col] === player       && gameBoard[row-3][col] === player){
          winner = true;
        return ;
        }
    }
}

//Winning logic horizontal
for (let row=0; row<6; row++){
  for (let col=0; col<4; col++){
    if(gameBoard[row][col] === player && gameBoard[row][col+1] === player && gameBoard[row][col+2] === player && gameBoard[row][col+3] === player){
       winner = true;
         return ;
        }
      }
   }
}


      }
   }
}


