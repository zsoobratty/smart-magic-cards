const suit = ['hearts', 'spades', 'diamonds', 'clubs'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const btnWrapper = document.querySelector(
  '.btn-wrapper'
); /* eslint-disable-line */
const selectedCardsWrapper = document.querySelector(
  '.selected-cards'
); /* eslint-disable-line */
let cards = [];
let selectedCard = '';

// Creates an object with values and suits
function createCards() {
  // Create an array with objects containing the value and the suit of each card
  for (let x = 0; x < suit.length; x += 1) {
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit: suit[x],
      };
      cards.push(cardObject);
    }
  }
  renderCards();
}

// Takes object and gives it elements to render onto page
function renderCards() {
  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 27;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.setAttribute('id', `${card.suit}-${card.value}`);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardElement.style.animation = 'enterFromLeft';
    cardElement.style.animationDuration = '0.5s';
    cardElement.addEventListener('click', selectCard);
    cardsWrapper.append(cardElement);
  });
}

// Function to shuffle the cards using the shuffle button
function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tempCard = cards[i];
    cards[i] = cards[j];
    cards[j] = tempCard;
  }
  cardsWrapper.innerHTML = '';
  renderCards();
}

// Function to create new shuffle and flip buttons
function createButtons() {
  // Generate buttons
  // Shuffle button
  const shuffleBtn = document.createElement('button');
  shuffleBtn.classList.add('btn', 'btn-lg', 'btn-secondary');
  shuffleBtn.setAttribute('id', 'shuffle');
  shuffleBtn.textContent = 'Shuffle';
  shuffleBtn.style.margin = '10px';
  shuffleBtn.addEventListener('click', shuffleCards);
  btnWrapper.append(shuffleBtn);

  // Flip button
  const flipBtn = document.createElement('button');
  flipBtn.classList.add('btn', 'btn-lg', 'btn-secondary');
  flipBtn.setAttribute('id', 'flip');
  flipBtn.textContent = 'Flip cards';
  flipBtn.style.margin = '10px';
  flipBtn.addEventListener('click', () => {
    cardsWrapper.classList.toggle('hidden');
  });
  btnWrapper.append(flipBtn);
}

// Separate generation of magic button as not required until card selection
function handleMagicBtn() {
  const selectedCardValue = selectedCard.getAttribute('data-value');
  const cardMatches = document.querySelectorAll(
    `[data-value='${selectedCardValue}']`
  );
  cardMatches.forEach((card, index) => {
    card.style.left = `${index * 30}px`;
    selectedCardsWrapper.append(card);
  });
  generatePlayBtn();
  btnWrapper.removeChild(document.getElementById('shuffle'));
  btnWrapper.removeChild(document.getElementById('flip'));
  btnWrapper.removeChild(document.getElementById('magic'));
}

// Function to create the magic button
function createMagicBtn() {
  const magicBtn = document.createElement('button');
  magicBtn.classList.add('btn', 'btn-lg', 'btn-secondary');
  magicBtn.setAttribute('id', 'magic');
  magicBtn.textContent = 'Magic';
  magicBtn.style.margin = '10px';
  magicBtn.addEventListener('click', handleMagicBtn);
  magicBtn.addEventListener('click', () => new Audio('../assets/sounds/magic.wav').play());
  btnWrapper.append(magicBtn);
}

// Function to select the card that is clicked and append to selectedCardsWrapper
function selectCard(e) {
  if (!selectedCardsWrapper.hasChildNodes()) {
    e.target.style.left = '0px';
    selectedCardsWrapper.appendChild(e.target);
    selectedCard = e.target;
    removeCardFromDeck();
    createMagicBtn();
  }
}

// Function to remove the selected card from the cards array
function removeCardFromDeck() {
  const selectedCardNo = parseInt(
    selectedCard.getAttribute('id').split('-')[1]
  );
  const selectedCardSuit = selectedCard.getAttribute('id').split('-')[0];
  const filterCriteria = {
    value: selectedCardNo,
    suit: selectedCardSuit,
  };
  cards = cards.filter((card) => {
    for (const key in filterCriteria) {
      if (card[key] === undefined || card[key] !== filterCriteria[key]) return true
    }
    return false;
  });
}

// Function to reset everything for a new game
function handlePlayAgain() {
  selectedCard = '';
  selectedCardsWrapper.innerHTML = '';
  cardsWrapper.innerHTML = '';
  cards = [];
  btnWrapper.removeChild(document.getElementById('play-again'));
  startGame();
}

// Function to generate the play button
function generatePlayBtn() {
  const playBtn = document.createElement('button');
  playBtn.classList.add('btn', 'btn-lg', 'btn-secondary');
  playBtn.setAttribute('id', 'play-again');
  playBtn.textContent = 'Play Again?';
  playBtn.style.margin = '10px';
  playBtn.addEventListener('click', handlePlayAgain);
  btnWrapper.append(playBtn);
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
  if (document.getElementById('start-game')) {
    document.getElementById('start-game').remove();
  }
}

document.getElementById('start-game').addEventListener('click', startGame);