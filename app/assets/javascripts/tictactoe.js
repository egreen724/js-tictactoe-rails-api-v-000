// Code your JavaScript / jQuery solution here

let turn = 0

const winCombinations = [
        [0,1,2], [3,4,5], [6,7,8], [0,3,6],[1,4,7], [2,5,8], [0,4,8], [6,4,2]
    ]

function player(turn) {
  turn % 2 ? 'O' : 'X'
}

function updateState(square) {
  if (turn <= 10) {
    $(square).HTML(player(turn))
  }
}

function setMessage(text) {
  $("#message").html(text)
}

function resetBoard() {
  $('td').empty();
  turn = 0;
  currentGame = 0;
}

function saveGame(){
  // write this
}

function checkWinner() {
  var board = {}
  var winner = false;

  winCombinations.some(function(combo) {
    if (board[combo[0]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
      setMessage(`Player ${board[combo[0]]} Won!`);
      return winner = true;
    }
  });

  return winner;

  // if (state == winning) {
  //   true;
  //   setMessage(`Player ${player(turn)} Won!`);
  // } else {
  //     false;
  //   }
}

function doTurn(element) {
  turn ++
  updateState(element);

  if (checkWinner()) {
    saveGame()
    resetBoard()
  } else if (turn === 9) {
    setMessage("Tie Game.");
    saveGame()
    resetBoard()
  }
}
