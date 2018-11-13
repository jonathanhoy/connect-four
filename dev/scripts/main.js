// ARRAYS

const columnA = [];
const columnB = [];
const columnC = [];
const columnD = [];
const columnE = [];
const columnF = [];
const columnG = [];
const columnList = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

$(() => {
  
  // CLICK ON COLUMN TO ADD MARKER
  $('.column-a').on('click', () => {
    if (columnA.length >= 6) {
      console.log('this column is full')
    } else if (columnA.length < 6) {
      columnA.push('marker');
      console.log(columnA);
    }
  })
})