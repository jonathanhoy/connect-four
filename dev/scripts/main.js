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

console.log(Object.values(app.columns));

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
      app.winCondition();
      console.log(Object.values(app.columns));
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
  const counter = Object.values(app.columns);
  if (counter[0].length > 1 && counter[0][0] === counter[0][1] && counter[0][0] === counter[0][2] && counter[0][0] === counter[0][3] && counter[0][1] === counter[0][2] && counter[0][1] === counter[0][3] && counter[0][2] === counter[0][3]) {
    alert('You win!!')
  }
}

app.winConditionVertical = function() {
  const index = $(this).data("column");
  const selectedColumn = app.columns[`${index}`];

}

app.init = function() {
  app.addPiece();
}

// DOCUMENT READY
$(function() {
  app.init();
  app.winCondition();
})