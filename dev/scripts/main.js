// ARRAYS

const columnA = [];
const columnB = [];
const columnC = [];
const columnD = [];
const columnE = [];
const columnF = [];
const columnG = [];
const columnList = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const turnOrder = ['red'];

$(() => {


  // $('.column').on('click', () => {
  //   $('.column')
  // })
  
  // CLICK ON COLUMN TO ADD PIECE
  // THIS CODE WORKS!!! ⬆️ TESTING DYNAMIC EVENT LISTENER ABOVE
  $('.column-a').on('click', () => {
    if (columnA.length >= 6) {
      alert('Invalid move!');
    } else if (columnA.length < 6) {
      const color = turnOrder[turnOrder.length - 1];
      const cellNum = columnA.length + 1;
      $(`.column-a .cell${cellNum}`).addClass(`${color}`);
      columnA.push('piece');
      console.log('A', columnA);
      checkTurn();
    }
  })

  $('.column-b').on('click', () => {
    if (columnB.length >= 6) {
      alert('Invalid move!');
    } else if (columnB.length < 6) {
      const color = turnOrder[turnOrder.length - 1];
      const cellNum = columnB.length + 1;
      $(`.column-b .cell${cellNum}`).addClass(`${color}`);
      columnB.push('piece');
      console.log('B', columnB);
      checkTurn();
    }
  })

  $('.column-c').on('click', () => {
    if (columnC.length >= 6) {
      alert('Invalid move!');
    } else if (columnC.length < 6) {
      const color = turnOrder[turnOrder.length - 1];
      const cellNum = columnC.length + 1;
      $(`.column-c .cell${cellNum}`).addClass(`${color}`);
      columnC.push('piece');
      console.log('C', columnC);
      checkTurn();
    }
  })

  $('.column-d').on('click', () => {
    if (columnD.length >= 6) {
      alert('Invalid move!');
    } else if (columnD.length < 6) {
      const color = turnOrder[turnOrder.length - 1];
      const cellNum = columnD.length + 1;
      $(`.column-d .cell${cellNum}`).addClass(`${color}`);
      columnD.push('piece');
      console.log('D', columnD);
      checkTurn();
    }
  })

  $('.column-e').on('click', () => {
    if (columnE.length >= 6) {
      alert('Invalid move!');
    } else if (columnE.length < 6) {
      const color = turnOrder[turnOrder.length - 1];
      const cellNum = columnE.length + 1;
      $(`.column-e .cell${cellNum}`).addClass(`${color}`);
      columnE.push('piece');
      console.log('E', columnE);
      checkTurn();
    }
  })

  $('.column-f').on('click', () => {
    if (columnF.length >= 6) {
      alert('Invalid move!');
    } else if (columnF.length < 6) {
      const color = turnOrder[turnOrder.length - 1];
      const cellNum = columnF.length + 1;
      $(`.column-f .cell${cellNum}`).addClass(`${color}`);
      columnF.push('piece');
      console.log('F', columnF);
      checkTurn();
    }
  })

  $('.column-g').on('click', () => {
    if (columnG.length >= 6) {
      alert('Invalid move!');
    } else if (columnG.length < 6) {
      const color = turnOrder[turnOrder.length - 1];
      const cellNum = columnG.length + 1;
      $(`.column-g .cell${cellNum}`).addClass(`${color}`);
      columnG.push('piece');
      console.log('G', columnG);
      checkTurn();
    }
  })

  // CHECK WHO'S TURN AND UPDATE TURN ORDER
  function checkTurn() {
    const currentColor = turnOrder[turnOrder.length - 1];
    if (currentColor === 'red') {
      turnOrder.push('yellow');
      $('.turn-indicator').text(`It is now the Yellow Player's turn`);
    } else if (currentColor === 'yellow') {
      turnOrder.push('red');
      $('.turn-indicator').text(`It is now the Red Player's turn`);
    }
  }

  // function addPiece() {
  //   $()
  // }
  
})