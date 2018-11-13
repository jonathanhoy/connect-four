(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

// ARRAYS

var columnA = [];
var columnB = [];
var columnC = [];
var columnD = [];
var columnE = [];
var columnF = [];
var columnG = [];
var columnList = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

$(function () {

  // CLICK ON COLUMN TO ADD MARKER
  $('.column-a').on('click', function () {
    if (columnA.length >= 6) {
      console.log('this column is full');
    } else if (columnA.length < 6) {
      columnA.push('marker');
      console.log(columnA);
    }
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFFQSxJQUFNLFVBQVUsRUFBaEI7QUFDQSxJQUFNLFVBQVUsRUFBaEI7QUFDQSxJQUFNLFVBQVUsRUFBaEI7QUFDQSxJQUFNLFVBQVUsRUFBaEI7QUFDQSxJQUFNLFVBQVUsRUFBaEI7QUFDQSxJQUFNLFVBQVUsRUFBaEI7QUFDQSxJQUFNLFVBQVUsRUFBaEI7QUFDQSxJQUFNLGFBQWEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsQ0FBbkI7O0FBRUEsRUFBRSxZQUFNOztBQUVOO0FBQ0EsSUFBRSxXQUFGLEVBQWUsRUFBZixDQUFrQixPQUFsQixFQUEyQixZQUFNO0FBQy9CLFFBQUksUUFBUSxNQUFSLElBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLGNBQVEsR0FBUixDQUFZLHFCQUFaO0FBQ0QsS0FGRCxNQUVPLElBQUksUUFBUSxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQzdCLGNBQVEsSUFBUixDQUFhLFFBQWI7QUFDQSxjQUFRLEdBQVIsQ0FBWSxPQUFaO0FBQ0Q7QUFDRixHQVBEO0FBUUQsQ0FYRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEFSUkFZU1xuXG5jb25zdCBjb2x1bW5BID0gW107XG5jb25zdCBjb2x1bW5CID0gW107XG5jb25zdCBjb2x1bW5DID0gW107XG5jb25zdCBjb2x1bW5EID0gW107XG5jb25zdCBjb2x1bW5FID0gW107XG5jb25zdCBjb2x1bW5GID0gW107XG5jb25zdCBjb2x1bW5HID0gW107XG5jb25zdCBjb2x1bW5MaXN0ID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJ11cblxuJCgoKSA9PiB7XG4gIFxuICAvLyBDTElDSyBPTiBDT0xVTU4gVE8gQUREIE1BUktFUlxuICAkKCcuY29sdW1uLWEnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGNvbHVtbkEubGVuZ3RoID49IDYpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGNvbHVtbiBpcyBmdWxsJylcbiAgICB9IGVsc2UgaWYgKGNvbHVtbkEubGVuZ3RoIDwgNikge1xuICAgICAgY29sdW1uQS5wdXNoKCdtYXJrZXInKTtcbiAgICAgIGNvbnNvbGUubG9nKGNvbHVtbkEpO1xuICAgIH1cbiAgfSlcbn0pIl19
