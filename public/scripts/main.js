(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

// ARRAYS

var columnA = ['test'];
var b = [];
var c = [];
var d = [];
var e = [];
var f = [];
var g = [];
var nextTurn = ['red'];

var columns = {
  a: [],
  b: [],
  c: [],
  d: [],
  e: [],
  f: [],
  g: []
};

$(function () {

  $('.column').on('click', function () {
    var index = $(this).data("column");
    columns['' + index].push('test2');
    console.log(columns);
  });

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
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFFQSxJQUFNLFVBQVUsQ0FBQyxNQUFELENBQWhCO0FBQ0EsSUFBTSxJQUFJLEVBQVY7QUFDQSxJQUFNLElBQUksRUFBVjtBQUNBLElBQU0sSUFBSSxFQUFWO0FBQ0EsSUFBTSxJQUFJLEVBQVY7QUFDQSxJQUFNLElBQUksRUFBVjtBQUNBLElBQU0sSUFBSSxFQUFWO0FBQ0EsSUFBTSxXQUFXLENBQUMsS0FBRCxDQUFqQjs7QUFFQSxJQUFNLFVBQVU7QUFDZCxLQUFHLEVBRFc7QUFFZCxLQUFHLEVBRlc7QUFHZCxLQUFHLEVBSFc7QUFJZCxLQUFHLEVBSlc7QUFLZCxLQUFHLEVBTFc7QUFNZCxLQUFHLEVBTlc7QUFPZCxLQUFHO0FBUFcsQ0FBaEI7O0FBWUEsRUFBRSxZQUFXOztBQUdYLElBQUUsU0FBRixFQUFhLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBVztBQUNsQyxRQUFNLFFBQVEsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFFBQWIsQ0FBZDtBQUNBLGlCQUFXLEtBQVgsRUFBb0IsSUFBcEIsQ0FBeUIsT0FBekI7QUFDQSxZQUFRLEdBQVIsQ0FBWSxPQUFaO0FBRUQsR0FMRDs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVELENBcElEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gQVJSQVlTXG5cbmNvbnN0IGNvbHVtbkEgPSBbJ3Rlc3QnXTtcbmNvbnN0IGIgPSBbXTtcbmNvbnN0IGMgPSBbXTtcbmNvbnN0IGQgPSBbXTtcbmNvbnN0IGUgPSBbXTtcbmNvbnN0IGYgPSBbXTtcbmNvbnN0IGcgPSBbXTtcbmNvbnN0IG5leHRUdXJuID0gWydyZWQnXTtcblxuY29uc3QgY29sdW1ucyA9IHtcbiAgYTogW10sXG4gIGI6IFtdLFxuICBjOiBbXSxcbiAgZDogW10sXG4gIGU6IFtdLFxuICBmOiBbXSxcbiAgZzogW11cbn1cblxuXG5cbiQoZnVuY3Rpb24oKSB7XG5cblxuICAkKCcuY29sdW1uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaW5kZXggPSAkKHRoaXMpLmRhdGEoXCJjb2x1bW5cIik7XG4gICAgY29sdW1uc1tgJHtpbmRleH1gXS5wdXNoKCd0ZXN0MicpO1xuICAgIGNvbnNvbGUubG9nKGNvbHVtbnMpO1xuXG4gIH0pXG5cbiAgLy8gJCgnLmNvbHVtbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAvLyAgIGlmIChjb2x1bW5BLmxlbmd0aCA+PSA2KSB7XG4gIC8vICAgICBhbGVydCgnSW52YWxpZCBtb3ZlIScpO1xuICAvLyAgIH0gZWxzZSBpZiAoY29sdW1uQS5sZW5ndGggPCA2KSB7XG4gIC8vICAgICBjb25zdCBjb2xvciA9IG5leHRUdXJuW25leHRUdXJuLmxlbmd0aCAtIDFdO1xuICAvLyAgICAgY29uc3QgY2VsbE51bSA9IGNvbHVtbkEubGVuZ3RoICsgMTtcbiAgLy8gICAgICQoYC5jb2x1bW4tYSAuY2VsbC0ke2NlbGxOdW19YCkuYWRkQ2xhc3MoYCR7Y29sb3J9YCk7XG4gIC8vICAgICBjb2x1bW5BLnB1c2goYCR7Y29sb3J9YCk7XG4gIC8vICAgICBjb25zb2xlLmxvZygnQScsIGNvbHVtbkEpO1xuICAvLyAgICAgY2hhbmdlVHVybigpO1xuICAvLyAgIH1cbiAgLy8gfSlcbiAgXG4gIC8vIENMSUNLIE9OIENPTFVNTiBUTyBBREQgUElFQ0VcbiAgLy8gVEhJUyBDT0RFIFdPUktTISEhIOKshu+4jyBURVNUSU5HIERZTkFNSUMgRVZFTlQgTElTVEVORVIgQUJPVkVcbiAgLy8gJCgnLmNvbHVtbi1hJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAvLyAgIGlmIChjb2x1bW5BLmxlbmd0aCA+PSA2KSB7XG4gIC8vICAgICBhbGVydCgnSW52YWxpZCBtb3ZlIScpO1xuICAvLyAgIH0gZWxzZSBpZiAoY29sdW1uQS5sZW5ndGggPCA2KSB7XG4gIC8vICAgICBjb25zdCBjb2xvciA9IG5leHRUdXJuW25leHRUdXJuLmxlbmd0aCAtIDFdO1xuICAvLyAgICAgY29uc3QgY2VsbE51bSA9IGNvbHVtbkEubGVuZ3RoICsgMTtcbiAgLy8gICAgICQoYC5jb2x1bW4tYSAuY2VsbC0ke2NlbGxOdW19YCkuYWRkQ2xhc3MoYCR7Y29sb3J9YCk7XG4gIC8vICAgICBjb2x1bW5BLnB1c2goYCR7Y29sb3J9YCk7XG4gIC8vICAgICBjb25zb2xlLmxvZygnQScsIGNvbHVtbkEpO1xuICAvLyAgICAgY2hhbmdlVHVybigpO1xuICAvLyAgIH1cbiAgLy8gfSlcblxuICAvLyAkKCcuY29sdW1uLWInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgLy8gICBpZiAoY29sdW1uQi5sZW5ndGggPj0gNikge1xuICAvLyAgICAgYWxlcnQoJ0ludmFsaWQgbW92ZSEnKTtcbiAgLy8gICB9IGVsc2UgaWYgKGNvbHVtbkIubGVuZ3RoIDwgNikge1xuICAvLyAgICAgY29uc3QgY29sb3IgPSBuZXh0VHVybltuZXh0VHVybi5sZW5ndGggLSAxXTtcbiAgLy8gICAgIGNvbnN0IGNlbGxOdW0gPSBjb2x1bW5CLmxlbmd0aCArIDE7XG4gIC8vICAgICAkKGAuY29sdW1uLWIgLmNlbGwtJHtjZWxsTnVtfWApLmFkZENsYXNzKGAke2NvbG9yfWApO1xuICAvLyAgICAgY29sdW1uQi5wdXNoKGAke2NvbG9yfWApO1xuICAvLyAgICAgY29uc29sZS5sb2coJ0InLCBjb2x1bW5CKTtcbiAgLy8gICAgIGNoYW5nZVR1cm4oKTtcbiAgLy8gICB9XG4gIC8vIH0pXG5cbiAgLy8gJCgnLmNvbHVtbi1jJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIC8vICAgaWYgKGNvbHVtbkMubGVuZ3RoID49IDYpIHtcbiAgLy8gICAgIGFsZXJ0KCdJbnZhbGlkIG1vdmUhJyk7XG4gIC8vICAgfSBlbHNlIGlmIChjb2x1bW5DLmxlbmd0aCA8IDYpIHtcbiAgLy8gICAgIGNvbnN0IGNvbG9yID0gbmV4dFR1cm5bbmV4dFR1cm4ubGVuZ3RoIC0gMV07XG4gIC8vICAgICBjb25zdCBjZWxsTnVtID0gY29sdW1uQy5sZW5ndGggKyAxO1xuICAvLyAgICAgJChgLmNvbHVtbi1jIC5jZWxsLSR7Y2VsbE51bX1gKS5hZGRDbGFzcyhgJHtjb2xvcn1gKTtcbiAgLy8gICAgIGNvbHVtbkMucHVzaChgJHtjb2xvcn1gKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdDJywgY29sdW1uQyk7XG4gIC8vICAgICBjaGFuZ2VUdXJuKCk7XG4gIC8vICAgfVxuICAvLyB9KVxuXG4gIC8vICQoJy5jb2x1bW4tZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAvLyAgIGlmIChjb2x1bW5ELmxlbmd0aCA+PSA2KSB7XG4gIC8vICAgICBhbGVydCgnSW52YWxpZCBtb3ZlIScpO1xuICAvLyAgIH0gZWxzZSBpZiAoY29sdW1uRC5sZW5ndGggPCA2KSB7XG4gIC8vICAgICBjb25zdCBjb2xvciA9IG5leHRUdXJuW25leHRUdXJuLmxlbmd0aCAtIDFdO1xuICAvLyAgICAgY29uc3QgY2VsbE51bSA9IGNvbHVtbkQubGVuZ3RoICsgMTtcbiAgLy8gICAgICQoYC5jb2x1bW4tZCAuY2VsbC0ke2NlbGxOdW19YCkuYWRkQ2xhc3MoYCR7Y29sb3J9YCk7XG4gIC8vICAgICBjb2x1bW5ELnB1c2goYCR7Y29sb3J9YCk7XG4gIC8vICAgICBjb25zb2xlLmxvZygnRCcsIGNvbHVtbkQpO1xuICAvLyAgICAgY2hhbmdlVHVybigpO1xuICAvLyAgIH1cbiAgLy8gfSlcblxuICAvLyAkKCcuY29sdW1uLWUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgLy8gICBpZiAoY29sdW1uRS5sZW5ndGggPj0gNikge1xuICAvLyAgICAgYWxlcnQoJ0ludmFsaWQgbW92ZSEnKTtcbiAgLy8gICB9IGVsc2UgaWYgKGNvbHVtbkUubGVuZ3RoIDwgNikge1xuICAvLyAgICAgY29uc3QgY29sb3IgPSBuZXh0VHVybltuZXh0VHVybi5sZW5ndGggLSAxXTtcbiAgLy8gICAgIGNvbnN0IGNlbGxOdW0gPSBjb2x1bW5FLmxlbmd0aCArIDE7XG4gIC8vICAgICAkKGAuY29sdW1uLWUgLmNlbGwtJHtjZWxsTnVtfWApLmFkZENsYXNzKGAke2NvbG9yfWApO1xuICAvLyAgICAgY29sdW1uRS5wdXNoKGAke2NvbG9yfWApO1xuICAvLyAgICAgY29uc29sZS5sb2coJ0UnLCBjb2x1bW5FKTtcbiAgLy8gICAgIGNoYW5nZVR1cm4oKTtcbiAgLy8gICB9XG4gIC8vIH0pXG5cbiAgLy8gJCgnLmNvbHVtbi1mJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIC8vICAgaWYgKGNvbHVtbkYubGVuZ3RoID49IDYpIHtcbiAgLy8gICAgIGFsZXJ0KCdJbnZhbGlkIG1vdmUhJyk7XG4gIC8vICAgfSBlbHNlIGlmIChjb2x1bW5GLmxlbmd0aCA8IDYpIHtcbiAgLy8gICAgIGNvbnN0IGNvbG9yID0gbmV4dFR1cm5bbmV4dFR1cm4ubGVuZ3RoIC0gMV07XG4gIC8vICAgICBjb25zdCBjZWxsTnVtID0gY29sdW1uRi5sZW5ndGggKyAxO1xuICAvLyAgICAgJChgLmNvbHVtbi1mIC5jZWxsLSR7Y2VsbE51bX1gKS5hZGRDbGFzcyhgJHtjb2xvcn1gKTtcbiAgLy8gICAgIGNvbHVtbkYucHVzaChgJHtjb2xvcn1gKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdGJywgY29sdW1uRik7XG4gIC8vICAgICBjaGFuZ2VUdXJuKCk7XG4gIC8vICAgfVxuICAvLyB9KVxuXG4gIC8vICQoJy5jb2x1bW4tZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAvLyAgIGlmIChjb2x1bW5HLmxlbmd0aCA+PSA2KSB7XG4gIC8vICAgICBhbGVydCgnSW52YWxpZCBtb3ZlIScpO1xuICAvLyAgIH0gZWxzZSBpZiAoY29sdW1uRy5sZW5ndGggPCA2KSB7XG4gIC8vICAgICBjb25zdCBjb2xvciA9IG5leHRUdXJuW25leHRUdXJuLmxlbmd0aCAtIDFdO1xuICAvLyAgICAgY29uc3QgY2VsbE51bSA9IGNvbHVtbkcubGVuZ3RoICsgMTtcbiAgLy8gICAgICQoYC5jb2x1bW4tZyAuY2VsbC0ke2NlbGxOdW19YCkuYWRkQ2xhc3MoYCR7Y29sb3J9YCk7XG4gIC8vICAgICBjb2x1bW5HLnB1c2goYCR7Y29sb3J9YCk7XG4gIC8vICAgICBjb25zb2xlLmxvZygnRycsIGNvbHVtbkcpO1xuICAvLyAgICAgY2hhbmdlVHVybigpO1xuICAvLyAgIH1cbiAgLy8gfSlcblxuICAvLyAvLyBDSEVDSyBXSE9TRSBUVVJOIEFORCBVUERBVEUgVFVSTiBPUkRFUlxuICAvLyBmdW5jdGlvbiBjaGFuZ2VUdXJuKCkge1xuICAvLyAgIGNvbnN0IGN1cnJlbnRDb2xvciA9IG5leHRUdXJuW25leHRUdXJuLmxlbmd0aCAtIDFdO1xuICAvLyAgIGlmIChjdXJyZW50Q29sb3IgPT09ICdyZWQnKSB7XG4gIC8vICAgICBuZXh0VHVybi5wdXNoKCd5ZWxsb3cnKTtcbiAgLy8gICAgICQoJy50dXJuLWluZGljYXRvcicpLnRleHQoYFllbGxvdyBQbGF5ZXJgKTtcbiAgLy8gICB9IGVsc2UgaWYgKGN1cnJlbnRDb2xvciA9PT0gJ3llbGxvdycpIHtcbiAgLy8gICAgIG5leHRUdXJuLnB1c2goJ3JlZCcpO1xuICAvLyAgICAgJCgnLnR1cm4taW5kaWNhdG9yJykudGV4dChgUmVkIFBsYXllcmApO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIGZ1bmN0aW9uIGFkZFBpZWNlKCkge1xuICAvLyAgICQoKVxuICAvLyB9XG4gIFxufSkiXX0=
