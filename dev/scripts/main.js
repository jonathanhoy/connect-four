// ARRAYS

const columnA = ['test'];
const b = [];
const c = [];
const d = [];
const e = [];
const f = [];
const g = [];
const nextTurn = ['red'];

const columns = {
  a: [],
  b: [],
  c: [],
  d: [],
  e: [],
  f: [],
  g: []
}



$(function() {


  $('.column').on('click', function() {
    const index = $(this).data("column");
    columns[`${index}`].push('test2');
    console.log(columns);

  })

  // $('.column').on('click', function() {
  //   if (columnA.length >= 6) {
  //     alert('Invalid move!');
  //   } else if (columnA.length < 6) {
  //     const color = nextTurn[nextTurn.length - 1];
  //     const cellNum = columnA.length + 1;
  //     $(`.column-a .cell-${cellNum}`).addClass(`${color}`);
  //     columnA.push(`${color}`);
  //     console.log('A', columnA);
  //     changeTurn();
  //   }
  // })
  
  // CLICK ON COLUMN TO ADD PIECE
  // THIS CODE WORKS!!! ⬆️ TESTING DYNAMIC EVENT LISTENER ABOVE
  // $('.column-a').on('click', function () {
  //   if (columnA.length >= 6) {
  //     alert('Invalid move!');
  //   } else if (columnA.length < 6) {
  //     const color = nextTurn[nextTurn.length - 1];
  //     const cellNum = columnA.length + 1;
  //     $(`.column-a .cell-${cellNum}`).addClass(`${color}`);
  //     columnA.push(`${color}`);
  //     console.log('A', columnA);
  //     changeTurn();
  //   }
  // })

  // $('.column-b').on('click', function() {
  //   if (columnB.length >= 6) {
  //     alert('Invalid move!');
  //   } else if (columnB.length < 6) {
  //     const color = nextTurn[nextTurn.length - 1];
  //     const cellNum = columnB.length + 1;
  //     $(`.column-b .cell-${cellNum}`).addClass(`${color}`);
  //     columnB.push(`${color}`);
  //     console.log('B', columnB);
  //     changeTurn();
  //   }
  // })

  // $('.column-c').on('click', function() {
  //   if (columnC.length >= 6) {
  //     alert('Invalid move!');
  //   } else if (columnC.length < 6) {
  //     const color = nextTurn[nextTurn.length - 1];
  //     const cellNum = columnC.length + 1;
  //     $(`.column-c .cell-${cellNum}`).addClass(`${color}`);
  //     columnC.push(`${color}`);
  //     console.log('C', columnC);
  //     changeTurn();
  //   }
  // })

  // $('.column-d').on('click', function() {
  //   if (columnD.length >= 6) {
  //     alert('Invalid move!');
  //   } else if (columnD.length < 6) {
  //     const color = nextTurn[nextTurn.length - 1];
  //     const cellNum = columnD.length + 1;
  //     $(`.column-d .cell-${cellNum}`).addClass(`${color}`);
  //     columnD.push(`${color}`);
  //     console.log('D', columnD);
  //     changeTurn();
  //   }
  // })

  // $('.column-e').on('click', function() {
  //   if (columnE.length >= 6) {
  //     alert('Invalid move!');
  //   } else if (columnE.length < 6) {
  //     const color = nextTurn[nextTurn.length - 1];
  //     const cellNum = columnE.length + 1;
  //     $(`.column-e .cell-${cellNum}`).addClass(`${color}`);
  //     columnE.push(`${color}`);
  //     console.log('E', columnE);
  //     changeTurn();
  //   }
  // })

  // $('.column-f').on('click', function() {
  //   if (columnF.length >= 6) {
  //     alert('Invalid move!');
  //   } else if (columnF.length < 6) {
  //     const color = nextTurn[nextTurn.length - 1];
  //     const cellNum = columnF.length + 1;
  //     $(`.column-f .cell-${cellNum}`).addClass(`${color}`);
  //     columnF.push(`${color}`);
  //     console.log('F', columnF);
  //     changeTurn();
  //   }
  // })

  // $('.column-g').on('click', function() {
  //   if (columnG.length >= 6) {
  //     alert('Invalid move!');
  //   } else if (columnG.length < 6) {
  //     const color = nextTurn[nextTurn.length - 1];
  //     const cellNum = columnG.length + 1;
  //     $(`.column-g .cell-${cellNum}`).addClass(`${color}`);
  //     columnG.push(`${color}`);
  //     console.log('G', columnG);
  //     changeTurn();
  //   }
  // })

  // // CHECK WHOSE TURN AND UPDATE TURN ORDER
  // function changeTurn() {
  //   const currentColor = nextTurn[nextTurn.length - 1];
  //   if (currentColor === 'red') {
  //     nextTurn.push('yellow');
  //     $('.turn-indicator').text(`Yellow Player`);
  //   } else if (currentColor === 'yellow') {
  //     nextTurn.push('red');
  //     $('.turn-indicator').text(`Red Player`);
  //   }
  // }

  // function addPiece() {
  //   $()
  // }
  
})