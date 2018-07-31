// Global
const deck = document.querySelector('.deck');
let toggleCards = []; // store all cards in an array
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 function shuffleDeck() {
    const cardsToShuffle = document.querySelectorAll('.deck li');
 }
 shuffleDeck();

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 deck.addEventListener('click', event => {
    const clickTarget = event.target;
    if (isMoveValid(clickTarget
        )) {
        toggleCard(clickTarget);
        addToggleCard(clickTarget);
        if (toggleCards.length === 2) {
            checkMatch(clickTarget);
        }
    }
 });

//Function to check that target doesnt contain class "card" & match", not more than 2 cards
function isMoveValid(clickTarget) {
    return (
            clickTarget.classList.contains('card') && 
            !clickTarget.classList.contains('match') &&
            toggleCards.length < 2 &&
            !toggleCards.includes(clickTarget)
        );
}
// Function to toggle cards
function toggleCard(card){
    card.classList.toggle('open');
    card.classList.toggle('show');
 }
// Function to push clickTarget into toggleCards array
function addToggleCard(clickTarget) {
    toggleCards.push(clickTarget);
    console.log(toggleCards);
}
// Function to check if the cards match
function checkMatch() {
    if (
        toggleCards[0].firstElementChild.className === toggleCards[1].firstElementChild.className
        ) { // Toggle match class
            toggleCards[0].classList.toggle('match');
            toggleCards[1].classList.toggle('match');  
    } else {
        setTimeout(() => {
            toggleCard(toggleCards[0]);
            toggleCard(toggleCards[1]);
            toggleCards = [];
    }, 1000);
}
}
