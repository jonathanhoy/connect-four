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
  
  // CLICK ON COLUMN TO ADD PIECE
  $('.column-a').on('click', () => {
    if (columnA.length >= 6) {
      alert('Invalid move!');
    } else if (columnA.length < 6) {
      columnA.push('piece');
      console.log('A', columnA);
      checkTurn();
    }
  })

  $('.column-b').on('click', () => {
    if (columnB.length >= 6) {
      alert('Invalid move!');
    } else if (columnB.length < 6) {
      columnB.push('piece');
      console.log('B', columnB);
      checkTurn();
    }
  })

  $('.column-c').on('click', () => {
    if (columnC.length >= 6) {
      alert('Invalid move!');
    } else if (columnC.length < 6) {
      columnC.push('piece');
      console.log('C', columnC);
      checkTurn();
    }
  })

  $('.column-d').on('click', () => {
    if (columnD.length >= 6) {
      alert('Invalid move!');
    } else if (columnD.length < 6) {
      columnD.push('piece');
      console.log('D', columnD);
      checkTurn();
    }
  })

  $('.column-e').on('click', () => {
    if (columnE.length >= 6) {
      alert('Invalid move!');
    } else if (columnE.length < 6) {
      columnE.push('piece');
      console.log('E', columnE);
      checkTurn();
    }
  })

  $('.column-f').on('click', () => {
    if (columnF.length >= 6) {
      alert('Invalid move!');
    } else if (columnF.length < 6) {
      columnF.push('piece');
      console.log('F', columnF);
      checkTurn();
    }
  })

  function checkTurn() {
    const lastTurn = turnOrder.length - 1;
    if (turnOrder[lastTurn] === 'red') {
      turnOrder.push('yellow');
      console.log(turnOrder);
    } else if (turnOrder[lastTurn] === 'yellow') {
      turnOrder.push('red');
      console.log(turnOrder);
    }
  }

  
})