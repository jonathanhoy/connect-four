const app = {};

app.columns = {
  a: [],
  b: [],
  c: [],
  d: [],
  e: [],
  f: [],
  g: []
}
app.nextTurn = ['red'];

app.chaosColors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "WhiteSmoke", "Yellow", "YellowGreen"];

app.addPiece = function () {
  $('.column').on('click keyup', function (e) {
    if (e.type === 'click' || e.type === 'keyup' && e.which === 32 || e.type === 'keyup' && e.which === 13) {
      const index = $(this).data("column");
      const selectedColumn = app.columns[`${index}`];
      if (selectedColumn.length === 6) {
        swal({
          title: `Can't do that! 🙅🏻‍♂`
        });
      } else if (selectedColumn.length < 6) {
        const color = app.nextTurn[app.nextTurn.length - 1];
        const cellNum = selectedColumn.length + 1;
        const i = Object.values(app.columns);
        const x = $(this).data("array");
        const y = cellNum - 1;
        app.placeMarker(index, cellNum, color, selectedColumn);
        app.changeTurn();
        app.checkForWin(i, x, y, color);
        app.tieGame();
      }
    }
  });
}

app.placeMarker = function(index, cellNum, color, selectedColumn) {
  app.randomColor = app.chaosColors[Math.floor(Math.random() * app.chaosColors.length) + 1];
  if (app.chaosMode === true) {
    $(`.column-${index} .cell-${cellNum}`).append(`<div class="piece animated jello infinite faster"></div>`).css('background-color', `${app.randomColor}`);
  } else {
    $(`.column-${index} .cell-${cellNum}`).append(`<div class="piece ${color} animated fadeInDownBig faster"></div>`);
  }
  selectedColumn.push(`${color}`);
}

app.changeTurn = function() {
  const currentColor = app.nextTurn[app.nextTurn.length - 1];
  if (currentColor === 'red') {
    app.nextTurn.push('yellow');
    $('.turn-indicator').text(`Yellow`);
  } else if (currentColor === 'yellow') {
    app.nextTurn.push('red');
    $('.turn-indicator').text(`Red`);
  }
};

app.checkForWin = function(i, x, y, color) {
  app.checkForVerticalWin(i, x, y, color);
  app.checkForHorizontalWin(i, x, y, color);
  app.checkForDiagonalWin(i, x, y, color);
}

app.checkForVerticalWin = function(i, x, y, color) {
  if (i[x][y] === i[x][y - 1] && i[x][y] === i[x][y - 2] && i[x][y] === i[x][y - 3]) {
    app.alertWin(color);
  }
}

app.checkForDiagonalWin = function(i, x, y, color) {
  if (
    // DIAGONAL WINS (TOP-LEFT TO BOTTOM-RIGHT = TL-BR, BOTTOM-LEFT TO TOP-RIGHT = BL-TR) (POS */4 = LEFT-TO-RIGHT)
    (i[x + 3] !== undefined && i[x][y] === i[x + 3][y - 3] && i[x + 2] !== undefined && i[x][y] === i[x + 2][y - 2] && i[x + 1] !== undefined && i[x][y] === i[x + 1][y - 1]) || // TL-BR POS 1/4
    (i[x + 2] !== undefined && i[x][y] === i[x + 2][y - 2] && i[x + 1] !== undefined && i[x][y] === i[x + 1][y - 1] && i[x - 1] !== undefined && i[x][y] === i[x - 1][y + 1]) || // TL-BR POS 2/4
    (i[x + 1] !== undefined && i[x][y] === i[x + 1][y - 1] && i[x - 1] !== undefined && i[x][y] === i[x - 1][y + 1] && i[x - 2] !== undefined && i[x][y] === i[x - 2][y + 2]) || // TL-BR POS 3/4
    (i[x - 1] !== undefined && i[x][y] === i[x - 1][y + 1] && i[x - 2] !== undefined && i[x][y] === i[x - 2][y + 2] && i[x - 3] !== undefined && i[x][y] === i[x - 3][y + 3]) || // TL-BR POS 4/4
    (i[x + 3] !== undefined && i[x][y] === i[x + 3][y + 3] && i[x + 2] !== undefined && i[x][y] === i[x + 2][y + 2] && i[x + 1] !== undefined && i[x][y] === i[x + 1][y + 1]) || // BL-TR POS 1/4
    (i[x + 2] !== undefined && i[x][y] === i[x + 2][y + 2] && i[x + 1] !== undefined && i[x][y] === i[x + 1][y + 1] && i[x - 1] !== undefined && i[x][y] === i[x - 1][y - 1]) || // BL-TR POS 2/4
    (i[x + 1] !== undefined && i[x][y] === i[x + 1][y + 1] && i[x - 1] !== undefined && i[x][y] === i[x - 1][y - 1] && i[x - 2] !== undefined && i[x][y] === i[x - 2][y - 2]) || // BL-TR POS 3/4
    (i[x - 1] !== undefined && i[x][y] === i[x - 1][y - 1] && i[x - 2] !== undefined && i[x][y] === i[x - 2][y - 2] && i[x - 3] !== undefined && i[x][y] === i[x - 3][y - 3])    // BL-TR POS 4/4
    ) {
      app.alertWin(color);
  }
}

app.checkForHorizontalWin = function(i, x, y, color) {
  if (
    (i[x + 3] !== undefined && i[x][y] === i[x + 3][y] && i[x + 2] !== undefined && i[x][y] === i[x + 2][y] && i[x + 1] !== undefined && i[x][y] === i[x + 1][y]) ||
    (i[x + 2] !== undefined && i[x][y] === i[x + 2][y] && i[x + 1] !== undefined && i[x][y] === i[x + 1][y] && i[x - 1] !== undefined && i[x][y] === i[x - 1][y]) ||
    (i[x + 1] !== undefined && i[x][y] === i[x + 1][y] && i[x - 1] !== undefined && i[x][y] === i[x - 1][y] && i[x - 2] !== undefined && i[x][y] === i[x - 2][y]) ||
    (i[x - 1] !== undefined && i[x][y] === i[x - 1][y] && i[x - 2] !== undefined && i[x][y] === i[x - 2][y] && i[x - 3] !== undefined && i[x][y] === i[x - 3][y])
    ) {
      app.alertWin(color);
  }
}

app.tieGame = function() {
  if (
    app.columns.a.length === 6 &&
    app.columns.b.length === 6 &&
    app.columns.c.length === 6 &&
    app.columns.d.length === 6 &&
    app.columns.e.length === 6 &&
    app.columns.f.length === 6 &&
    app.columns.g.length === 6
    ) {
      swal({
        title: 'Tie game! Please play again!'
      }).then(app.resetBoard())
    }
}

app.alertWin = function(color) {
  color = color.charAt(0).toUpperCase() + color.slice(1);
  window.setTimeout(function() {
    swal({
      title: `Congratulations ${color} player!`,
      text: `Winner Winner Chicken Dinner! 🍗`,
    }).then(app.resetBoard());
  }, 650);
}


// EVENT LISTENERS

// Button to show instructions
$('.instructions-show-button').on('click', function() {
  $('.instructions-modal-container').show();
})

// Button to hide instructions
$('.instructions-hide-button').on('click', function(e) {
  $('.instructions-modal-container').hide();
})

// Play again button that clears board and arrays
$('.play-again-button').on('click', function() {
  app.resetBoard();
})

document.addEventListener('keyup', function(e) {
  if (e.which === 27) {
    $('.instructions-modal-container').hide();
  }
})

app.resetBoard = () => {
  $('button').on('click', function () {
    app.columns = {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
      f: [],
      g: [],
      h: [],
      i: [],
      j: []
    }
    $('.piece').remove();
    $('.cell').css('background-color', 'white');
  })
}

// CHAOS MODE
// Konami code credit: https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html

app.allowedKeys = {
  76: 'l',
  73: 'i',
  70: 'f',
  69: 'e',
  83: 's',
  67: 'c',
  72: 'h',
  65: 'a',
  79: 'o'
};

app.konamiCode = ['l', 'i', 'f', 'e', 'i', 's', 'c', 'h', 'a', 'o', 's'];

app.konamiCodePosition = 0;

app.chaosMode = false;

document.addEventListener('keydown', function(e) {
  const key = app.allowedKeys[e.keyCode];
  const requiredKey = app.konamiCode[app.konamiCodePosition];
  if (key === requiredKey) {
    app.konamiCodePosition++;
    if (app.konamiCodePosition === app.konamiCode.length) {
      app.chaosMode = true;
      app.konamiCodePosition = 0;
      const text = 'life is chaos 😈'.toUpperCase();
      swal({
        title: text,
      });
      app.chaosTitle();
    }
  } else {
    app.konamiCodePosition = 0;
  }
})

app.chaosTitle = function() {
  setInterval(function () {
    const random = (app.chaosColors[Math.floor(Math.random() * app.chaosColors.length)]).toString();
    const text = ('life is chaos').toUpperCase();
    $('.main-title').text(`${text}`);
    $('.main-title').css('color', `${random}`);
  }, 50)
}

// Chaos mode button event listener for mobile
$('.chaos-button').on('click', function () {
  $('.instructions-modal-container').hide();
  app.chaosMode = true;
  app.konamiCodePosition = 0;
  const text = 'life is chaos 😈'.toUpperCase();
  swal({
    title: text,
    content: 'a'
  });
  app.chaosTitle();
})

// INIT
app.init = function() {
  app.addPiece();
}

// DOCUMENT READY
$(function() {
  app.init();
})