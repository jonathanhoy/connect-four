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
var turnOrder = ['red'];

$(function () {

  // CLICK ON COLUMN TO ADD PIECE
  $('.column-a').on('click', function () {
    if (columnA.length >= 6) {
      alert('Invalid move!');
    } else if (columnA.length < 6) {
      columnA.push('piece');
      console.log('A', columnA);
      checkTurn();
    }
  });

  $('.column-b').on('click', function () {
    if (columnB.length >= 6) {
      alert('Invalid move!');
    } else if (columnB.length < 6) {
      columnB.push('piece');
      console.log('B', columnB);
      checkTurn();
    }
  });

  $('.column-c').on('click', function () {
    if (columnC.length >= 6) {
      alert('Invalid move!');
    } else if (columnC.length < 6) {
      columnC.push('piece');
      console.log('C', columnC);
      checkTurn();
    }
  });

  $('.column-d').on('click', function () {
    if (columnD.length >= 6) {
      alert('Invalid move!');
    } else if (columnD.length < 6) {
      columnD.push('piece');
      console.log('D', columnD);
      checkTurn();
    }
  });

  $('.column-e').on('click', function () {
    if (columnE.length >= 6) {
      alert('Invalid move!');
    } else if (columnE.length < 6) {
      columnE.push('piece');
      console.log('E', columnE);
      checkTurn();
    }
  });

  $('.column-f').on('click', function () {
    if (columnF.length >= 6) {
      alert('Invalid move!');
    } else if (columnF.length < 6) {
      columnF.push('piece');
      console.log('F', columnF);
      checkTurn();
    }
  });

  function checkTurn() {
    var lastTurn = turnOrder.length - 1;
    if (turnOrder[lastTurn] === 'red') {
      turnOrder.push('yellow');
      console.log(turnOrder);
    } else if (turnOrder[lastTurn] === 'yellow') {
      turnOrder.push('red');
      console.log(turnOrder);
    }
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFFQSxJQUFNLFVBQVUsRUFBaEI7QUFDQSxJQUFNLFVBQVUsRUFBaEI7QUFDQSxJQUFNLFVBQVUsRUFBaEI7QUFDQSxJQUFNLFVBQVUsRUFBaEI7QUFDQSxJQUFNLFVBQVUsRUFBaEI7QUFDQSxJQUFNLFVBQVUsRUFBaEI7QUFDQSxJQUFNLFVBQVUsRUFBaEI7QUFDQSxJQUFNLGFBQWEsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsQ0FBbkI7QUFDQSxJQUFNLFlBQVksQ0FBQyxLQUFELENBQWxCOztBQUVBLEVBQUUsWUFBTTs7QUFFTjtBQUNBLElBQUUsV0FBRixFQUFlLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsWUFBTTtBQUMvQixRQUFJLFFBQVEsTUFBUixJQUFrQixDQUF0QixFQUF5QjtBQUN2QixZQUFNLGVBQU47QUFDRCxLQUZELE1BRU8sSUFBSSxRQUFRLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0I7QUFDN0IsY0FBUSxJQUFSLENBQWEsT0FBYjtBQUNBLGNBQVEsR0FBUixDQUFZLEdBQVosRUFBaUIsT0FBakI7QUFDQTtBQUNEO0FBQ0YsR0FSRDs7QUFVQSxJQUFFLFdBQUYsRUFBZSxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLFlBQU07QUFDL0IsUUFBSSxRQUFRLE1BQVIsSUFBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsWUFBTSxlQUFOO0FBQ0QsS0FGRCxNQUVPLElBQUksUUFBUSxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQzdCLGNBQVEsSUFBUixDQUFhLE9BQWI7QUFDQSxjQUFRLEdBQVIsQ0FBWSxHQUFaLEVBQWlCLE9BQWpCO0FBQ0E7QUFDRDtBQUNGLEdBUkQ7O0FBVUEsSUFBRSxXQUFGLEVBQWUsRUFBZixDQUFrQixPQUFsQixFQUEyQixZQUFNO0FBQy9CLFFBQUksUUFBUSxNQUFSLElBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLFlBQU0sZUFBTjtBQUNELEtBRkQsTUFFTyxJQUFJLFFBQVEsTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUM3QixjQUFRLElBQVIsQ0FBYSxPQUFiO0FBQ0EsY0FBUSxHQUFSLENBQVksR0FBWixFQUFpQixPQUFqQjtBQUNBO0FBQ0Q7QUFDRixHQVJEOztBQVVBLElBQUUsV0FBRixFQUFlLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsWUFBTTtBQUMvQixRQUFJLFFBQVEsTUFBUixJQUFrQixDQUF0QixFQUF5QjtBQUN2QixZQUFNLGVBQU47QUFDRCxLQUZELE1BRU8sSUFBSSxRQUFRLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0I7QUFDN0IsY0FBUSxJQUFSLENBQWEsT0FBYjtBQUNBLGNBQVEsR0FBUixDQUFZLEdBQVosRUFBaUIsT0FBakI7QUFDQTtBQUNEO0FBQ0YsR0FSRDs7QUFVQSxJQUFFLFdBQUYsRUFBZSxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLFlBQU07QUFDL0IsUUFBSSxRQUFRLE1BQVIsSUFBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsWUFBTSxlQUFOO0FBQ0QsS0FGRCxNQUVPLElBQUksUUFBUSxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQzdCLGNBQVEsSUFBUixDQUFhLE9BQWI7QUFDQSxjQUFRLEdBQVIsQ0FBWSxHQUFaLEVBQWlCLE9BQWpCO0FBQ0E7QUFDRDtBQUNGLEdBUkQ7O0FBVUEsSUFBRSxXQUFGLEVBQWUsRUFBZixDQUFrQixPQUFsQixFQUEyQixZQUFNO0FBQy9CLFFBQUksUUFBUSxNQUFSLElBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLFlBQU0sZUFBTjtBQUNELEtBRkQsTUFFTyxJQUFJLFFBQVEsTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUM3QixjQUFRLElBQVIsQ0FBYSxPQUFiO0FBQ0EsY0FBUSxHQUFSLENBQVksR0FBWixFQUFpQixPQUFqQjtBQUNBO0FBQ0Q7QUFDRixHQVJEOztBQVVBLFdBQVMsU0FBVCxHQUFxQjtBQUNuQixRQUFNLFdBQVcsVUFBVSxNQUFWLEdBQW1CLENBQXBDO0FBQ0EsUUFBSSxVQUFVLFFBQVYsTUFBd0IsS0FBNUIsRUFBbUM7QUFDakMsZ0JBQVUsSUFBVixDQUFlLFFBQWY7QUFDQSxjQUFRLEdBQVIsQ0FBWSxTQUFaO0FBQ0QsS0FIRCxNQUdPLElBQUksVUFBVSxRQUFWLE1BQXdCLFFBQTVCLEVBQXNDO0FBQzNDLGdCQUFVLElBQVYsQ0FBZSxLQUFmO0FBQ0EsY0FBUSxHQUFSLENBQVksU0FBWjtBQUNEO0FBQ0Y7QUFHRixDQTNFRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEFSUkFZU1xuXG5jb25zdCBjb2x1bW5BID0gW107XG5jb25zdCBjb2x1bW5CID0gW107XG5jb25zdCBjb2x1bW5DID0gW107XG5jb25zdCBjb2x1bW5EID0gW107XG5jb25zdCBjb2x1bW5FID0gW107XG5jb25zdCBjb2x1bW5GID0gW107XG5jb25zdCBjb2x1bW5HID0gW107XG5jb25zdCBjb2x1bW5MaXN0ID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJ107XG5jb25zdCB0dXJuT3JkZXIgPSBbJ3JlZCddO1xuXG4kKCgpID0+IHtcbiAgXG4gIC8vIENMSUNLIE9OIENPTFVNTiBUTyBBREQgUElFQ0VcbiAgJCgnLmNvbHVtbi1hJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChjb2x1bW5BLmxlbmd0aCA+PSA2KSB7XG4gICAgICBhbGVydCgnSW52YWxpZCBtb3ZlIScpO1xuICAgIH0gZWxzZSBpZiAoY29sdW1uQS5sZW5ndGggPCA2KSB7XG4gICAgICBjb2x1bW5BLnB1c2goJ3BpZWNlJyk7XG4gICAgICBjb25zb2xlLmxvZygnQScsIGNvbHVtbkEpO1xuICAgICAgY2hlY2tUdXJuKCk7XG4gICAgfVxuICB9KVxuXG4gICQoJy5jb2x1bW4tYicpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoY29sdW1uQi5sZW5ndGggPj0gNikge1xuICAgICAgYWxlcnQoJ0ludmFsaWQgbW92ZSEnKTtcbiAgICB9IGVsc2UgaWYgKGNvbHVtbkIubGVuZ3RoIDwgNikge1xuICAgICAgY29sdW1uQi5wdXNoKCdwaWVjZScpO1xuICAgICAgY29uc29sZS5sb2coJ0InLCBjb2x1bW5CKTtcbiAgICAgIGNoZWNrVHVybigpO1xuICAgIH1cbiAgfSlcblxuICAkKCcuY29sdW1uLWMnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGNvbHVtbkMubGVuZ3RoID49IDYpIHtcbiAgICAgIGFsZXJ0KCdJbnZhbGlkIG1vdmUhJyk7XG4gICAgfSBlbHNlIGlmIChjb2x1bW5DLmxlbmd0aCA8IDYpIHtcbiAgICAgIGNvbHVtbkMucHVzaCgncGllY2UnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdDJywgY29sdW1uQyk7XG4gICAgICBjaGVja1R1cm4oKTtcbiAgICB9XG4gIH0pXG5cbiAgJCgnLmNvbHVtbi1kJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChjb2x1bW5ELmxlbmd0aCA+PSA2KSB7XG4gICAgICBhbGVydCgnSW52YWxpZCBtb3ZlIScpO1xuICAgIH0gZWxzZSBpZiAoY29sdW1uRC5sZW5ndGggPCA2KSB7XG4gICAgICBjb2x1bW5ELnB1c2goJ3BpZWNlJyk7XG4gICAgICBjb25zb2xlLmxvZygnRCcsIGNvbHVtbkQpO1xuICAgICAgY2hlY2tUdXJuKCk7XG4gICAgfVxuICB9KVxuXG4gICQoJy5jb2x1bW4tZScpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoY29sdW1uRS5sZW5ndGggPj0gNikge1xuICAgICAgYWxlcnQoJ0ludmFsaWQgbW92ZSEnKTtcbiAgICB9IGVsc2UgaWYgKGNvbHVtbkUubGVuZ3RoIDwgNikge1xuICAgICAgY29sdW1uRS5wdXNoKCdwaWVjZScpO1xuICAgICAgY29uc29sZS5sb2coJ0UnLCBjb2x1bW5FKTtcbiAgICAgIGNoZWNrVHVybigpO1xuICAgIH1cbiAgfSlcblxuICAkKCcuY29sdW1uLWYnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGNvbHVtbkYubGVuZ3RoID49IDYpIHtcbiAgICAgIGFsZXJ0KCdJbnZhbGlkIG1vdmUhJyk7XG4gICAgfSBlbHNlIGlmIChjb2x1bW5GLmxlbmd0aCA8IDYpIHtcbiAgICAgIGNvbHVtbkYucHVzaCgncGllY2UnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdGJywgY29sdW1uRik7XG4gICAgICBjaGVja1R1cm4oKTtcbiAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gY2hlY2tUdXJuKCkge1xuICAgIGNvbnN0IGxhc3RUdXJuID0gdHVybk9yZGVyLmxlbmd0aCAtIDE7XG4gICAgaWYgKHR1cm5PcmRlcltsYXN0VHVybl0gPT09ICdyZWQnKSB7XG4gICAgICB0dXJuT3JkZXIucHVzaCgneWVsbG93Jyk7XG4gICAgICBjb25zb2xlLmxvZyh0dXJuT3JkZXIpO1xuICAgIH0gZWxzZSBpZiAodHVybk9yZGVyW2xhc3RUdXJuXSA9PT0gJ3llbGxvdycpIHtcbiAgICAgIHR1cm5PcmRlci5wdXNoKCdyZWQnKTtcbiAgICAgIGNvbnNvbGUubG9nKHR1cm5PcmRlcik7XG4gICAgfVxuICB9XG5cbiAgXG59KSJdfQ==
