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
  g: []
};
app.nextTurn = ['red'];

// CLICK ON COLUMN TO ADD PIECE
app.addPiece = function () {
  $('.column').on('click', function () {
    var index = $(this).data("column");
    var selectedColumn = app.columns['' + index];
    if (selectedColumn.length === 6) {
      alert('Invalid move!');
    } else if (selectedColumn.length < 6) {
      var color = app.nextTurn[app.nextTurn.length - 1];
      var cellNum = selectedColumn.length + 1;
      $('.column-' + index + ' .cell-' + cellNum).addClass('' + color);
      selectedColumn.push('' + color);
      app.changeTurn();
    }
  });
};

// CHECK WHOSE TURN AND UPDATE TURN ORDER
app.changeTurn = function () {
  var currentColor = app.nextTurn[app.nextTurn.length - 1];
  if (currentColor === 'red') {
    app.nextTurn.push('yellow');
    $('.turn-indicator').text('Yellow');
  } else if (currentColor === 'yellow') {
    app.nextTurn.push('red');
    $('.turn-indicator').text('Red');
  }
};

app.init = function () {
  app.addPiece();
};

// DOCUMENT READY
$(function () {
  app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLE9BQUosR0FBYztBQUNaLEtBQUcsRUFEUztBQUVaLEtBQUcsRUFGUztBQUdaLEtBQUcsRUFIUztBQUlaLEtBQUcsRUFKUztBQUtaLEtBQUcsRUFMUztBQU1aLEtBQUcsRUFOUztBQU9aLEtBQUc7QUFQUyxDQUFkO0FBU0EsSUFBSSxRQUFKLEdBQWUsQ0FBQyxLQUFELENBQWY7O0FBRUE7QUFDQSxJQUFJLFFBQUosR0FBZSxZQUFXO0FBQ3hCLElBQUUsU0FBRixFQUFhLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBWTtBQUNuQyxRQUFNLFFBQVEsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFFBQWIsQ0FBZDtBQUNBLFFBQU0saUJBQWlCLElBQUksT0FBSixNQUFlLEtBQWYsQ0FBdkI7QUFDQSxRQUFJLGVBQWUsTUFBZixLQUEwQixDQUE5QixFQUFpQztBQUMvQixZQUFNLGVBQU47QUFDRCxLQUZELE1BRU8sSUFBSSxlQUFlLE1BQWYsR0FBd0IsQ0FBNUIsRUFBK0I7QUFDcEMsVUFBTSxRQUFRLElBQUksUUFBSixDQUFhLElBQUksUUFBSixDQUFhLE1BQWIsR0FBc0IsQ0FBbkMsQ0FBZDtBQUNBLFVBQU0sVUFBVSxlQUFlLE1BQWYsR0FBd0IsQ0FBeEM7QUFDQSxxQkFBYSxLQUFiLGVBQTRCLE9BQTVCLEVBQXVDLFFBQXZDLE1BQW1ELEtBQW5EO0FBQ0EscUJBQWUsSUFBZixNQUF1QixLQUF2QjtBQUNBLFVBQUksVUFBSjtBQUNEO0FBQ0YsR0FaRDtBQWFELENBZEQ7O0FBZ0JBO0FBQ0EsSUFBSSxVQUFKLEdBQWlCLFlBQVc7QUFDMUIsTUFBTSxlQUFlLElBQUksUUFBSixDQUFhLElBQUksUUFBSixDQUFhLE1BQWIsR0FBc0IsQ0FBbkMsQ0FBckI7QUFDQSxNQUFJLGlCQUFpQixLQUFyQixFQUE0QjtBQUMxQixRQUFJLFFBQUosQ0FBYSxJQUFiLENBQWtCLFFBQWxCO0FBQ0EsTUFBRSxpQkFBRixFQUFxQixJQUFyQjtBQUNELEdBSEQsTUFHTyxJQUFJLGlCQUFpQixRQUFyQixFQUErQjtBQUNwQyxRQUFJLFFBQUosQ0FBYSxJQUFiLENBQWtCLEtBQWxCO0FBQ0EsTUFBRSxpQkFBRixFQUFxQixJQUFyQjtBQUNEO0FBQ0YsQ0FURDs7QUFXQSxJQUFJLElBQUosR0FBVyxZQUFXO0FBQ3BCLE1BQUksUUFBSjtBQUNELENBRkQ7O0FBSUE7QUFDQSxFQUFFLFlBQVc7QUFDWCxNQUFJLElBQUo7QUFDRCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYXBwID0ge307XG5cbmFwcC5jb2x1bW5zID0ge1xuICBhOiBbXSxcbiAgYjogW10sXG4gIGM6IFtdLFxuICBkOiBbXSxcbiAgZTogW10sXG4gIGY6IFtdLFxuICBnOiBbXVxufVxuYXBwLm5leHRUdXJuID0gWydyZWQnXTtcblxuLy8gQ0xJQ0sgT04gQ09MVU1OIFRPIEFERCBQSUVDRVxuYXBwLmFkZFBpZWNlID0gZnVuY3Rpb24oKSB7XG4gICQoJy5jb2x1bW4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaW5kZXggPSAkKHRoaXMpLmRhdGEoXCJjb2x1bW5cIik7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBhcHAuY29sdW1uc1tgJHtpbmRleH1gXVxuICAgIGlmIChzZWxlY3RlZENvbHVtbi5sZW5ndGggPT09IDYpIHtcbiAgICAgIGFsZXJ0KCdJbnZhbGlkIG1vdmUhJyk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZENvbHVtbi5sZW5ndGggPCA2KSB7XG4gICAgICBjb25zdCBjb2xvciA9IGFwcC5uZXh0VHVyblthcHAubmV4dFR1cm4ubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBjZWxsTnVtID0gc2VsZWN0ZWRDb2x1bW4ubGVuZ3RoICsgMTtcbiAgICAgICQoYC5jb2x1bW4tJHtpbmRleH0gLmNlbGwtJHtjZWxsTnVtfWApLmFkZENsYXNzKGAke2NvbG9yfWApO1xuICAgICAgc2VsZWN0ZWRDb2x1bW4ucHVzaChgJHtjb2xvcn1gKTtcbiAgICAgIGFwcC5jaGFuZ2VUdXJuKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gQ0hFQ0sgV0hPU0UgVFVSTiBBTkQgVVBEQVRFIFRVUk4gT1JERVJcbmFwcC5jaGFuZ2VUdXJuID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGN1cnJlbnRDb2xvciA9IGFwcC5uZXh0VHVyblthcHAubmV4dFR1cm4ubGVuZ3RoIC0gMV07XG4gIGlmIChjdXJyZW50Q29sb3IgPT09ICdyZWQnKSB7XG4gICAgYXBwLm5leHRUdXJuLnB1c2goJ3llbGxvdycpO1xuICAgICQoJy50dXJuLWluZGljYXRvcicpLnRleHQoYFllbGxvd2ApO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRDb2xvciA9PT0gJ3llbGxvdycpIHtcbiAgICBhcHAubmV4dFR1cm4ucHVzaCgncmVkJyk7XG4gICAgJCgnLnR1cm4taW5kaWNhdG9yJykudGV4dChgUmVkYCk7XG4gIH1cbn07XG5cbmFwcC5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIGFwcC5hZGRQaWVjZSgpO1xufVxuXG4vLyBET0NVTUVOVCBSRUFEWVxuJChmdW5jdGlvbigpIHtcbiAgYXBwLmluaXQoKTtcbn0pIl19
