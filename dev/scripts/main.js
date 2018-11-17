const app = {};

app.columns = {
  a: [],
  b: [],
  c: [],
  d: [],
  e: [],
  f: [],
  g: []
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

      // app.winCondition();



      const i = Object.values(app.columns);
      const x = $(this).data("array");
      const y = cellNum - 1;

      // VERTICAL WIN CONDITION
      if (i[x].length > 1 && i[x][y] === i[x][y - 1] && i[x][y - 1] === i[x][y - 2] && i[x][y - 2] === i[x][y - 3]) {
        console.log('VERTICAL WINNER');
      }

      // HORIZONTAL WIN CONDITION
      if ((i[x][y] === i[x + 1][y] && i[x + 1][y] === i[x + 2][y] && i[x + 2][y] === i[x + 3][y]) || 
        (i[x - 1][y] === i[x][y] && i[x][y] === i[x + 1][y] && i[x + 1][y] === i[x + 2][y]) || 
        (i[x - 2][y] === i[x - 1][y] && i[x - 1][y] === i[x][y] && i[x][y] === i[x + 1][y]) ||
        (i[x - 3][y] === i[x - 2][y] && i[x - 2][y] === i[x - 1][y] && i[x - 1][y] === i[x][y])) {
        console.log('HORIZONTAL WINNER');
      }

      // DIAGONAL WIN CONDITION

      // DIAGONAL BOTTOM-LEFT TO TOP-RIGHT
      if (
        (i[x][y] === i[x + 1][y + 1] && i[x + 1][y + 1] === i[x + 2][y + 2] && i[x + 2][y + 2] === i[x + 3][y + 3]) ||
        (i[x - 1][y - 1] === i[x][y] && i[x][y] === i[x + 1][y + 1] && i[x + 1][y + 1] === i[x + 2][y + 2]) ||
        (i[x - 2][y - 2] === i[x - 1][y - 1] && i[x - 1][y - 1] === i[x][y] && i[x][y] === i[x + 1][y + 1]) ||
        (i[x - 3][y - 3] === i[x - 2][y - 2] && i[x - 2][y - 2] === i[x - 1][y - 1] && i[x - 1][y - 1] === i[x][y])) {
          console.log('DIAGONAL WINNER BOTTOM-LEFT TO TOP-RIGHT')
        }
      // DIAGONAL TOP-LEFT TO BOTTOM-RIGHT
      if (
        (i[x][y] === i[x + 1][y - 1] && i[x + 1][y - 1] === i[x + 2][y - 2] && i[x + 2][y - 2] === i[x + 3][y - 3]) ||
        (i[x - 1][y + 1] === i[x][y] && i[x][y] === i[x + 1][y - 1] && i[x + 1][y - 1] === i[x + 2][y - 2]) ||
        (i[x - 2][y + 2] === i[x - 1][y + 1] && i[x - 1][y + 1] === i[x][y] && i[x][y] === i[x + 1][y - 1]) ||
        (i[x - 3][y + 3] === i[x - 2][y + 2] && i[x - 2][y + 2] === i[x - 1][y + 1] && i[x - 1][y + 1] === i[x][y])) {
          console.log('DIAGONAL WINNER TOP-LEFT TO BOTTOM-RIGHT');
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
  // const counter = Object.values(app.columns);
  // let i = cellNum - 1;
  // const j = $(this).data("array");
  // if (counter[j].length > 1 && counter[j][i] === counter[j][i - 1] && counter[j][i - 1] === counter[j][i - 2] && counter[j][i - 2] === counter[j][i - 3]) {
  //   alert('winner');
  // }
}

app.init = function() {
  app.addPiece();
}

// DOCUMENT READY
$(function() {
  app.init();
})