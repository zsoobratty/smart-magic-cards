# Smart Magic Cards

## My attempt at Smart Magic Cards
![Running](./assets/gifs/SmartGif.gif)

## How it went
After spending so much time improving my knowledge of React, going back to VanillaJS was a challenge, but one that I've learnt a lot from... with a huge thanks to https://developer.mozilla.org/en-US/docs/Web/API.

I've ticked off the functionality that I've implemented so far in the requirements below, but here are some notes I have about my experience:
- Standard requirements 
  - Kinda just went through these one by one and added functionality. Although this worked and the app is running, I think I could've done with some careful planning, because the further I got into it, the more I was seeing duplications and functions taking on things they shouldn't be responsible for. I've managed to refactor a lot of this but doing it from the start would've saved a lot of time!
- Testing
   - I didn't enable the tests until I'd completed the base requirements. After turning it on I'd come across some errors, some to do with button names and then others to do with my functionality not quite doing what it was supposed to be doing in the background. Fixing the tests definitely helped to learn more about what's going on behind the scenes.
    - I added a play again button, so I've added a test for that button, as well as a duplication of the tests without the 'start game' part to make sure it runs through fine on the next run through.
- Animations 
  - Conscious of time, I only briefly looked into animations as it's not something I've really looked into before. I managed to do an animation on the cards rendering, albeit a bit laggy, which I can only imagine is because I've chosen a horrible way to animate. So I'll be doing some research into this one!
  - Update on this - managed to figure out how to get smoother animations and fixed this.
- SCSS 
  - I've had brief encounters with CSS pre-processors, but it was only during this task that I discovered how useful they are! Being able to have variables and loops and stuff. I felt great about doing the bonus point for the scss duplications.

## Improvements
- I've looked into the drag and drop functionality and it's definitely something that doesn't look overly difficult to implement. So I'd like to try and get this in at some point.
- I separated a lot of functions on reviewing my code after adding functionality, although I managed to separate a lot of it, there still seems to be repetition with the elements and the buttons especially. Just some things that could be done to achieve cleaner code.
- Animations are something I need to delve further into. I watched some videos on animations and how they work, but my knowledge isn't so great on that side of things so I'll be doing some further research on that front.

# The task
Join Smart by performing a simple magic trick.

A magician has a deck of cards, 52 cards, 13 of each suit (Hearts, Diamonds, Clubs and Spades).<br>
He will show us all of the cards and we will see that they are ordered and sorted by suit.<br>
We are asked to shuffle the deck.<br>
Then the magician askes us to pick a single card.<br>
When the magician reveals the deck of cards once more, the picked card is removed as well as all the related valued cards.<br>
Eg. the 8 of hears it picked, now all the 8's are removed from the deck and added to the picked card.<br>

### Requirements
- [x] Make sure all 4 suits of cards are rendered and sorted by suit. There are 13 cards in each suit ( ♥, ♣, ♦, ♠ ).
- [x] Make sure the value for each card is visible on the initial render, basically move each card a bit so the card is readable.
- [x] Add 3 buttons to the flow that will allow you to do 3 actions:
  - [x] **Shuffle:** Randomly shuffles all cards.
  - [x] **Flip cards:** Turn all the cards face down by adding a class (CSS is already included).
  - [x] **Magic:** Remove all related cards from the deck after picking a card. (Only display this button after a card has been picked).
- [x] Create the functionality to pick a card, by clicking on a random card.
- [x] When the trick is performed (by clicking the magic button), move the related cards to the picked card.

#### Bonus points
  - [x] Find a way to remove duplications in the `cards.scss` file and generate all the classes automatically for the cards: `.hearts-1`, `.hearts-2`, ... , `.spades-13`.
  - [x] Add animation.
  - [ ] Do not use images for the cards, style them with CSS/SCSS only.
  - [x] Uncomment the tests in the `cypress/integration/magic-trick.js` file and **make sure the tests pass**.
  - [x] Add additional tests (we like test coverage).
  - [ ] Usuage of drag and drop to pick a card.
  - [x] Having a way of resetting the app, withouth reloading the page.
  - [ ] Do not break any linting rules. (The linter runs before tests)
  - [x] Add some extra functionality, this is your chance to be creative. 😉

#### Example
<img src="assets/working-example.gif" alt="working-example">

## Getting Started
Follow these steps to get the project setup on your machine.

### Clone the repository
```
git clone git@github.com:smartpension/smart-magic-cards.git
```
_Note:_ You won't have access to commit to this repository. We suggest you download it or fork it.

<img src="assets/fork-example.png" alt="working-example" width="800">

### Install
```
$ yarn install
```

### Develop
As this is just a static application, opening the `index.html` page in the browser should show you the app.<br>
In order to use the SASS compiler, run the following command.
```
$ yarn develop
```

### Test
In order to run the tests, run one of the folowing commands.
```
$ yarn test       # Test once
$ yarn serve-test # Open and serve the tests
```
_Note:_ [Cypress.io](https://www.cypress.io/) is included in the project and all tests will run with Github Actions.


### Hints
- When performing the trick, use the existing cards rather then create new ones.
- There is a diffirence between an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and a [`HTMLCollection`](https://www.w3schools.com/js/js_htmldom_collections.asp).<br>
The latter does not have the [`array methods`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Common_operations), to convert a `HTMLCollection` into an `array`, you can simply destructure it `[...HTMLCollection]`<br>
<img src="assets/array-hint.png" width=700 alt="array-hint">
