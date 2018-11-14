// ARRAYS
const columns = {
  a: [],
  b: [],
  c: [],
  d: [],
  e: [],
  f: [],
  g: []
}
const nextTurn = ['red'];


// DOCUMENT READY
$(function() {

  // CLICK ON COLUMN TO ADD PIECE
  function addPiece() {
    $('.column').on('click', function () {
      const index = $(this).data("column");
      const selectedColumn = columns[`${index}`]
      if (selectedColumn.length === 6) {
        alert('Invalid move!');
      } else if (selectedColumn.length < 6) {
        const color = nextTurn[nextTurn.length - 1];
        const cellNum = selectedColumn.length + 1;
        $(`.column-${index} .cell-${cellNum}`).addClass(`${color}`);
        selectedColumn.push(`${color}`);
        changeTurn();
      }
    });
  }

  // CHECK WHOSE TURN AND UPDATE TURN ORDER
  function changeTurn() {
    const currentColor = nextTurn[nextTurn.length - 1];
    if (currentColor === 'red') {
      nextTurn.push('yellow');
      $('.turn-indicator').text(`Yellow Player`);
    } else if (currentColor === 'yellow') {
      nextTurn.push('red');
      $('.turn-indicator').text(`Red Player`);
    }
  };

  addPiece();


})