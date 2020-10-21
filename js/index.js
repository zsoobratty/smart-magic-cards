const suit = ['hearts', 'diamonds', 'clubs', 'spades'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const btnWrapper = document.querySelector('.btn-wrapper'); /* eslint-disable-line */
const selectedCardsWrapper = document.querySelector('.selected-cards'); /* eslint-disable-line */
let cards = []


function createCards() {
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

  // Shuffle button
  const shuffleBtn = document.createElement('button')
  shuffleBtn.classList.add('btn', 'btn-lg', 'btn-secondary')
  shuffleBtn.setAttribute('id', 'shuffle')
  shuffleBtn.textContent = 'Shuffle'
  shuffleBtn.style.margin = '10px'
  shuffleBtn.addEventListener('click', shuffleCards);
  btnWrapper.append(shuffleBtn)

  // Flip button
  const flipBtn = document.createElement('button')
  flipBtn.classList.add('btn', 'btn-lg', 'btn-secondary')
  flipBtn.textContent = 'Flip'
  flipBtn.style.margin = '10px'
  btnWrapper.append(flipBtn)
  
  // Magic button
  const magicBtn = document.createElement('button')
  magicBtn.classList.add('btn', 'btn-lg', 'btn-secondary')
  magicBtn.textContent = 'Magic'
  magicBtn.style.margin = '10px'
  magicBtn.hidden = true
  btnWrapper.append(magicBtn)
}

// Function to shuffle the cards using the shuffle button
function shuffleCards() {
  console.log(cards.length)
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let tempCard = cards[i]
    cards[i] = cards[j]
    cards[j] = tempCard
  }
  console.log(cards)
  console.log(cards.length)
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
