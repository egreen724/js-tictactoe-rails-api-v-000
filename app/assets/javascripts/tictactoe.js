// Code your JavaScript / jQuery solution here

let turn = 1

function player(turn) {
  if (turn%2 == 0 ) {
    return 'X'
  } else {
    return 'O'
  }
}

function updateState(square) {
  if (turn <= 10) {
    $(square).HTML(player(turn))
  }
}

function setMessage(text) {
<<<<<<< HEAD
  $("#message").html(text)
=======
  $("message").innerHTML(text)
>>>>>>> 74a7cc73ae5c512624795150cd8b4a64691093de
}

function checkWinner(state, turn) {
  if (state == winning) {
    true;
    setMessage(`Player ${player(turn)} Won!`);
  } else {
      false;
    }
}

function doTurn(element) {
  turn += 1
  updateState(element);
  checkWinner(state, turn);
}
