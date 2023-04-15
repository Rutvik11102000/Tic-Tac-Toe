// javascript code goes here
let player1 = "X";
let player2 = "O";
let currentPlayer = player1;
let moves = 0;
let cells = document.querySelectorAll(".board button");

// Add click event listeners to all cells
cells.forEach((cell) => {
	cell.addEventListener("click", () => {
		if (cell.textContent === "") {
			cell.textContent = currentPlayer;
			moves++;
			checkWin();
			currentPlayer = currentPlayer === player1 ? player2 : player1;
		}
	});
});

// Check if someone has won
function checkWin() {
	let winner = null;
	const winningCombos = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 9],
		[3, 5, 7]
	];
	for (let i = 0; i < winningCombos.length; i++) {
		const [a, b, c] = winningCombos[i];
		if (cells[a - 1].textContent === currentPlayer && cells[b - 1].textContent === currentPlayer && cells[c - 1].textContent === currentPlayer) {
			winner = currentPlayer;
			break;
		}
	}
	if (winner !== null) {
		alert(`Congratulations! ${winner} wins.`);
		resetGame();
	} else if (moves === 9) {
		alert("Draw! The match is drawn after all boxes are filled and nobody has won.");
		resetGame();
	}
}

// Reset the game
function resetGame() {
	currentPlayer = player1;
	moves = 0;
	cells.forEach((cell) => {
		cell.textContent = "";
	});
}