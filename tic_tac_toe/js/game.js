var player1 = '<p class="player1" id="player1">' + 'X' + '</p>';
var player2 = '<p class="player2" id="player2">' + 'O' + '</p>';
var currentPlayer = player1;
var startButton = document.getElementById('resetButton');
var cells = document.getElementsByClassName('gameCell');
var modal = document.querySelector('.modalWrapper');
var winnerDisplay = document.getElementById('winnerDisplay');
var restartTimer = document.getElementById('restartTimer');

startButton.addEventListener('click', init);


// game start
function init() {
    emptyCells();
    clearBackground();
    modal.classList.add('hidden');
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', turn);
    }
}


// remove everything from the cells
function emptyCells() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ''
    }
}

// add event lisnteners to the cells
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', turn);
}


function turn(e) {
    if (cells[e.target.id]) {
        cells[e.target.id].innerHTML = currentPlayer;
        checkBoard(e, currentPlayer);
        switchPlayer(currentPlayer);
    }
}

function switchPlayer(player) {
    (currentPlayer === player1) ? currentPlayer = player2 : currentPlayer = player1;
}

function checkBoard(cell, player) {

    // convert player string to DOM element so we can use the atributes
    var p = document.createRange().createContextualFragment(player);
    var winner = p.lastChild.id;


    if (cells[0].innerText.trim() === 'X' && cells[1].innerText.trim() === 'X' && cells[2].innerText.trim() === 'X') {
        changeBackground(0, 1, 2);
        gameOver(winner);
    } else if (cells[3].innerText.trim() === 'X' && cells[4].innerText.trim() === 'X' && cells[5].innerText.trim() === 'X') {
        changeBackground(3, 4, 5);
        gameOver(winner);
    } else if (cells[6].innerText.trim() === 'X' && cells[7].innerText.trim() === 'X' && cells[8].innerText.trim() === 'X') {
        changeBackground(6, 7, 8);
        gameOver(winner);
    } else if (cells[0].innerText.trim() === 'X' && cells[3].innerText.trim() === 'X' && cells[6].innerText.trim() === 'X') {
        changeBackground(0, 3, 6);
        gameOver(winner);
    } else if (cells[1].innerText.trim() === 'X' && cells[4].innerText.trim() === 'X' && cells[7].innerText.trim() === 'X') {
        changeBackground(1, 4, 7);
        gameOver(winner);
    } else if (cells[2].innerText.trim() === 'X' && cells[5].innerText.trim() === 'X' && cells[8].innerText.trim() === 'X') {
        changeBackground(2, 5, 8);
        gameOver(winner);
    } else if (cells[0].innerText.trim() === 'X' && cells[4].innerText.trim() === 'X' && cells[8].innerText.trim() === 'X') {
        changeBackground(0, 4, 8);
        gameOver(winner);
    } else if (cells[2].innerText.trim() === 'X' && cells[4].innerText.trim() === 'X' && cells[6].innerText.trim() === 'X') {
        changeBackground(2, 4, 6);
        gameOver(winner);
    } else if (cells[0].innerText.trim() === 'O' && cells[1].innerText.trim() === 'O' && cells[2].innerText.trim() === 'O') {
        changeBackground(0, 1, 2);
        gameOver(winner);
    } else if (cells[3].innerText.trim() === 'O' && cells[4].innerText.trim() === 'O' && cells[5].innerText.trim() === 'O') {
        changeBackground(3, 4, 5);
        gameOver(winner);
    } else if (cells[6].innerText.trim() === 'O' && cells[7].innerText.trim() === 'O' && cells[8].innerText.trim() === 'O') {
        changeBackground(6, 7, 8);
        gameOver(winner);
    } else if (cells[0].innerText.trim() === 'O' && cells[3].innerText.trim() === 'O' && cells[6].innerText.trim() === 'O') {
        changeBackground(0, 3, 6);
        gameOver(winner);
    } else if (cells[1].innerText.trim() === 'O' && cells[4].innerText.trim() === 'O' && cells[7].innerText.trim() === 'O') {
        changeBackground(1, 4, 7);
        gameOver(winner);
    } else if (cells[2].innerText.trim() === 'O' && cells[5].innerText.trim() === 'O' && cells[8].innerText.trim() === 'O') {
        changeBackground(2, 5, 8);
        gameOver(winner);
    } else if (cells[0].innerText.trim() === 'O' && cells[4].innerText.trim() === 'O' && cells[8].innerText.trim() === 'O') {
        changeBackground(0, 4, 8);
        gameOver(winner);
    } else if (cells[2].innerText.trim() === 'O' && cells[4].innerText.trim() === 'O' && cells[6].innerText.trim() === 'O') {
        changeBackground(2, 4, 6);
        gameOver(winner);
    } else {
        // test if all cells are filled
        var emptyCells = [];
        for (var i = 0; i < cells.length; i++) {
            if (cells[i].innerText === 'X' || cells[i].innerText === 'O') {
                emptyCells.push(cells[i].innerText);
            }
        }

        if (emptyCells.length === 9) {
            showModal();
        }
    }

}

// background color change on win
function changeBackground(c1, c2, c3) {
    cells[c1].classList.add('win');
    cells[c2].classList.add('win');
    cells[c3].classList.add('win');
}

// remove background color
function clearBackground() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].classList.remove('win');
    }
}



function gameOver(winner) {
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turn);
    }
    showModal(winner);
}


function showModal(winner) {
    var msg;
    if (!winner) {
        msg = 'TIE!';
    } else {
        msg = 'Winner is ' + winner;
    }

    modal.classList.remove('hidden');
    winnerDisplay.innerText = msg;
    var time = 3;
    var countDown = setInterval(function () {
        restartTimer.innerText = time;
        time--;
        if (time < 0) {
            init();
            clearInterval(countDown);
            time = 3;
            restartTimer.innerText = '';
        }
    }, 1000);

}