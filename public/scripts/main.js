(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var app = {};

app.columns = {
  a: [],
  b: [],
  c: [],
  d: [],
  e: [],
  f: [],
  g: [],
  h: [], // h, i, and j are extra columns used solely for checkWin functions.
  i: [],
  j: []
};
app.nextTurn = ['red'];

// app.addPiece = function() {
//   $('.column').on('click', function () {
//     const index = $(this).data("column");
//     const selectedColumn = app.columns[`${index}`];
//     if (selectedColumn.length === 6) {
//       alert('Invalid move!');
//     } else if (selectedColumn.length < 6) {
//       const color = app.nextTurn[app.nextTurn.length - 1];
//       const cellNum = selectedColumn.length + 1;
//       const i = Object.values(app.columns);
//       const x = $(this).data("array");
//       const y = cellNum - 1;
//       $(`.column-${index} .cell-${cellNum}`).append(`<div class="piece ${color} animated fadeInDownBig faster"></div>`);
//       selectedColumn.push(`${color}`);
//       app.changeTurn();
//       app.checkForWin(i, x, y, color);
//     }
//   });
// }

// app.changeTurn = function() {
//   const currentColor = app.nextTurn[app.nextTurn.length - 1];
//   if (currentColor === 'red') {
//     app.nextTurn.push('yellow');
//     $('.turn-indicator').text(`Yellow`);
//   } else if (currentColor === 'yellow') {
//     app.nextTurn.push('red');
//     $('.turn-indicator').text(`Red`);
//   }
// };

// app.checkForWin = function(i, x, y, color) {
//   app.checkForVerticalWin(i, x, y, color);
//   app.checkForHorizontalWin(i, x, y, color);
//   app.checkForDiagonalWin(i, x, y, color);
//   app.checkForOtherWins(i, x, y, color);
// }

// app.checkForVerticalWin = function(i, x, y, color) {
//   if (i[x][y] === i[x][y - 1] && i[x][y] === i[x][y - 2] && i[x][y] === i[x][y - 3]) {
//     app.alertWin(color);
//   }
// }

// app.checkForDiagonalWin = function(i, x, y, color) {
//   if (
//     // DIAGONAL WINS (TOP-LEFT TO BOTTOM-RIGHT = TL-BR, BOTTOM-LEFT TO TOP-RIGHT = BL-TR) (POS */4 = LEFT-TO-RIGHT)
//     (i[x][y] === i[x + 3][y - 3] && i[x][y] === i[x + 2][y - 2] && i[x][y] === i[x + 1][y - 1]) || // TL-BR POS 1/4
//     (i[x][y] === i[x + 2][y - 2] && i[x][y] === i[x + 1][y - 1] && i[x][y] === i[x - 1][y + 1]) || // TL-BR POS 2/4
//     (i[x][y] === i[x + 1][y - 1] && i[x][y] === i[x - 1][y + 1] && i[x][y] === i[x - 2][y + 2]) || // TL-BR POS 3/4
//     (i[x][y] === i[x + 3][y + 3] && i[x][y] === i[x + 2][y + 2] && i[x][y] === i[x + 1][y + 1]) || // BL-TR POS 1/4
//     (i[x][y] === i[x + 2][y + 2] && i[x][y] === i[x + 1][y + 1] && i[x][y] === i[x - 1][y - 1]) || // BL-TR POS 2/4
//     (i[x][y] === i[x + 1][y + 1] && i[x][y] === i[x - 1][y - 1] && i[x][y] === i[x - 2][y - 2])    // BL-TR POS 3/4
//     ) {
//     app.alertWin(color);
//   }
// }

// app.checkForHorizontalWin = function(i, x, y, color) {
//   if (
//     (i[x][y] === i[x + 3][y] && i[x][y] === i[x + 2][y] && i[x][y] === i[x + 1][y]) ||
//     (i[x][y] === i[x + 2][y] && i[x][y] === i[x + 1][y] && i[x][y] === i[x - 1][y]) ||
//     (i[x][y] === i[x + 1][y] && i[x][y] === i[x - 1][y] && i[x][y] === i[x - 2][y]) 
//     ) {
//       app.alertWin(color);
//     }
//   }

// app.checkForOtherWins = function(i, x, y, color) {
//   if (
//     (i[x][y] === i[x - 1][y + 1] && i[x][y] === i[x - 2][y + 2] && i[x][y] === i[x - 3][y + 3]) || // TL-BR POS 4/4
//     (i[x][y] === i[x - 1][y - 1] && i[x][y] === i[x - 2][y - 2] && i[x][y] === i[x - 3][y - 3]) || // BL-TR POS 4/4
//     (i[x][y] === i[x - 1][y] && i[x][y] === i[x - 2][y] && i[x][y] === i[x - 3][y]) // HORIZONTAL WIN WITH NEGATIVE X-VALUE
//     ) {
//     app.alertWin(color);
//   }
// }

// app.alertWin = function(color) {
//   color = color.charAt(0).toUpperCase() + color.slice(1);
//   window.setTimeout(function() {
//     swal({
//       title: `Congratulations ${color} player!`,
//       text: `Winner winner chicken dinner 🍗🍗🍗`
//     });
//   }, 650);
// }


app.init = function () {
  app.addPiece();
};

// $('.column').hover(function() {
//   $(this).toggleClass('mouseover');
// });

$('.instruction-button').on('click', function () {});

$('.cell').on('click', function () {
  $(this).css('background-color', '#333333');
});

// DOCUMENT READY
$(function () {
  app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLE9BQUosR0FBYztBQUNaLEtBQUcsRUFEUztBQUVaLEtBQUcsRUFGUztBQUdaLEtBQUcsRUFIUztBQUlaLEtBQUcsRUFKUztBQUtaLEtBQUcsRUFMUztBQU1aLEtBQUcsRUFOUztBQU9aLEtBQUcsRUFQUztBQVFaLEtBQUcsRUFSUyxFQVFMO0FBQ1AsS0FBRyxFQVRTO0FBVVosS0FBRztBQVZTLENBQWQ7QUFZQSxJQUFJLFFBQUosR0FBZSxDQUFDLEtBQUQsQ0FBZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBSSxJQUFKLEdBQVcsWUFBVztBQUNwQixNQUFJLFFBQUo7QUFDRCxDQUZEOztBQUlBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHFCQUFGLEVBQXlCLEVBQXpCLENBQTRCLE9BQTVCLEVBQXFDLFlBQVcsQ0FFL0MsQ0FGRDs7QUFLQSxFQUFFLE9BQUYsRUFBVyxFQUFYLENBQWMsT0FBZCxFQUF1QixZQUFXO0FBQ2hDLElBQUUsSUFBRixFQUFRLEdBQVIsQ0FBWSxrQkFBWixFQUFnQyxTQUFoQztBQUNELENBRkQ7O0FBSUE7QUFDQSxFQUFFLFlBQVc7QUFDWCxNQUFJLElBQUo7QUFDRCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYXBwID0ge307XG5cbmFwcC5jb2x1bW5zID0ge1xuICBhOiBbXSxcbiAgYjogW10sXG4gIGM6IFtdLFxuICBkOiBbXSxcbiAgZTogW10sXG4gIGY6IFtdLFxuICBnOiBbXSxcbiAgaDogW10sIC8vIGgsIGksIGFuZCBqIGFyZSBleHRyYSBjb2x1bW5zIHVzZWQgc29sZWx5IGZvciBjaGVja1dpbiBmdW5jdGlvbnMuXG4gIGk6IFtdLFxuICBqOiBbXVxufVxuYXBwLm5leHRUdXJuID0gWydyZWQnXTtcblxuLy8gYXBwLmFkZFBpZWNlID0gZnVuY3Rpb24oKSB7XG4vLyAgICQoJy5jb2x1bW4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgY29uc3QgaW5kZXggPSAkKHRoaXMpLmRhdGEoXCJjb2x1bW5cIik7XG4vLyAgICAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBhcHAuY29sdW1uc1tgJHtpbmRleH1gXTtcbi8vICAgICBpZiAoc2VsZWN0ZWRDb2x1bW4ubGVuZ3RoID09PSA2KSB7XG4vLyAgICAgICBhbGVydCgnSW52YWxpZCBtb3ZlIScpO1xuLy8gICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRDb2x1bW4ubGVuZ3RoIDwgNikge1xuLy8gICAgICAgY29uc3QgY29sb3IgPSBhcHAubmV4dFR1cm5bYXBwLm5leHRUdXJuLmxlbmd0aCAtIDFdO1xuLy8gICAgICAgY29uc3QgY2VsbE51bSA9IHNlbGVjdGVkQ29sdW1uLmxlbmd0aCArIDE7XG4vLyAgICAgICBjb25zdCBpID0gT2JqZWN0LnZhbHVlcyhhcHAuY29sdW1ucyk7XG4vLyAgICAgICBjb25zdCB4ID0gJCh0aGlzKS5kYXRhKFwiYXJyYXlcIik7XG4vLyAgICAgICBjb25zdCB5ID0gY2VsbE51bSAtIDE7XG4vLyAgICAgICAkKGAuY29sdW1uLSR7aW5kZXh9IC5jZWxsLSR7Y2VsbE51bX1gKS5hcHBlbmQoYDxkaXYgY2xhc3M9XCJwaWVjZSAke2NvbG9yfSBhbmltYXRlZCBmYWRlSW5Eb3duQmlnIGZhc3RlclwiPjwvZGl2PmApO1xuLy8gICAgICAgc2VsZWN0ZWRDb2x1bW4ucHVzaChgJHtjb2xvcn1gKTtcbi8vICAgICAgIGFwcC5jaGFuZ2VUdXJuKCk7XG4vLyAgICAgICBhcHAuY2hlY2tGb3JXaW4oaSwgeCwgeSwgY29sb3IpO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9XG5cbi8vIGFwcC5jaGFuZ2VUdXJuID0gZnVuY3Rpb24oKSB7XG4vLyAgIGNvbnN0IGN1cnJlbnRDb2xvciA9IGFwcC5uZXh0VHVyblthcHAubmV4dFR1cm4ubGVuZ3RoIC0gMV07XG4vLyAgIGlmIChjdXJyZW50Q29sb3IgPT09ICdyZWQnKSB7XG4vLyAgICAgYXBwLm5leHRUdXJuLnB1c2goJ3llbGxvdycpO1xuLy8gICAgICQoJy50dXJuLWluZGljYXRvcicpLnRleHQoYFllbGxvd2ApO1xuLy8gICB9IGVsc2UgaWYgKGN1cnJlbnRDb2xvciA9PT0gJ3llbGxvdycpIHtcbi8vICAgICBhcHAubmV4dFR1cm4ucHVzaCgncmVkJyk7XG4vLyAgICAgJCgnLnR1cm4taW5kaWNhdG9yJykudGV4dChgUmVkYCk7XG4vLyAgIH1cbi8vIH07XG5cbi8vIGFwcC5jaGVja0ZvcldpbiA9IGZ1bmN0aW9uKGksIHgsIHksIGNvbG9yKSB7XG4vLyAgIGFwcC5jaGVja0ZvclZlcnRpY2FsV2luKGksIHgsIHksIGNvbG9yKTtcbi8vICAgYXBwLmNoZWNrRm9ySG9yaXpvbnRhbFdpbihpLCB4LCB5LCBjb2xvcik7XG4vLyAgIGFwcC5jaGVja0ZvckRpYWdvbmFsV2luKGksIHgsIHksIGNvbG9yKTtcbi8vICAgYXBwLmNoZWNrRm9yT3RoZXJXaW5zKGksIHgsIHksIGNvbG9yKTtcbi8vIH1cblxuLy8gYXBwLmNoZWNrRm9yVmVydGljYWxXaW4gPSBmdW5jdGlvbihpLCB4LCB5LCBjb2xvcikge1xuLy8gICBpZiAoaVt4XVt5XSA9PT0gaVt4XVt5IC0gMV0gJiYgaVt4XVt5XSA9PT0gaVt4XVt5IC0gMl0gJiYgaVt4XVt5XSA9PT0gaVt4XVt5IC0gM10pIHtcbi8vICAgICBhcHAuYWxlcnRXaW4oY29sb3IpO1xuLy8gICB9XG4vLyB9XG5cbi8vIGFwcC5jaGVja0ZvckRpYWdvbmFsV2luID0gZnVuY3Rpb24oaSwgeCwgeSwgY29sb3IpIHtcbi8vICAgaWYgKFxuLy8gICAgIC8vIERJQUdPTkFMIFdJTlMgKFRPUC1MRUZUIFRPIEJPVFRPTS1SSUdIVCA9IFRMLUJSLCBCT1RUT00tTEVGVCBUTyBUT1AtUklHSFQgPSBCTC1UUikgKFBPUyAqLzQgPSBMRUZULVRPLVJJR0hUKVxuLy8gICAgIChpW3hdW3ldID09PSBpW3ggKyAzXVt5IC0gM10gJiYgaVt4XVt5XSA9PT0gaVt4ICsgMl1beSAtIDJdICYmIGlbeF1beV0gPT09IGlbeCArIDFdW3kgLSAxXSkgfHwgLy8gVEwtQlIgUE9TIDEvNFxuLy8gICAgIChpW3hdW3ldID09PSBpW3ggKyAyXVt5IC0gMl0gJiYgaVt4XVt5XSA9PT0gaVt4ICsgMV1beSAtIDFdICYmIGlbeF1beV0gPT09IGlbeCAtIDFdW3kgKyAxXSkgfHwgLy8gVEwtQlIgUE9TIDIvNFxuLy8gICAgIChpW3hdW3ldID09PSBpW3ggKyAxXVt5IC0gMV0gJiYgaVt4XVt5XSA9PT0gaVt4IC0gMV1beSArIDFdICYmIGlbeF1beV0gPT09IGlbeCAtIDJdW3kgKyAyXSkgfHwgLy8gVEwtQlIgUE9TIDMvNFxuLy8gICAgIChpW3hdW3ldID09PSBpW3ggKyAzXVt5ICsgM10gJiYgaVt4XVt5XSA9PT0gaVt4ICsgMl1beSArIDJdICYmIGlbeF1beV0gPT09IGlbeCArIDFdW3kgKyAxXSkgfHwgLy8gQkwtVFIgUE9TIDEvNFxuLy8gICAgIChpW3hdW3ldID09PSBpW3ggKyAyXVt5ICsgMl0gJiYgaVt4XVt5XSA9PT0gaVt4ICsgMV1beSArIDFdICYmIGlbeF1beV0gPT09IGlbeCAtIDFdW3kgLSAxXSkgfHwgLy8gQkwtVFIgUE9TIDIvNFxuLy8gICAgIChpW3hdW3ldID09PSBpW3ggKyAxXVt5ICsgMV0gJiYgaVt4XVt5XSA9PT0gaVt4IC0gMV1beSAtIDFdICYmIGlbeF1beV0gPT09IGlbeCAtIDJdW3kgLSAyXSkgICAgLy8gQkwtVFIgUE9TIDMvNFxuLy8gICAgICkge1xuLy8gICAgIGFwcC5hbGVydFdpbihjb2xvcik7XG4vLyAgIH1cbi8vIH1cblxuLy8gYXBwLmNoZWNrRm9ySG9yaXpvbnRhbFdpbiA9IGZ1bmN0aW9uKGksIHgsIHksIGNvbG9yKSB7XG4vLyAgIGlmIChcbi8vICAgICAoaVt4XVt5XSA9PT0gaVt4ICsgM11beV0gJiYgaVt4XVt5XSA9PT0gaVt4ICsgMl1beV0gJiYgaVt4XVt5XSA9PT0gaVt4ICsgMV1beV0pIHx8XG4vLyAgICAgKGlbeF1beV0gPT09IGlbeCArIDJdW3ldICYmIGlbeF1beV0gPT09IGlbeCArIDFdW3ldICYmIGlbeF1beV0gPT09IGlbeCAtIDFdW3ldKSB8fFxuLy8gICAgIChpW3hdW3ldID09PSBpW3ggKyAxXVt5XSAmJiBpW3hdW3ldID09PSBpW3ggLSAxXVt5XSAmJiBpW3hdW3ldID09PSBpW3ggLSAyXVt5XSkgXG4vLyAgICAgKSB7XG4vLyAgICAgICBhcHAuYWxlcnRXaW4oY29sb3IpO1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyBhcHAuY2hlY2tGb3JPdGhlcldpbnMgPSBmdW5jdGlvbihpLCB4LCB5LCBjb2xvcikge1xuLy8gICBpZiAoXG4vLyAgICAgKGlbeF1beV0gPT09IGlbeCAtIDFdW3kgKyAxXSAmJiBpW3hdW3ldID09PSBpW3ggLSAyXVt5ICsgMl0gJiYgaVt4XVt5XSA9PT0gaVt4IC0gM11beSArIDNdKSB8fCAvLyBUTC1CUiBQT1MgNC80XG4vLyAgICAgKGlbeF1beV0gPT09IGlbeCAtIDFdW3kgLSAxXSAmJiBpW3hdW3ldID09PSBpW3ggLSAyXVt5IC0gMl0gJiYgaVt4XVt5XSA9PT0gaVt4IC0gM11beSAtIDNdKSB8fCAvLyBCTC1UUiBQT1MgNC80XG4vLyAgICAgKGlbeF1beV0gPT09IGlbeCAtIDFdW3ldICYmIGlbeF1beV0gPT09IGlbeCAtIDJdW3ldICYmIGlbeF1beV0gPT09IGlbeCAtIDNdW3ldKSAvLyBIT1JJWk9OVEFMIFdJTiBXSVRIIE5FR0FUSVZFIFgtVkFMVUVcbi8vICAgICApIHtcbi8vICAgICBhcHAuYWxlcnRXaW4oY29sb3IpO1xuLy8gICB9XG4vLyB9XG5cbi8vIGFwcC5hbGVydFdpbiA9IGZ1bmN0aW9uKGNvbG9yKSB7XG4vLyAgIGNvbG9yID0gY29sb3IuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBjb2xvci5zbGljZSgxKTtcbi8vICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4vLyAgICAgc3dhbCh7XG4vLyAgICAgICB0aXRsZTogYENvbmdyYXR1bGF0aW9ucyAke2NvbG9yfSBwbGF5ZXIhYCxcbi8vICAgICAgIHRleHQ6IGBXaW5uZXIgd2lubmVyIGNoaWNrZW4gZGlubmVyIPCfjZfwn42X8J+Nl2Bcbi8vICAgICB9KTtcbi8vICAgfSwgNjUwKTtcbi8vIH1cbiAgXG5cbmFwcC5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIGFwcC5hZGRQaWVjZSgpO1xufVxuXG4vLyAkKCcuY29sdW1uJykuaG92ZXIoZnVuY3Rpb24oKSB7XG4vLyAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ21vdXNlb3ZlcicpO1xuLy8gfSk7XG5cbiQoJy5pbnN0cnVjdGlvbi1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblxufSk7XG5cblxuJCgnLmNlbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnIzMzMzMzMycpO1xufSlcblxuLy8gRE9DVU1FTlQgUkVBRFlcbiQoZnVuY3Rpb24oKSB7XG4gIGFwcC5pbml0KCk7XG59KSJdfQ==
