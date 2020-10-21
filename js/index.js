const suit = ['hearts', 'diamonds', 'clubs', 'spades'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const btnWrapper = document.querySelector('.btn-wrapper'); /* eslint-disable-line */
const selectedCardsWrapper = document.querySelector('.selected-cards'); /* eslint-disable-line */
let cards = []
let selectedCard = ''

// Creates an object with values and suits
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
  renderCards()
}

// Takes object and gives it elements to render onto page
function renderCards() {
    // For each dataObject, create a new card and append it to the DOM
    cards.forEach((card, i) => {
      const positionFromLeft = i * 27;
      const cardElement = document.createElement('div');
      cardElement.setAttribute('data-value', card.value);
      cardElement.setAttribute('id', `${card.suit}-${card.value}`)
      cardElement.classList.add('card', `${card.suit}-${card.value}`);
      cardElement.style.left = `${positionFromLeft}px`;
      cardElement.addEventListener('click', selectCard)
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
  flipBtn.setAttribute('id', 'flip')
  flipBtn.textContent = 'Flip'
  flipBtn.style.margin = '10px'
  flipBtn.addEventListener('click', () => {
    cardsWrapper.classList.toggle('hidden')
  })
  btnWrapper.append(flipBtn)
  
}

function createMagicBtn() {
  const magicBtn = document.createElement('button')
  magicBtn.classList.add('btn', 'btn-lg', 'btn-secondary')
  magicBtn.setAttribute('id', 'magic')
  magicBtn.textContent = 'Magic'
  magicBtn.style.margin = '10px'
  magicBtn.addEventListener('click', handleMagicBtn)
  btnWrapper.append(magicBtn)
}

// Function to shuffle the cards using the shuffle button
function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i))
    let tempCard = cards[i]
    cards[i] = cards[j]
    cards[j] = tempCard
  }
  renderCards()
}

function selectCard(e) {
  if(selectedCardsWrapper.children.length === 0) {
    e.target.style.left = '0px'
    selectedCardsWrapper.appendChild(e.target)
    selectedCard = e.target
    createMagicBtn()
  }
  document.getElementById('shuffle').disabled = true
}

function handleMagicBtn() {
  const selectedCardValue = selectedCard.getAttribute('data-value')
  const cardMatches = document.querySelectorAll(`[data-value='${selectedCardValue}']`)
  cardMatches.forEach((card, index) => {
    card.style.left = `${index * 30}px`
    selectedCardsWrapper.append(card)
  })
  generatePlayBtn()
}

function generatePlayBtn() {
  btnWrapper.removeChild(document.getElementById('shuffle'))
  btnWrapper.removeChild(document.getElementById('flip'))
  btnWrapper.removeChild(document.getElementById('magic'))
  const playBtn = document.createElement('button')
  playBtn.classList.add('btn', 'btn-lg', 'btn-secondary')
  playBtn.setAttribute('id', 'play-again')
  playBtn.textContent = 'Play Again?'
  playBtn.style.margin = '10px'
  playBtn.addEventListener('click', handlePlayAgain)
  btnWrapper.append(playBtn)
}

function handlePlayAgain() {
  selectedCard = ''
  selectedCardsWrapper.innerHTML = ''
  cardsWrapper.innerHTML = ''
  cards = []
  console.log(selectedCardsWrapper)
  btnWrapper.removeChild(document.getElementById('play-again'))
  startGame()
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);


// Crazy logic for the memories:
// cardsWrapper.onclick = (e) => {
//   if (selectedCardsWrapper.classList.length === 1) {
//     const arrCard = [...e.target.classList]
//     document.getElementById(arrCard[1]).remove()
//     selectedCardsWrapper.classList.add(arrCard[0], arrCard[1])
//     selectedCardsWrapper.setAttribute('id', arrCard[1])
//     document.getElementById('shuffle').disabled = true
//     document.getElementById('magic').hidden = false
//   } else {
//     alert('You have already selected a card')
//   }
// }


