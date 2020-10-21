const suit = ['hearts', 'diamonds', 'clubs', 'spades'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const btnWrapper = document.querySelector('.btn-wrapper'); /* eslint-disable-line */
const selectedCardsWrapper = document.querySelector('.selected-cards'); /* eslint-disable-line */

function createCards() {
  const cards = [];
  // Create an array with objects containing the value and the suit of each card
  for (let x = 0; x <= 3; x++) {
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit: suit[x],
      };
      cards.push(cardObject);
    }
  }


  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 27;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Hide button when game starts
  const startBtn = document.getElementById('start-game')
  startBtn.hidden = true

  // Generate buttons
  const shuffleBtn = document.createElement('button')
  shuffleBtn.classList.add('btn', 'btn-lg', 'btn-secondary')
  shuffleBtn.textContent = 'Shuffle'
  btnWrapper.append(shuffleBtn)

  const flipBtn = document.createElement('button')
  flipBtn.classList.add('btn', 'btn-lg', 'btn-secondary')
  flipBtn.textContent = 'Flip'
  btnWrapper.append(flipBtn)

  const magicBtn = document.createElement('button')
  magicBtn.classList.add('btn', 'btn-lg', 'btn-secondary')
  magicBtn.textContent = 'Magic'
  btnWrapper.append(magicBtn)
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
