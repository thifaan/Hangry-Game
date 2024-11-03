const wishes = [
  "You look stupid when you smile",
  "Your armpits stink",
  "What a loser ❤️",
  "NERD!!!!",
  "YAAHOOOO🎉",
  "Padre nuestro 🌟",
  "SUCKS TO BE YOUUUU",
  "I hate you✨"
];

const gameBoard = document.getElementById('gameBoard');
const surpriseMessage = document.getElementById('surpriseMessage');

function createTile(index) {
  const tile = document.createElement('div');
  tile.className = 'tile';
  tile.dataset.index = index;
  tile.innerText = '?'; // Initial display
  tile.addEventListener('click', revealWish);
  gameBoard.appendChild(tile);
}

function revealWish(event) {
  const tile = event.target;
  const index = tile.dataset.index;

  if (tile.innerText === '?') {
      tile.innerText = wishes[index]; // Show the wish
      checkAllRevealed();
  }
}

function checkAllRevealed() {
  const tiles = document.querySelectorAll('.tile');
  const allRevealed = Array.from(tiles).every(tile => tile.innerText !== '?');

  if (allRevealed) {
      surpriseMessage.classList.remove('hidden'); // Show surprise message
  }
}

// Create the game board with tiles
wishes.forEach((_, index) => createTile(index));
