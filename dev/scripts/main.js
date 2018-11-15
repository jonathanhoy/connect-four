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
      console.log(selectedColumn);

      // app.winCondition();
      // console.log(Object.values(app.columns));



      const counter = Object.values(app.columns);
      let i = cellNum - 1;
      const j = $(this).data("array");
      if (counter[j].length > 1 && counter[j][i] === counter[j][i - 1] && counter[j][i - 1] === counter[j][i - 2] && counter[j][i - 2] === counter[j][i - 3]) {
        console.log('winner');
        alert('winner');
      }
      // if (counter[1][i] === counter[1][i - 1] && counter[1][i - 1] === counter[1][i - 2] && counter[1][i - 2] === counter[1][i - 3]) {
      //   alert('winner');
      // }
      // if (counter[2][i] === counter[2][i - 1] && counter[2][i - 1] === counter[2][i - 2] && counter[2][i - 2] === counter[2][i - 3]) {
      //   alert('winner');
      // }
      // if (counter[3][i] === counter[3][i - 1] && counter[3][i - 1] === counter[3][i - 2] && counter[3][i - 2] === counter[3][i - 3]) {
      //   alert('winner');
      // }
      // if (counter[4][i] === counter[4][i - 1] && counter[4][i - 1] === counter[4][i - 2] && counter[4][i - 2] === counter[4][i - 3]) {
      //   alert('winner');
      // }
      // if (counter[5][i] === counter[5][i - 1] && counter[5][i - 1] === counter[5][i - 2] && counter[5][i - 2] === counter[5][i - 3]) {
      //   alert('winner');
      // }
      // if (counter[6][i] === counter[6][i - 1] && counter[6][i - 1] === counter[6][i - 2] && counter[6][i - 2] === counter[6][i - 3]) {
      //   alert('winner');
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

// app.winCondition = function() {
//   const counter = Object.values(app.columns);
//   for (let i = 0; i <= 7; i++) {
//     if (counter[i][i] === counter[i][i+1] && counter[i][i+1] === counter[i][i+2] && counter[i][i+2] === counter[i][i+3]) {
//       alert('You win!!')
//     }
//   }
// }

app.init = function() {
  app.addPiece();
}

// DOCUMENT READY
$(function() {
  app.init();
})