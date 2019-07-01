// Code your JavaScript / jQuery solution here

var turn = 0

const winCombinations = [
        [0,1,2], [3,4,5], [6,7,8], [0,3,6],[1,4,7], [2,5,8], [0,4,8], [6,4,2]
    ]

$(document).ready(function() {
  attachListeners();
});

function player(turn) {
  if (turn % 2 !== 0) {
    return 'O'
  } else {
    return 'X'
  }
}

function updateState(square) {
    $(square).html(player(turn))
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

function previousGames() {

}

function checkWinner() {
  var board = {}
  var winner = false;

  winCombinations.some(function(combo) {
    if (board[combo[0]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
      setMessage(`Player ${player(turn)} Won!`);
      return winner = true;
    }
  });

  return winner;
}

function doTurn(element) {
  turn ++
  updateState(element);

  // if (checkWinner()) {
  //   saveGame();
  //   resetBoard();
  // } else if (turn === 9) {
  //   setMessage("Tie Game.");
  //   saveGame()
  //   resetBoard()
  // }
}

function attachListeners() {
  $("td").on("click", function(){
    doTurn(this);
  })

  $("button#save").on("click", function() {
    saveGame();
  })

  $("button#previous").on("click", function() {
    previousGames();
  })

  $("button#clear").on("click", function() {
    resetBoard()
  })
}
