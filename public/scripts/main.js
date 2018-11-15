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
      console.log(selectedColumn);

      // app.winCondition();
      // console.log(Object.values(app.columns));


      var counter = Object.values(app.columns);
      var i = cellNum - 1;
      var j = $(this).data("array");
      if (counter[j].length > 1 && counter[j][i] === counter[j][i - 1] && counter[j][i - 1] === counter[j][i - 2] && counter[j][i - 2] === counter[j][i - 3]) {
        console.log('winner');
        alert('winner');
      }
      // if (counter[1][i] === counter[1][i - 1] && counter[1][i - 1] === counter[1][i - 2] && counter[1][i - 2] === counter[1][i - 3]) {
      //   alert('winner');
      // }
      // if (counter[2][i] === counter[2][i - 1] && counter[2][i - 1] === counter[2][i - 2] && counter[2][i - 2] === counter[2][i - 3]) {
      //   alert('winner');
      // }
      // if (counter[3][i] === counter[3][i - 1] && counter[3][i - 1] === counter[3][i - 2] && counter[3][i - 2] === counter[3][i - 3]) {
      //   alert('winner');
      // }
      // if (counter[4][i] === counter[4][i - 1] && counter[4][i - 1] === counter[4][i - 2] && counter[4][i - 2] === counter[4][i - 3]) {
      //   alert('winner');
      // }
      // if (counter[5][i] === counter[5][i - 1] && counter[5][i - 1] === counter[5][i - 2] && counter[5][i - 2] === counter[5][i - 3]) {
      //   alert('winner');
      // }
      // if (counter[6][i] === counter[6][i - 1] && counter[6][i - 1] === counter[6][i - 2] && counter[6][i - 2] === counter[6][i - 3]) {
      //   alert('winner');
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

// app.winCondition = function() {
//   const counter = Object.values(app.columns);
//   for (let i = 0; i <= 7; i++) {
//     if (counter[i][i] === counter[i][i+1] && counter[i][i+1] === counter[i][i+2] && counter[i][i+2] === counter[i][i+3]) {
//       alert('You win!!')
//     }
//   }
// }

app.init = function () {
  app.addPiece();
};

// DOCUMENT READY
$(function () {
  app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLE9BQUosR0FBYztBQUNaLEtBQUcsRUFEUztBQUVaLEtBQUcsRUFGUztBQUdaLEtBQUcsRUFIUztBQUlaLEtBQUcsRUFKUztBQUtaLEtBQUcsRUFMUztBQU1aLEtBQUcsRUFOUztBQU9aLEtBQUc7QUFQUyxDQUFkO0FBU0EsSUFBSSxRQUFKLEdBQWUsQ0FBQyxLQUFELENBQWY7O0FBRUE7QUFDQSxJQUFJLFFBQUosR0FBZSxZQUFXO0FBQ3hCLElBQUUsU0FBRixFQUFhLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBWTtBQUNuQyxRQUFNLFFBQVEsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFFBQWIsQ0FBZDtBQUNBLFFBQU0saUJBQWlCLElBQUksT0FBSixNQUFlLEtBQWYsQ0FBdkI7QUFDQSxRQUFJLGVBQWUsTUFBZixLQUEwQixDQUE5QixFQUFpQztBQUMvQixZQUFNLGVBQU47QUFDRCxLQUZELE1BRU8sSUFBSSxlQUFlLE1BQWYsR0FBd0IsQ0FBNUIsRUFBK0I7QUFDcEMsVUFBTSxRQUFRLElBQUksUUFBSixDQUFhLElBQUksUUFBSixDQUFhLE1BQWIsR0FBc0IsQ0FBbkMsQ0FBZDtBQUNBLFVBQU0sVUFBVSxlQUFlLE1BQWYsR0FBd0IsQ0FBeEM7QUFDQSxxQkFBYSxLQUFiLGVBQTRCLE9BQTVCLEVBQXVDLFFBQXZDLE1BQW1ELEtBQW5EO0FBQ0EscUJBQWUsSUFBZixNQUF1QixLQUF2QjtBQUNBLFVBQUksVUFBSjtBQUNBLGNBQVEsR0FBUixDQUFZLGNBQVo7O0FBRUE7QUFDQTs7O0FBSUEsVUFBTSxVQUFVLE9BQU8sTUFBUCxDQUFjLElBQUksT0FBbEIsQ0FBaEI7QUFDQSxVQUFJLElBQUksVUFBVSxDQUFsQjtBQUNBLFVBQU0sSUFBSSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsT0FBYixDQUFWO0FBQ0EsVUFBSSxRQUFRLENBQVIsRUFBVyxNQUFYLEdBQW9CLENBQXBCLElBQXlCLFFBQVEsQ0FBUixFQUFXLENBQVgsTUFBa0IsUUFBUSxDQUFSLEVBQVcsSUFBSSxDQUFmLENBQTNDLElBQWdFLFFBQVEsQ0FBUixFQUFXLElBQUksQ0FBZixNQUFzQixRQUFRLENBQVIsRUFBVyxJQUFJLENBQWYsQ0FBdEYsSUFBMkcsUUFBUSxDQUFSLEVBQVcsSUFBSSxDQUFmLE1BQXNCLFFBQVEsQ0FBUixFQUFXLElBQUksQ0FBZixDQUFySSxFQUF3SjtBQUN0SixnQkFBUSxHQUFSLENBQVksUUFBWjtBQUNBLGNBQU0sUUFBTjtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtEO0FBQ0YsR0FoREQ7QUFpREQsQ0FsREQ7O0FBb0RBO0FBQ0EsSUFBSSxVQUFKLEdBQWlCLFlBQVc7QUFDMUIsTUFBTSxlQUFlLElBQUksUUFBSixDQUFhLElBQUksUUFBSixDQUFhLE1BQWIsR0FBc0IsQ0FBbkMsQ0FBckI7QUFDQSxNQUFJLGlCQUFpQixLQUFyQixFQUE0QjtBQUMxQixRQUFJLFFBQUosQ0FBYSxJQUFiLENBQWtCLFFBQWxCO0FBQ0EsTUFBRSxpQkFBRixFQUFxQixJQUFyQjtBQUNELEdBSEQsTUFHTyxJQUFJLGlCQUFpQixRQUFyQixFQUErQjtBQUNwQyxRQUFJLFFBQUosQ0FBYSxJQUFiLENBQWtCLEtBQWxCO0FBQ0EsTUFBRSxpQkFBRixFQUFxQixJQUFyQjtBQUNEO0FBQ0YsQ0FURDs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksSUFBSixHQUFXLFlBQVc7QUFDcEIsTUFBSSxRQUFKO0FBQ0QsQ0FGRDs7QUFJQTtBQUNBLEVBQUUsWUFBVztBQUNYLE1BQUksSUFBSjtBQUNELENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBhcHAgPSB7fTtcblxuYXBwLmNvbHVtbnMgPSB7XG4gIGE6IFtdLFxuICBiOiBbXSxcbiAgYzogW10sXG4gIGQ6IFtdLFxuICBlOiBbXSxcbiAgZjogW10sXG4gIGc6IFtdXG59XG5hcHAubmV4dFR1cm4gPSBbJ3JlZCddO1xuXG4vLyBDTElDSyBPTiBDT0xVTU4gVE8gQUREIFBJRUNFXG5hcHAuYWRkUGllY2UgPSBmdW5jdGlvbigpIHtcbiAgJCgnLmNvbHVtbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBpbmRleCA9ICQodGhpcykuZGF0YShcImNvbHVtblwiKTtcbiAgICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGFwcC5jb2x1bW5zW2Ake2luZGV4fWBdO1xuICAgIGlmIChzZWxlY3RlZENvbHVtbi5sZW5ndGggPT09IDYpIHtcbiAgICAgIGFsZXJ0KCdJbnZhbGlkIG1vdmUhJyk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZENvbHVtbi5sZW5ndGggPCA2KSB7XG4gICAgICBjb25zdCBjb2xvciA9IGFwcC5uZXh0VHVyblthcHAubmV4dFR1cm4ubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBjZWxsTnVtID0gc2VsZWN0ZWRDb2x1bW4ubGVuZ3RoICsgMTtcbiAgICAgICQoYC5jb2x1bW4tJHtpbmRleH0gLmNlbGwtJHtjZWxsTnVtfWApLmFkZENsYXNzKGAke2NvbG9yfWApO1xuICAgICAgc2VsZWN0ZWRDb2x1bW4ucHVzaChgJHtjb2xvcn1gKTtcbiAgICAgIGFwcC5jaGFuZ2VUdXJuKCk7XG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENvbHVtbik7XG5cbiAgICAgIC8vIGFwcC53aW5Db25kaXRpb24oKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKE9iamVjdC52YWx1ZXMoYXBwLmNvbHVtbnMpKTtcblxuXG5cbiAgICAgIGNvbnN0IGNvdW50ZXIgPSBPYmplY3QudmFsdWVzKGFwcC5jb2x1bW5zKTtcbiAgICAgIGxldCBpID0gY2VsbE51bSAtIDE7XG4gICAgICBjb25zdCBqID0gJCh0aGlzKS5kYXRhKFwiYXJyYXlcIik7XG4gICAgICBpZiAoY291bnRlcltqXS5sZW5ndGggPiAxICYmIGNvdW50ZXJbal1baV0gPT09IGNvdW50ZXJbal1baSAtIDFdICYmIGNvdW50ZXJbal1baSAtIDFdID09PSBjb3VudGVyW2pdW2kgLSAyXSAmJiBjb3VudGVyW2pdW2kgLSAyXSA9PT0gY291bnRlcltqXVtpIC0gM10pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbm5lcicpO1xuICAgICAgICBhbGVydCgnd2lubmVyJyk7XG4gICAgICB9XG4gICAgICAvLyBpZiAoY291bnRlclsxXVtpXSA9PT0gY291bnRlclsxXVtpIC0gMV0gJiYgY291bnRlclsxXVtpIC0gMV0gPT09IGNvdW50ZXJbMV1baSAtIDJdICYmIGNvdW50ZXJbMV1baSAtIDJdID09PSBjb3VudGVyWzFdW2kgLSAzXSkge1xuICAgICAgLy8gICBhbGVydCgnd2lubmVyJyk7XG4gICAgICAvLyB9XG4gICAgICAvLyBpZiAoY291bnRlclsyXVtpXSA9PT0gY291bnRlclsyXVtpIC0gMV0gJiYgY291bnRlclsyXVtpIC0gMV0gPT09IGNvdW50ZXJbMl1baSAtIDJdICYmIGNvdW50ZXJbMl1baSAtIDJdID09PSBjb3VudGVyWzJdW2kgLSAzXSkge1xuICAgICAgLy8gICBhbGVydCgnd2lubmVyJyk7XG4gICAgICAvLyB9XG4gICAgICAvLyBpZiAoY291bnRlclszXVtpXSA9PT0gY291bnRlclszXVtpIC0gMV0gJiYgY291bnRlclszXVtpIC0gMV0gPT09IGNvdW50ZXJbM11baSAtIDJdICYmIGNvdW50ZXJbM11baSAtIDJdID09PSBjb3VudGVyWzNdW2kgLSAzXSkge1xuICAgICAgLy8gICBhbGVydCgnd2lubmVyJyk7XG4gICAgICAvLyB9XG4gICAgICAvLyBpZiAoY291bnRlcls0XVtpXSA9PT0gY291bnRlcls0XVtpIC0gMV0gJiYgY291bnRlcls0XVtpIC0gMV0gPT09IGNvdW50ZXJbNF1baSAtIDJdICYmIGNvdW50ZXJbNF1baSAtIDJdID09PSBjb3VudGVyWzRdW2kgLSAzXSkge1xuICAgICAgLy8gICBhbGVydCgnd2lubmVyJyk7XG4gICAgICAvLyB9XG4gICAgICAvLyBpZiAoY291bnRlcls1XVtpXSA9PT0gY291bnRlcls1XVtpIC0gMV0gJiYgY291bnRlcls1XVtpIC0gMV0gPT09IGNvdW50ZXJbNV1baSAtIDJdICYmIGNvdW50ZXJbNV1baSAtIDJdID09PSBjb3VudGVyWzVdW2kgLSAzXSkge1xuICAgICAgLy8gICBhbGVydCgnd2lubmVyJyk7XG4gICAgICAvLyB9XG4gICAgICAvLyBpZiAoY291bnRlcls2XVtpXSA9PT0gY291bnRlcls2XVtpIC0gMV0gJiYgY291bnRlcls2XVtpIC0gMV0gPT09IGNvdW50ZXJbNl1baSAtIDJdICYmIGNvdW50ZXJbNl1baSAtIDJdID09PSBjb3VudGVyWzZdW2kgLSAzXSkge1xuICAgICAgLy8gICBhbGVydCgnd2lubmVyJyk7XG4gICAgICAvLyB9XG5cblxuXG5cbiAgICB9XG4gIH0pO1xufVxuXG4vLyBDSEVDSyBXSE9TRSBUVVJOIEFORCBVUERBVEUgVFVSTiBPUkRFUlxuYXBwLmNoYW5nZVR1cm4gPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgY3VycmVudENvbG9yID0gYXBwLm5leHRUdXJuW2FwcC5uZXh0VHVybi5sZW5ndGggLSAxXTtcbiAgaWYgKGN1cnJlbnRDb2xvciA9PT0gJ3JlZCcpIHtcbiAgICBhcHAubmV4dFR1cm4ucHVzaCgneWVsbG93Jyk7XG4gICAgJCgnLnR1cm4taW5kaWNhdG9yJykudGV4dChgWWVsbG93YCk7XG4gIH0gZWxzZSBpZiAoY3VycmVudENvbG9yID09PSAneWVsbG93Jykge1xuICAgIGFwcC5uZXh0VHVybi5wdXNoKCdyZWQnKTtcbiAgICAkKCcudHVybi1pbmRpY2F0b3InKS50ZXh0KGBSZWRgKTtcbiAgfVxufTtcblxuLy8gYXBwLndpbkNvbmRpdGlvbiA9IGZ1bmN0aW9uKCkge1xuLy8gICBjb25zdCBjb3VudGVyID0gT2JqZWN0LnZhbHVlcyhhcHAuY29sdW1ucyk7XG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDc7IGkrKykge1xuLy8gICAgIGlmIChjb3VudGVyW2ldW2ldID09PSBjb3VudGVyW2ldW2krMV0gJiYgY291bnRlcltpXVtpKzFdID09PSBjb3VudGVyW2ldW2krMl0gJiYgY291bnRlcltpXVtpKzJdID09PSBjb3VudGVyW2ldW2krM10pIHtcbi8vICAgICAgIGFsZXJ0KCdZb3Ugd2luISEnKVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5hcHAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICBhcHAuYWRkUGllY2UoKTtcbn1cblxuLy8gRE9DVU1FTlQgUkVBRFlcbiQoZnVuY3Rpb24oKSB7XG4gIGFwcC5pbml0KCk7XG59KSJdfQ==
