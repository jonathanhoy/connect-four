const app = {};

app.columns = {
  a: [],
  b: [],
  c: [],
  d: [],
  e: [],
  f: [],
  g: [],
  h: [], // h, i, and j are extra columns used solely for checkWin function.
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
      $(`.column-${index} .cell-${cellNum}`).addClass(`${color}`);
      selectedColumn.push(`${color}`);
      app.changeTurn();





      const i = Object.values(app.columns);
      const x = $(this).data("array");
      const y = cellNum - 1;

      if (
        // DIAGONAL WINS (TOP-LEFT TO BOTTOM-RIGHT = TL-BR, BOTTOM-LEFT TO TOP-RIGHT = BL-TR) (POS */4 = LEFT-TO-RIGHT)
        (i[x][y] === i[x + 3][y - 3] && i[x][y] === i[x + 2][y - 2] && i[x][y] === i[x + 1][y - 1]) || // TL-BR POS 1/4
        (i[x][y] === i[x + 2][y - 2] && i[x][y] === i[x + 1][y - 1] && i[x][y] === i[x - 1][y + 1]) || // TL-BR POS 2/4
        (i[x][y] === i[x + 1][y - 1] && i[x][y] === i[x - 1][y + 1] && i[x][y] === i[x - 2][y + 2]) || // TL-BR POS 3/4
        (i[x][y] === i[x + 3][y + 3] && i[x][y] === i[x + 2][y + 2] && i[x][y] === i[x + 1][y + 1]) || // BL-TR POS 1/4
        (i[x][y] === i[x - 1][y + 1] && i[x][y] === i[x - 2][y + 2] && i[x][y] === i[x - 3][y + 3]) || // TL-BR POS 4/4
        (i[x][y] === i[x + 2][y + 2] && i[x][y] === i[x + 1][y + 1] && i[x][y] === i[x - 1][y - 1]) || // BL-TR POS 2/4
        (i[x][y] === i[x + 1][y + 1] && i[x][y] === i[x - 1][y - 1] && i[x][y] === i[x - 2][y - 2]) || // BL-TR POS 3/4
        (i[x][y] === i[x - 1][y - 1] && i[x][y] === i[x - 2][y - 2] && i[x][y] === i[x - 3][y - 3]) || // BL-TR POS 4/4
        // HORIZONTAL WINS
        (i[x][y] === i[x + 3][y] && i[x][y] === i[x + 2][y] && i[x][y] === i[x + 1][y]) || 
        (i[x][y] === i[x + 2][y] && i[x][y] === i[x + 1][y] && i[x][y] === i[x - 1][y]) || 
        (i[x][y] === i[x + 1][y] && i[x][y] === i[x - 1][y] && i[x][y] === i[x - 2][y]) ||
        (i[x][y] === i[x - 1][y] && i[x][y] === i[x - 2][y] && i[x][y] === i[x - 3][y]) ||
        // VERTICAL WINS
        (i[x][y] === i[x][y - 1] && i[x][y] === i[x][y - 2] && i[x][y] === i[x][y - 3])
        ) {
        console.log('WINNER');
      }
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

app.winCondition = function() {
}

app.init = function() {
  app.addPiece();
}

// DOCUMENT READY
$(function() {
  app.init();
})