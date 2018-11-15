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



      const counter = Object.values(app.columns);
      let i = cellNum - 1;
      const j = $(this).data("array");
      // VERTICAL WIN CONDITION
      if (counter[j].length > 1 && counter[j][i] === counter[j][i - 1] && counter[j][i - 1] === counter[j][i - 2] && counter[j][i - 2] === counter[j][i - 3]) {
        alert('VERTICAL WINNER');
      }

      // HORIZONTAL WIN CONDITION
      if (counter[j][i] === counter[j+1][i] && counter[j+1][i] === counter[j+2][i] && counter[j+2][i] === counter[j+3][i]) {
        console.log('hello');
      }
      // console.log(counter[j][i], counter[j+1][i], counter[j+2][i], counter [j+3][i]);
      // for (let i = 0; i <= 7; i++) {
      //   console.log(counter[i]);
      // }



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