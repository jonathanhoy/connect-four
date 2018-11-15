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
      // console.log(Object.values(app.columns));


      var counter = Object.values(app.columns);
      var i = cellNum - 1;
      if (counter[0].length >= 4 && counter[0][i] === counter[0][i - 1] && counter[0][i - 1] === counter[0][i - 2] && counter[0][i - 2] === counter[0][i - 3]) {
        alert('winner');
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLE9BQUosR0FBYztBQUNaLEtBQUcsRUFEUztBQUVaLEtBQUcsRUFGUztBQUdaLEtBQUcsRUFIUztBQUlaLEtBQUcsRUFKUztBQUtaLEtBQUcsRUFMUztBQU1aLEtBQUcsRUFOUztBQU9aLEtBQUc7QUFQUyxDQUFkO0FBU0EsSUFBSSxRQUFKLEdBQWUsQ0FBQyxLQUFELENBQWY7O0FBRUE7QUFDQSxJQUFJLFFBQUosR0FBZSxZQUFXO0FBQ3hCLElBQUUsU0FBRixFQUFhLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBWTtBQUNuQyxRQUFNLFFBQVEsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFFBQWIsQ0FBZDtBQUNBLFFBQU0saUJBQWlCLElBQUksT0FBSixNQUFlLEtBQWYsQ0FBdkI7QUFDQSxRQUFJLGVBQWUsTUFBZixLQUEwQixDQUE5QixFQUFpQztBQUMvQixZQUFNLGVBQU47QUFDRCxLQUZELE1BRU8sSUFBSSxlQUFlLE1BQWYsR0FBd0IsQ0FBNUIsRUFBK0I7QUFDcEMsVUFBTSxRQUFRLElBQUksUUFBSixDQUFhLElBQUksUUFBSixDQUFhLE1BQWIsR0FBc0IsQ0FBbkMsQ0FBZDtBQUNBLFVBQU0sVUFBVSxlQUFlLE1BQWYsR0FBd0IsQ0FBeEM7QUFDQSxxQkFBYSxLQUFiLGVBQTRCLE9BQTVCLEVBQXVDLFFBQXZDLE1BQW1ELEtBQW5EO0FBQ0EscUJBQWUsSUFBZixNQUF1QixLQUF2QjtBQUNBLFVBQUksVUFBSjs7QUFHQTtBQUNBOzs7QUFJQSxVQUFNLFVBQVUsT0FBTyxNQUFQLENBQWMsSUFBSSxPQUFsQixDQUFoQjtBQUNBLFVBQUksSUFBSSxVQUFVLENBQWxCO0FBQ0EsVUFBSSxRQUFRLENBQVIsRUFBVyxNQUFYLElBQXFCLENBQXJCLElBQTBCLFFBQVEsQ0FBUixFQUFXLENBQVgsTUFBa0IsUUFBUSxDQUFSLEVBQVcsSUFBSSxDQUFmLENBQTVDLElBQWlFLFFBQVEsQ0FBUixFQUFXLElBQUksQ0FBZixNQUFzQixRQUFRLENBQVIsRUFBVyxJQUFJLENBQWYsQ0FBdkYsSUFBNEcsUUFBUSxDQUFSLEVBQVcsSUFBSSxDQUFmLE1BQXNCLFFBQVEsQ0FBUixFQUFXLElBQUksQ0FBZixDQUF0SSxFQUF5SjtBQUN2SixjQUFNLFFBQU47QUFDRDtBQUtGO0FBQ0YsR0E1QkQ7QUE2QkQsQ0E5QkQ7O0FBZ0NBO0FBQ0EsSUFBSSxVQUFKLEdBQWlCLFlBQVc7QUFDMUIsTUFBTSxlQUFlLElBQUksUUFBSixDQUFhLElBQUksUUFBSixDQUFhLE1BQWIsR0FBc0IsQ0FBbkMsQ0FBckI7QUFDQSxNQUFJLGlCQUFpQixLQUFyQixFQUE0QjtBQUMxQixRQUFJLFFBQUosQ0FBYSxJQUFiLENBQWtCLFFBQWxCO0FBQ0EsTUFBRSxpQkFBRixFQUFxQixJQUFyQjtBQUNELEdBSEQsTUFHTyxJQUFJLGlCQUFpQixRQUFyQixFQUErQjtBQUNwQyxRQUFJLFFBQUosQ0FBYSxJQUFiLENBQWtCLEtBQWxCO0FBQ0EsTUFBRSxpQkFBRixFQUFxQixJQUFyQjtBQUNEO0FBQ0YsQ0FURDs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksSUFBSixHQUFXLFlBQVc7QUFDcEIsTUFBSSxRQUFKO0FBQ0QsQ0FGRDs7QUFJQTtBQUNBLEVBQUUsWUFBVztBQUNYLE1BQUksSUFBSjtBQUNELENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBhcHAgPSB7fTtcblxuYXBwLmNvbHVtbnMgPSB7XG4gIGE6IFtdLFxuICBiOiBbXSxcbiAgYzogW10sXG4gIGQ6IFtdLFxuICBlOiBbXSxcbiAgZjogW10sXG4gIGc6IFtdXG59XG5hcHAubmV4dFR1cm4gPSBbJ3JlZCddO1xuXG4vLyBDTElDSyBPTiBDT0xVTU4gVE8gQUREIFBJRUNFXG5hcHAuYWRkUGllY2UgPSBmdW5jdGlvbigpIHtcbiAgJCgnLmNvbHVtbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBpbmRleCA9ICQodGhpcykuZGF0YShcImNvbHVtblwiKTtcbiAgICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGFwcC5jb2x1bW5zW2Ake2luZGV4fWBdO1xuICAgIGlmIChzZWxlY3RlZENvbHVtbi5sZW5ndGggPT09IDYpIHtcbiAgICAgIGFsZXJ0KCdJbnZhbGlkIG1vdmUhJyk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZENvbHVtbi5sZW5ndGggPCA2KSB7XG4gICAgICBjb25zdCBjb2xvciA9IGFwcC5uZXh0VHVyblthcHAubmV4dFR1cm4ubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBjZWxsTnVtID0gc2VsZWN0ZWRDb2x1bW4ubGVuZ3RoICsgMTtcbiAgICAgICQoYC5jb2x1bW4tJHtpbmRleH0gLmNlbGwtJHtjZWxsTnVtfWApLmFkZENsYXNzKGAke2NvbG9yfWApO1xuICAgICAgc2VsZWN0ZWRDb2x1bW4ucHVzaChgJHtjb2xvcn1gKTtcbiAgICAgIGFwcC5jaGFuZ2VUdXJuKCk7XG5cblxuICAgICAgLy8gYXBwLndpbkNvbmRpdGlvbigpO1xuICAgICAgLy8gY29uc29sZS5sb2coT2JqZWN0LnZhbHVlcyhhcHAuY29sdW1ucykpO1xuXG5cblxuICAgICAgY29uc3QgY291bnRlciA9IE9iamVjdC52YWx1ZXMoYXBwLmNvbHVtbnMpO1xuICAgICAgbGV0IGkgPSBjZWxsTnVtIC0gMTtcbiAgICAgIGlmIChjb3VudGVyWzBdLmxlbmd0aCA+PSA0ICYmIGNvdW50ZXJbMF1baV0gPT09IGNvdW50ZXJbMF1baSAtIDFdICYmIGNvdW50ZXJbMF1baSAtIDFdID09PSBjb3VudGVyWzBdW2kgLSAyXSAmJiBjb3VudGVyWzBdW2kgLSAyXSA9PT0gY291bnRlclswXVtpIC0gM10pIHtcbiAgICAgICAgYWxlcnQoJ3dpbm5lcicpO1xuICAgICAgfVxuXG5cblxuXG4gICAgfVxuICB9KTtcbn1cblxuLy8gQ0hFQ0sgV0hPU0UgVFVSTiBBTkQgVVBEQVRFIFRVUk4gT1JERVJcbmFwcC5jaGFuZ2VUdXJuID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGN1cnJlbnRDb2xvciA9IGFwcC5uZXh0VHVyblthcHAubmV4dFR1cm4ubGVuZ3RoIC0gMV07XG4gIGlmIChjdXJyZW50Q29sb3IgPT09ICdyZWQnKSB7XG4gICAgYXBwLm5leHRUdXJuLnB1c2goJ3llbGxvdycpO1xuICAgICQoJy50dXJuLWluZGljYXRvcicpLnRleHQoYFllbGxvd2ApO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRDb2xvciA9PT0gJ3llbGxvdycpIHtcbiAgICBhcHAubmV4dFR1cm4ucHVzaCgncmVkJyk7XG4gICAgJCgnLnR1cm4taW5kaWNhdG9yJykudGV4dChgUmVkYCk7XG4gIH1cbn07XG5cbi8vIGFwcC53aW5Db25kaXRpb24gPSBmdW5jdGlvbigpIHtcbi8vICAgY29uc3QgY291bnRlciA9IE9iamVjdC52YWx1ZXMoYXBwLmNvbHVtbnMpO1xuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8PSA3OyBpKyspIHtcbi8vICAgICBpZiAoY291bnRlcltpXVtpXSA9PT0gY291bnRlcltpXVtpKzFdICYmIGNvdW50ZXJbaV1baSsxXSA9PT0gY291bnRlcltpXVtpKzJdICYmIGNvdW50ZXJbaV1baSsyXSA9PT0gY291bnRlcltpXVtpKzNdKSB7XG4vLyAgICAgICBhbGVydCgnWW91IHdpbiEhJylcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuYXBwLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgYXBwLmFkZFBpZWNlKCk7XG59XG5cbi8vIERPQ1VNRU5UIFJFQURZXG4kKGZ1bmN0aW9uKCkge1xuICBhcHAuaW5pdCgpO1xufSkiXX0=
