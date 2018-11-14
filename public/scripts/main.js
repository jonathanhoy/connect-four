(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

// ARRAYS
var columns = {
  a: [],
  b: [],
  c: [],
  d: [],
  e: [],
  f: [],
  g: []
};
var nextTurn = ['red'];

$(function () {

  // CLICK ON COLUMN TO ADD PIECE
  $('.column').on('click', function () {
    var index = $(this).data("column");
    var selectedColumn = columns['' + index];
    if (selectedColumn.length === 6) {
      alert('Invalid move!');
    } else if (selectedColumn.length < 6) {
      var color = nextTurn[nextTurn.length - 1];
      var cellNum = selectedColumn.length + 1;
      $('.column-' + index + ' .cell-' + cellNum).addClass('' + color);
      selectedColumn.push('' + color);
      changeTurn();
      console.log(selectedColumn);
    }
  });

  // CHECK WHOSE TURN AND UPDATE TURN ORDER
  function changeTurn() {
    var currentColor = nextTurn[nextTurn.length - 1];
    if (currentColor === 'red') {
      nextTurn.push('yellow');
      $('.turn-indicator').text('Yellow Player');
    } else if (currentColor === 'yellow') {
      nextTurn.push('red');
      $('.turn-indicator').text('Red Player');
    }
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLElBQU0sVUFBVTtBQUNkLEtBQUcsRUFEVztBQUVkLEtBQUcsRUFGVztBQUdkLEtBQUcsRUFIVztBQUlkLEtBQUcsRUFKVztBQUtkLEtBQUcsRUFMVztBQU1kLEtBQUcsRUFOVztBQU9kLEtBQUc7QUFQVyxDQUFoQjtBQVNBLElBQU0sV0FBVyxDQUFDLEtBQUQsQ0FBakI7O0FBSUEsRUFBRSxZQUFXOztBQUVYO0FBQ0EsSUFBRSxTQUFGLEVBQWEsRUFBYixDQUFnQixPQUFoQixFQUF5QixZQUFXO0FBQ2xDLFFBQU0sUUFBUSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsUUFBYixDQUFkO0FBQ0EsUUFBTSxpQkFBaUIsYUFBVyxLQUFYLENBQXZCO0FBQ0EsUUFBSSxlQUFlLE1BQWYsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0IsWUFBTSxlQUFOO0FBQ0QsS0FGRCxNQUVPLElBQUksZUFBZSxNQUFmLEdBQXdCLENBQTVCLEVBQStCO0FBQ3BDLFVBQU0sUUFBUSxTQUFTLFNBQVMsTUFBVCxHQUFrQixDQUEzQixDQUFkO0FBQ0EsVUFBTSxVQUFVLGVBQWUsTUFBZixHQUF3QixDQUF4QztBQUNBLHFCQUFhLEtBQWIsZUFBNEIsT0FBNUIsRUFBdUMsUUFBdkMsTUFBbUQsS0FBbkQ7QUFDQSxxQkFBZSxJQUFmLE1BQXVCLEtBQXZCO0FBQ0E7QUFDQSxjQUFRLEdBQVIsQ0FBWSxjQUFaO0FBQ0Q7QUFDRixHQWJEOztBQWVBO0FBQ0EsV0FBUyxVQUFULEdBQXNCO0FBQ3BCLFFBQU0sZUFBZSxTQUFTLFNBQVMsTUFBVCxHQUFrQixDQUEzQixDQUFyQjtBQUNBLFFBQUksaUJBQWlCLEtBQXJCLEVBQTRCO0FBQzFCLGVBQVMsSUFBVCxDQUFjLFFBQWQ7QUFDQSxRQUFFLGlCQUFGLEVBQXFCLElBQXJCO0FBQ0QsS0FIRCxNQUdPLElBQUksaUJBQWlCLFFBQXJCLEVBQStCO0FBQ3BDLGVBQVMsSUFBVCxDQUFjLEtBQWQ7QUFDQSxRQUFFLGlCQUFGLEVBQXFCLElBQXJCO0FBQ0Q7QUFDRjtBQUdGLENBL0JEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gQVJSQVlTXG5jb25zdCBjb2x1bW5zID0ge1xuICBhOiBbXSxcbiAgYjogW10sXG4gIGM6IFtdLFxuICBkOiBbXSxcbiAgZTogW10sXG4gIGY6IFtdLFxuICBnOiBbXVxufVxuY29uc3QgbmV4dFR1cm4gPSBbJ3JlZCddO1xuXG5cblxuJChmdW5jdGlvbigpIHtcblxuICAvLyBDTElDSyBPTiBDT0xVTU4gVE8gQUREIFBJRUNFXG4gICQoJy5jb2x1bW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBpbmRleCA9ICQodGhpcykuZGF0YShcImNvbHVtblwiKTtcbiAgICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGNvbHVtbnNbYCR7aW5kZXh9YF1cbiAgICBpZiAoc2VsZWN0ZWRDb2x1bW4ubGVuZ3RoID09PSA2KSB7XG4gICAgICBhbGVydCgnSW52YWxpZCBtb3ZlIScpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRDb2x1bW4ubGVuZ3RoIDwgNikge1xuICAgICAgY29uc3QgY29sb3IgPSBuZXh0VHVybltuZXh0VHVybi5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnN0IGNlbGxOdW0gPSBzZWxlY3RlZENvbHVtbi5sZW5ndGggKyAxO1xuICAgICAgJChgLmNvbHVtbi0ke2luZGV4fSAuY2VsbC0ke2NlbGxOdW19YCkuYWRkQ2xhc3MoYCR7Y29sb3J9YCk7XG4gICAgICBzZWxlY3RlZENvbHVtbi5wdXNoKGAke2NvbG9yfWApO1xuICAgICAgY2hhbmdlVHVybigpO1xuICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRDb2x1bW4pO1xuICAgIH1cbiAgfSlcbiAgXG4gIC8vIENIRUNLIFdIT1NFIFRVUk4gQU5EIFVQREFURSBUVVJOIE9SREVSXG4gIGZ1bmN0aW9uIGNoYW5nZVR1cm4oKSB7XG4gICAgY29uc3QgY3VycmVudENvbG9yID0gbmV4dFR1cm5bbmV4dFR1cm4ubGVuZ3RoIC0gMV07XG4gICAgaWYgKGN1cnJlbnRDb2xvciA9PT0gJ3JlZCcpIHtcbiAgICAgIG5leHRUdXJuLnB1c2goJ3llbGxvdycpO1xuICAgICAgJCgnLnR1cm4taW5kaWNhdG9yJykudGV4dChgWWVsbG93IFBsYXllcmApO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudENvbG9yID09PSAneWVsbG93Jykge1xuICAgICAgbmV4dFR1cm4ucHVzaCgncmVkJyk7XG4gICAgICAkKCcudHVybi1pbmRpY2F0b3InKS50ZXh0KGBSZWQgUGxheWVyYCk7XG4gICAgfVxuICB9XG5cbiAgXG59KSJdfQ==
