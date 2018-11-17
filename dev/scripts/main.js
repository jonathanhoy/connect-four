const app = {};

app.columns = {
  a: [],
  b: [],
  c: [],
  d: [],
  e: [],
  f: [],
  g: [],
  h: [], // h, i, and j are extra columns used solely for checkWin functions.
  i: [],
  j: []
}
app.nextTurn = ['red'];

// CLICK ON COLUMN TO ADD PIECE
app.addPiece = function() {
  $('.column').on('click', function () {
    const index = $(this).data("column");
    const selectedColumn = app.columns[`${index}`];
    if (selectedColumn.length === 6) {
      alert('Invalid move!');
    } else if (selectedColumn.length < 6) {
      const color = app.nextTurn[app.nextTurn.length - 1];
      const cellNum = selectedColumn.length + 1;
      const i = Object.values(app.columns);
      const x = $(this).data("array");
      const y = cellNum - 1;
      $(`.column-${index} .cell-${cellNum}`).append(`<div class="piece ${color} animated fadeInDownBig faster"></div>`);
      selectedColumn.push(`${color}`);
      app.changeTurn();
      app.checkForWin(i, x, y, color);
    }
  });
}

// CHECK WHOSE TURN AND UPDATE TURN ORDER
app.changeTurn = function() {
  const currentColor = app.nextTurn[app.nextTurn.length - 1];
  if (currentColor === 'red') {
    app.nextTurn.push('yellow');
    $('.turn-indicator').text(`Yellow`);
  } else if (currentColor === 'yellow') {
    app.nextTurn.push('red');
    $('.turn-indicator').text(`Red`);
  }
};

app.checkForWin = function(i, x, y, color) {
  app.checkForVerticalWin(i, x, y, color);
  app.checkForHorizontalWin(i, x, y, color);
  app.checkForDiagonalWin(i, x, y, color);
  app.checkForOtherWins(i, x, y, color);
}

app.checkForVerticalWin = function(i, x, y, color) {
  if (i[x][y] === i[x][y - 1] && i[x][y] === i[x][y - 2] && i[x][y] === i[x][y - 3]) {
    app.alertWin(color);
  }
}

app.checkForDiagonalWin = function(i, x, y, color) {
  if (
    // DIAGONAL WINS (TOP-LEFT TO BOTTOM-RIGHT = TL-BR, BOTTOM-LEFT TO TOP-RIGHT = BL-TR) (POS */4 = LEFT-TO-RIGHT)
    (i[x][y] === i[x + 3][y - 3] && i[x][y] === i[x + 2][y - 2] && i[x][y] === i[x + 1][y - 1]) || // TL-BR POS 1/4
    (i[x][y] === i[x + 2][y - 2] && i[x][y] === i[x + 1][y - 1] && i[x][y] === i[x - 1][y + 1]) || // TL-BR POS 2/4
    (i[x][y] === i[x + 1][y - 1] && i[x][y] === i[x - 1][y + 1] && i[x][y] === i[x - 2][y + 2]) || // TL-BR POS 3/4
    (i[x][y] === i[x + 3][y + 3] && i[x][y] === i[x + 2][y + 2] && i[x][y] === i[x + 1][y + 1]) || // BL-TR POS 1/4
    (i[x][y] === i[x + 2][y + 2] && i[x][y] === i[x + 1][y + 1] && i[x][y] === i[x - 1][y - 1]) || // BL-TR POS 2/4
    (i[x][y] === i[x + 1][y + 1] && i[x][y] === i[x - 1][y - 1] && i[x][y] === i[x - 2][y - 2])    // BL-TR POS 3/4
    ) {
    app.alertWin(color);
  }
}

app.checkForHorizontalWin = function(i, x, y, color) {
  if (
    (i[x][y] === i[x + 3][y] && i[x][y] === i[x + 2][y] && i[x][y] === i[x + 1][y]) ||
    (i[x][y] === i[x + 2][y] && i[x][y] === i[x + 1][y] && i[x][y] === i[x - 1][y]) ||
    (i[x][y] === i[x + 1][y] && i[x][y] === i[x - 1][y] && i[x][y] === i[x - 2][y]) 
    ) {
      app.alertWin(color);
    }
  }

app.checkForOtherWins = function(i, x, y, color) {
  if (
    (i[x][y] === i[x - 1][y + 1] && i[x][y] === i[x - 2][y + 2] && i[x][y] === i[x - 3][y + 3]) || // TL-BR POS 4/4
    (i[x][y] === i[x - 1][y - 1] && i[x][y] === i[x - 2][y - 2] && i[x][y] === i[x - 3][y - 3]) || // BL-TR POS 4/4
    (i[x][y] === i[x - 1][y] && i[x][y] === i[x - 2][y] && i[x][y] === i[x - 3][y]) // HORIZONTAL WIN WITH NEGATIVE X-VALUE
    ) {
    app.alertWin(color);
  }
}

app.alertWin = function(color) {
  color = color.charAt(0).toUpperCase() + color.slice(1);
  swal({
    title: `Congratulations ${color} player!`,
    text: `Winner winner chicken dinner 🍗🍗🍗`
  });
}
  

app.init = function() {
  app.addPiece();
}

// DOCUMENT READY
$(function() {
  app.init();
})