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

      // app.winCondition();


      var counter = Object.values(app.columns);
      var i = cellNum - 1;
      var j = $(this).data("array");
      // VERTICAL WIN CONDITION
      if (counter[j].length > 1 && counter[j][i] === counter[j][i - 1] && counter[j][i - 1] === counter[j][i - 2] && counter[j][i - 2] === counter[j][i - 3]) {
        alert('VERTICAL WINNER');
      }

      // HORIZONTAL WIN CONDITION
      if (counter[j][i] === counter[j + 1][i] && counter[j + 1][i] === counter[j + 2][i] && counter[j + 2][i] === counter[j + 3][i]) {
        console.log('hello');
      }
      // console.log(counter[j][i], counter[j+1][i], counter[j+2][i], counter [j+3][i]);
      // for (let i = 0; i <= 7; i++) {
      //   console.log(counter[i]);
      // }

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

app.winCondition = function () {
  // const counter = Object.values(app.columns);
  // let i = cellNum - 1;
  // const j = $(this).data("array");
  // if (counter[j].length > 1 && counter[j][i] === counter[j][i - 1] && counter[j][i - 1] === counter[j][i - 2] && counter[j][i - 2] === counter[j][i - 3]) {
  //   alert('winner');
  // }
};

app.init = function () {
  app.addPiece();
};

// DOCUMENT READY
$(function () {
  app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLE9BQUosR0FBYztBQUNaLEtBQUcsRUFEUztBQUVaLEtBQUcsRUFGUztBQUdaLEtBQUcsRUFIUztBQUlaLEtBQUcsRUFKUztBQUtaLEtBQUcsRUFMUztBQU1aLEtBQUcsRUFOUztBQU9aLEtBQUc7QUFQUyxDQUFkO0FBU0EsSUFBSSxRQUFKLEdBQWUsQ0FBQyxLQUFELENBQWY7O0FBRUE7QUFDQSxJQUFJLFFBQUosR0FBZSxZQUFXO0FBQ3hCLElBQUUsU0FBRixFQUFhLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBWTtBQUNuQyxRQUFNLFFBQVEsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFFBQWIsQ0FBZDtBQUNBLFFBQU0saUJBQWlCLElBQUksT0FBSixNQUFlLEtBQWYsQ0FBdkI7QUFDQSxRQUFJLGVBQWUsTUFBZixLQUEwQixDQUE5QixFQUFpQztBQUMvQixZQUFNLGVBQU47QUFDRCxLQUZELE1BRU8sSUFBSSxlQUFlLE1BQWYsR0FBd0IsQ0FBNUIsRUFBK0I7QUFDcEMsVUFBTSxRQUFRLElBQUksUUFBSixDQUFhLElBQUksUUFBSixDQUFhLE1BQWIsR0FBc0IsQ0FBbkMsQ0FBZDtBQUNBLFVBQU0sVUFBVSxlQUFlLE1BQWYsR0FBd0IsQ0FBeEM7QUFDQSxxQkFBYSxLQUFiLGVBQTRCLE9BQTVCLEVBQXVDLFFBQXZDLE1BQW1ELEtBQW5EO0FBQ0EscUJBQWUsSUFBZixNQUF1QixLQUF2QjtBQUNBLFVBQUksVUFBSjs7QUFFQTs7O0FBSUEsVUFBTSxVQUFVLE9BQU8sTUFBUCxDQUFjLElBQUksT0FBbEIsQ0FBaEI7QUFDQSxVQUFJLElBQUksVUFBVSxDQUFsQjtBQUNBLFVBQU0sSUFBSSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsT0FBYixDQUFWO0FBQ0E7QUFDQSxVQUFJLFFBQVEsQ0FBUixFQUFXLE1BQVgsR0FBb0IsQ0FBcEIsSUFBeUIsUUFBUSxDQUFSLEVBQVcsQ0FBWCxNQUFrQixRQUFRLENBQVIsRUFBVyxJQUFJLENBQWYsQ0FBM0MsSUFBZ0UsUUFBUSxDQUFSLEVBQVcsSUFBSSxDQUFmLE1BQXNCLFFBQVEsQ0FBUixFQUFXLElBQUksQ0FBZixDQUF0RixJQUEyRyxRQUFRLENBQVIsRUFBVyxJQUFJLENBQWYsTUFBc0IsUUFBUSxDQUFSLEVBQVcsSUFBSSxDQUFmLENBQXJJLEVBQXdKO0FBQ3RKLGNBQU0saUJBQU47QUFDRDs7QUFFRDtBQUNBLFVBQUksUUFBUSxDQUFSLEVBQVcsQ0FBWCxNQUFrQixRQUFRLElBQUUsQ0FBVixFQUFhLENBQWIsQ0FBbEIsSUFBcUMsUUFBUSxJQUFFLENBQVYsRUFBYSxDQUFiLE1BQW9CLFFBQVEsSUFBRSxDQUFWLEVBQWEsQ0FBYixDQUF6RCxJQUE0RSxRQUFRLElBQUUsQ0FBVixFQUFhLENBQWIsTUFBb0IsUUFBUSxJQUFFLENBQVYsRUFBYSxDQUFiLENBQXBHLEVBQXFIO0FBQ25ILGdCQUFRLEdBQVIsQ0FBWSxPQUFaO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFJRDtBQUNGLEdBcENEO0FBcUNELENBdENEOztBQXdDQTtBQUNBLElBQUksVUFBSixHQUFpQixZQUFXO0FBQzFCLE1BQU0sZUFBZSxJQUFJLFFBQUosQ0FBYSxJQUFJLFFBQUosQ0FBYSxNQUFiLEdBQXNCLENBQW5DLENBQXJCO0FBQ0EsTUFBSSxpQkFBaUIsS0FBckIsRUFBNEI7QUFDMUIsUUFBSSxRQUFKLENBQWEsSUFBYixDQUFrQixRQUFsQjtBQUNBLE1BQUUsaUJBQUYsRUFBcUIsSUFBckI7QUFDRCxHQUhELE1BR08sSUFBSSxpQkFBaUIsUUFBckIsRUFBK0I7QUFDcEMsUUFBSSxRQUFKLENBQWEsSUFBYixDQUFrQixLQUFsQjtBQUNBLE1BQUUsaUJBQUYsRUFBcUIsSUFBckI7QUFDRDtBQUNGLENBVEQ7O0FBV0EsSUFBSSxZQUFKLEdBQW1CLFlBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0FQRDs7QUFTQSxJQUFJLElBQUosR0FBVyxZQUFXO0FBQ3BCLE1BQUksUUFBSjtBQUNELENBRkQ7O0FBSUE7QUFDQSxFQUFFLFlBQVc7QUFDWCxNQUFJLElBQUo7QUFDRCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYXBwID0ge307XG5cbmFwcC5jb2x1bW5zID0ge1xuICBhOiBbXSxcbiAgYjogW10sXG4gIGM6IFtdLFxuICBkOiBbXSxcbiAgZTogW10sXG4gIGY6IFtdLFxuICBnOiBbXVxufVxuYXBwLm5leHRUdXJuID0gWydyZWQnXTtcblxuLy8gQ0xJQ0sgT04gQ09MVU1OIFRPIEFERCBQSUVDRVxuYXBwLmFkZFBpZWNlID0gZnVuY3Rpb24oKSB7XG4gICQoJy5jb2x1bW4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaW5kZXggPSAkKHRoaXMpLmRhdGEoXCJjb2x1bW5cIik7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBhcHAuY29sdW1uc1tgJHtpbmRleH1gXTtcbiAgICBpZiAoc2VsZWN0ZWRDb2x1bW4ubGVuZ3RoID09PSA2KSB7XG4gICAgICBhbGVydCgnSW52YWxpZCBtb3ZlIScpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRDb2x1bW4ubGVuZ3RoIDwgNikge1xuICAgICAgY29uc3QgY29sb3IgPSBhcHAubmV4dFR1cm5bYXBwLm5leHRUdXJuLmxlbmd0aCAtIDFdO1xuICAgICAgY29uc3QgY2VsbE51bSA9IHNlbGVjdGVkQ29sdW1uLmxlbmd0aCArIDE7XG4gICAgICAkKGAuY29sdW1uLSR7aW5kZXh9IC5jZWxsLSR7Y2VsbE51bX1gKS5hZGRDbGFzcyhgJHtjb2xvcn1gKTtcbiAgICAgIHNlbGVjdGVkQ29sdW1uLnB1c2goYCR7Y29sb3J9YCk7XG4gICAgICBhcHAuY2hhbmdlVHVybigpO1xuXG4gICAgICAvLyBhcHAud2luQ29uZGl0aW9uKCk7XG5cblxuXG4gICAgICBjb25zdCBjb3VudGVyID0gT2JqZWN0LnZhbHVlcyhhcHAuY29sdW1ucyk7XG4gICAgICBsZXQgaSA9IGNlbGxOdW0gLSAxO1xuICAgICAgY29uc3QgaiA9ICQodGhpcykuZGF0YShcImFycmF5XCIpO1xuICAgICAgLy8gVkVSVElDQUwgV0lOIENPTkRJVElPTlxuICAgICAgaWYgKGNvdW50ZXJbal0ubGVuZ3RoID4gMSAmJiBjb3VudGVyW2pdW2ldID09PSBjb3VudGVyW2pdW2kgLSAxXSAmJiBjb3VudGVyW2pdW2kgLSAxXSA9PT0gY291bnRlcltqXVtpIC0gMl0gJiYgY291bnRlcltqXVtpIC0gMl0gPT09IGNvdW50ZXJbal1baSAtIDNdKSB7XG4gICAgICAgIGFsZXJ0KCdWRVJUSUNBTCBXSU5ORVInKTtcbiAgICAgIH1cblxuICAgICAgLy8gSE9SSVpPTlRBTCBXSU4gQ09ORElUSU9OXG4gICAgICBpZiAoY291bnRlcltqXVtpXSA9PT0gY291bnRlcltqKzFdW2ldICYmIGNvdW50ZXJbaisxXVtpXSA9PT0gY291bnRlcltqKzJdW2ldICYmIGNvdW50ZXJbaisyXVtpXSA9PT0gY291bnRlcltqKzNdW2ldKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coY291bnRlcltqXVtpXSwgY291bnRlcltqKzFdW2ldLCBjb3VudGVyW2orMl1baV0sIGNvdW50ZXIgW2orM11baV0pO1xuICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGNvdW50ZXJbaV0pO1xuICAgICAgLy8gfVxuXG5cblxuICAgIH1cbiAgfSk7XG59XG5cbi8vIENIRUNLIFdIT1NFIFRVUk4gQU5EIFVQREFURSBUVVJOIE9SREVSXG5hcHAuY2hhbmdlVHVybiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBjdXJyZW50Q29sb3IgPSBhcHAubmV4dFR1cm5bYXBwLm5leHRUdXJuLmxlbmd0aCAtIDFdO1xuICBpZiAoY3VycmVudENvbG9yID09PSAncmVkJykge1xuICAgIGFwcC5uZXh0VHVybi5wdXNoKCd5ZWxsb3cnKTtcbiAgICAkKCcudHVybi1pbmRpY2F0b3InKS50ZXh0KGBZZWxsb3dgKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50Q29sb3IgPT09ICd5ZWxsb3cnKSB7XG4gICAgYXBwLm5leHRUdXJuLnB1c2goJ3JlZCcpO1xuICAgICQoJy50dXJuLWluZGljYXRvcicpLnRleHQoYFJlZGApO1xuICB9XG59O1xuXG5hcHAud2luQ29uZGl0aW9uID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNvbnN0IGNvdW50ZXIgPSBPYmplY3QudmFsdWVzKGFwcC5jb2x1bW5zKTtcbiAgLy8gbGV0IGkgPSBjZWxsTnVtIC0gMTtcbiAgLy8gY29uc3QgaiA9ICQodGhpcykuZGF0YShcImFycmF5XCIpO1xuICAvLyBpZiAoY291bnRlcltqXS5sZW5ndGggPiAxICYmIGNvdW50ZXJbal1baV0gPT09IGNvdW50ZXJbal1baSAtIDFdICYmIGNvdW50ZXJbal1baSAtIDFdID09PSBjb3VudGVyW2pdW2kgLSAyXSAmJiBjb3VudGVyW2pdW2kgLSAyXSA9PT0gY291bnRlcltqXVtpIC0gM10pIHtcbiAgLy8gICBhbGVydCgnd2lubmVyJyk7XG4gIC8vIH1cbn1cblxuYXBwLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgYXBwLmFkZFBpZWNlKCk7XG59XG5cbi8vIERPQ1VNRU5UIFJFQURZXG4kKGZ1bmN0aW9uKCkge1xuICBhcHAuaW5pdCgpO1xufSkiXX0=
