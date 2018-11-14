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

// DOCUMENT READY
$(function () {

  // CLICK ON COLUMN TO ADD PIECE
  function addPiece() {
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
      }
    });
  }

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
  };

  addPiece();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLElBQU0sVUFBVTtBQUNkLEtBQUcsRUFEVztBQUVkLEtBQUcsRUFGVztBQUdkLEtBQUcsRUFIVztBQUlkLEtBQUcsRUFKVztBQUtkLEtBQUcsRUFMVztBQU1kLEtBQUcsRUFOVztBQU9kLEtBQUc7QUFQVyxDQUFoQjtBQVNBLElBQU0sV0FBVyxDQUFDLEtBQUQsQ0FBakI7O0FBR0E7QUFDQSxFQUFFLFlBQVc7O0FBRVg7QUFDQSxXQUFTLFFBQVQsR0FBb0I7QUFDbEIsTUFBRSxTQUFGLEVBQWEsRUFBYixDQUFnQixPQUFoQixFQUF5QixZQUFZO0FBQ25DLFVBQU0sUUFBUSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsUUFBYixDQUFkO0FBQ0EsVUFBTSxpQkFBaUIsYUFBVyxLQUFYLENBQXZCO0FBQ0EsVUFBSSxlQUFlLE1BQWYsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0IsY0FBTSxlQUFOO0FBQ0QsT0FGRCxNQUVPLElBQUksZUFBZSxNQUFmLEdBQXdCLENBQTVCLEVBQStCO0FBQ3BDLFlBQU0sUUFBUSxTQUFTLFNBQVMsTUFBVCxHQUFrQixDQUEzQixDQUFkO0FBQ0EsWUFBTSxVQUFVLGVBQWUsTUFBZixHQUF3QixDQUF4QztBQUNBLHVCQUFhLEtBQWIsZUFBNEIsT0FBNUIsRUFBdUMsUUFBdkMsTUFBbUQsS0FBbkQ7QUFDQSx1QkFBZSxJQUFmLE1BQXVCLEtBQXZCO0FBQ0E7QUFDRDtBQUNGLEtBWkQ7QUFhRDs7QUFFRDtBQUNBLFdBQVMsVUFBVCxHQUFzQjtBQUNwQixRQUFNLGVBQWUsU0FBUyxTQUFTLE1BQVQsR0FBa0IsQ0FBM0IsQ0FBckI7QUFDQSxRQUFJLGlCQUFpQixLQUFyQixFQUE0QjtBQUMxQixlQUFTLElBQVQsQ0FBYyxRQUFkO0FBQ0EsUUFBRSxpQkFBRixFQUFxQixJQUFyQjtBQUNELEtBSEQsTUFHTyxJQUFJLGlCQUFpQixRQUFyQixFQUErQjtBQUNwQyxlQUFTLElBQVQsQ0FBYyxLQUFkO0FBQ0EsUUFBRSxpQkFBRixFQUFxQixJQUFyQjtBQUNEO0FBQ0Y7O0FBRUQ7QUFHRCxDQWxDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEFSUkFZU1xuY29uc3QgY29sdW1ucyA9IHtcbiAgYTogW10sXG4gIGI6IFtdLFxuICBjOiBbXSxcbiAgZDogW10sXG4gIGU6IFtdLFxuICBmOiBbXSxcbiAgZzogW11cbn1cbmNvbnN0IG5leHRUdXJuID0gWydyZWQnXTtcblxuXG4vLyBET0NVTUVOVCBSRUFEWVxuJChmdW5jdGlvbigpIHtcblxuICAvLyBDTElDSyBPTiBDT0xVTU4gVE8gQUREIFBJRUNFXG4gIGZ1bmN0aW9uIGFkZFBpZWNlKCkge1xuICAgICQoJy5jb2x1bW4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBpbmRleCA9ICQodGhpcykuZGF0YShcImNvbHVtblwiKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gY29sdW1uc1tgJHtpbmRleH1gXVxuICAgICAgaWYgKHNlbGVjdGVkQ29sdW1uLmxlbmd0aCA9PT0gNikge1xuICAgICAgICBhbGVydCgnSW52YWxpZCBtb3ZlIScpO1xuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZENvbHVtbi5sZW5ndGggPCA2KSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gbmV4dFR1cm5bbmV4dFR1cm4ubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IGNlbGxOdW0gPSBzZWxlY3RlZENvbHVtbi5sZW5ndGggKyAxO1xuICAgICAgICAkKGAuY29sdW1uLSR7aW5kZXh9IC5jZWxsLSR7Y2VsbE51bX1gKS5hZGRDbGFzcyhgJHtjb2xvcn1gKTtcbiAgICAgICAgc2VsZWN0ZWRDb2x1bW4ucHVzaChgJHtjb2xvcn1gKTtcbiAgICAgICAgY2hhbmdlVHVybigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gQ0hFQ0sgV0hPU0UgVFVSTiBBTkQgVVBEQVRFIFRVUk4gT1JERVJcbiAgZnVuY3Rpb24gY2hhbmdlVHVybigpIHtcbiAgICBjb25zdCBjdXJyZW50Q29sb3IgPSBuZXh0VHVybltuZXh0VHVybi5sZW5ndGggLSAxXTtcbiAgICBpZiAoY3VycmVudENvbG9yID09PSAncmVkJykge1xuICAgICAgbmV4dFR1cm4ucHVzaCgneWVsbG93Jyk7XG4gICAgICAkKCcudHVybi1pbmRpY2F0b3InKS50ZXh0KGBZZWxsb3cgUGxheWVyYCk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50Q29sb3IgPT09ICd5ZWxsb3cnKSB7XG4gICAgICBuZXh0VHVybi5wdXNoKCdyZWQnKTtcbiAgICAgICQoJy50dXJuLWluZGljYXRvcicpLnRleHQoYFJlZCBQbGF5ZXJgKTtcbiAgICB9XG4gIH07XG5cbiAgYWRkUGllY2UoKTtcblxuXG59KSJdfQ==
