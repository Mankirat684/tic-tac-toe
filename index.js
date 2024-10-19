const player1 = {
  marker: "X",
};
const player2 = {
  marker: "O",
};
const gameBoard = (function () {
  const btn = document.querySelector(".newgame");
  const mainGame = document.querySelectorAll(".grids");
  let currentSymbol = "";
  let prevSymbol = "";
  let symbol = "";
  let gameStatus = true;
  const setMarker = () => {
    if (currentSymbol == "") {
      symbol = player1.marker;
      currentSymbol = symbol;
    } else if (currentSymbol == player1.marker) {
      symbol = player2.marker;
      prevSymbol = player1.marker;
      currentSymbol = symbol;
    } else if (currentSymbol == player2.marker) {
      symbol = player1.marker;
      prevSymbol = player2.marker;
      currentSymbol = symbol;
    }
  };
  const gamePlay = () => {
    mainGame.forEach((grid) =>
      grid.addEventListener("click", () => {
        if (grid.innerText == "" && gameStatus) {
          setMarker();
          grid.innerText = symbol;
        }
        seeWin(mainGame);
        draw();
      })
    );
  };
  const gameNew = function () {
    btn.addEventListener("click", function () {
      mainGame.forEach((grid) => {
        grid.innerText = "";
        currentSymbol = "";
        prevSymbol = "";
        symbol = "";
      });
      const res = document.querySelector(".result");
      res.innerText = "";
      gameStatus = true;
      gamePlay();
    });
  };
  const newGame = function () {
    gameStatus = false;
  };
  function displayStatus(player) {
    const res = document.querySelector(".result");
    res.innerText = `${player} wins`;
  }
  const seeWin = function (arr) {
    if (
      arr[0].innerText == arr[1].innerText &&
      arr[0].innerText == arr[2].innerText &&
      arr[0].innerText != ""
    ) {
      if (currentSymbol == player1.marker) {
        displayStatus("player1");
      } else if (currentSymbol == player2.marker) {
        displayStatus("player2");
      }
      newGame();
    } else if (
      arr[0].innerText == arr[3].innerText &&
      arr[0].innerText == arr[6].innerText &&
      arr[0].innerText != ""
    ) {
      if (currentSymbol == player1.marker) {
        displayStatus("player1");
      } else if (currentSymbol == player2.marker) {
        displayStatus("player2");
      }
      newGame();
    } else if (
      arr[0].innerText == arr[4].innerText &&
      arr[0].innerText == arr[8].innerText &&
      arr[0].innerText != ""
    ) {
      if (currentSymbol == player1.marker) {
        displayStatus("player1");
      } else if (currentSymbol == player2.marker) {
        displayStatus("player2");
      }
      newGame();
    } else if (
      arr[2].innerText == arr[5].innerText &&
      arr[2].innerText == arr[8].innerText &&
      arr[2].innerText != ""
    ) {
      if (currentSymbol == player1.marker) {
        displayStatus("player1");
      } else if (currentSymbol == player2.marker) {
        displayStatus("player2");
      }
      newGame();
    } else if (
      arr[1].innerText == arr[4].innerText &&
      arr[1].innerText == arr[7].innerText &&
      arr[1].innerText != ""
    ) {
      if (currentSymbol == player1.marker) {
        displayStatus("player1");
      } else if (currentSymbol == player2.marker) {
        displayStatus("player2");
      }
      newGame();
    } else if (
      arr[3].innerText == arr[4].innerText &&
      arr[3].innerText == arr[5].innerText &&
      arr[3].innerText != ""
    ) {
      if (currentSymbol == player1.marker) {
        displayStatus("player1");
      } else if (currentSymbol == player2.marker) {
        displayStatus("player2");
      }
      newGame();
    } else if (
      arr[6].innerText == arr[7].innerText &&
      arr[6].innerText == arr[8].innerText &&
      arr[6].innerText != ""
    ) {
      if (currentSymbol == player1.marker) {
        displayStatus("player1");
      } else if (currentSymbol == player2.marker) {
        displayStatus("player2");
      }
      newGame();
    } else if (
      arr[2].innerText == arr[4].innerText &&
      arr[2].innerText == arr[6].innerText &&
      arr[2].innerText != ""
    ) {
      if (currentSymbol == player1.marker) {
        displayStatus("player1");
      } else if (currentSymbol == player2.marker) {
        displayStatus("player2");
      }
      newGame();
    }
  };
  function draw() {
    const checkDraw = [...mainGame].every((grid) => grid.innerText != "");
    if (checkDraw) {
      console.log("game is drew");
      newGame();
      const res = document.querySelector(".result");
      res.innerText = `draw`;
    }
  }

  return {
    symbol,
    currentSymbol,
    gameStatus,
    setMarker,
    gamePlay,
    gameNew,
    newGame,
    displayStatus,
    seeWin,
    draw,
  };
})();
gameBoard.gamePlay();
gameBoard.gameNew();
