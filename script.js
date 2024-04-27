let currentPlayer = "O";
let box = document.getElementsByClassName("box");

function print(element) {
    if(element.textContent !="") alert("can't change");
    else{
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
        element.textContent = currentPlayer;
        checkWinner(this);
    }
}

function checkWinner(element) {
    // Check for all winning conditions
    
     if (
        (box[0].textContent === currentPlayer && box[1].textContent === currentPlayer && box[2].textContent === currentPlayer) ||
        (box[3].textContent === currentPlayer && box[4].textContent === currentPlayer && box[5].textContent === currentPlayer) ||
        (box[6].textContent === currentPlayer && box[7].textContent === currentPlayer && box[8].textContent === currentPlayer) ||
        (box[0].textContent === currentPlayer && box[3].textContent === currentPlayer && box[6].textContent === currentPlayer) ||
        (box[1].textContent === currentPlayer && box[4].textContent === currentPlayer && box[7].textContent === currentPlayer) ||
        (box[2].textContent === currentPlayer && box[5].textContent === currentPlayer && box[8].textContent === currentPlayer) ||
        (box[0].textContent === currentPlayer && box[4].textContent === currentPlayer && box[8].textContent === currentPlayer) ||
        (box[2].textContent === currentPlayer && box[4].textContent === currentPlayer && box[6].textContent === currentPlayer)
    ) {
        // If currentPlayer wins
        element.textContent = currentPlayer;
            alert(currentPlayer + " wins");
        resetGame();
    } else {
        // Check for draw
        let flag = true;
        for (let i = 0; i < box.length; i++) {
            if (box[i].textContent === "") {
                flag = false;
                break;
            }
        }
        if (flag) {
            alert("Game draw");
            resetGame();
        }
    }
}

function resetGame() {
    for (let i = 0; i < box.length; i++) {
        box[i].textContent = "";
    }
    currentPlayer="O";
}
