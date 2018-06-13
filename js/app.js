// Card array that holds all cards
let card = document.getElementsByClassName("card");
let cards = [...card]
console.log(cards);

// Card deck of all the cards in the game.
const deck = document.getElementById("card-deck");

// Moves
let moves = 0;
let counter = document.querySelector(".moves");

// Matched Cards variable
let matchedCard = document.getElementsByClassName("match");

// Star icons variable
const stars = document.querySelectorAll(".fa-star");

// List of stars variable
 let listOfStars = document.querySelectorAll(".stars li");

/*

 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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
// Shuffles the cards when page is refreshed.
document.body.onload = startGame();

function startGame() {
	cards= shuffle(cards);

}

// Display Cards
var showCard = function () {
	this.classList.toggle("open");
	this.classList.toggle("show");
	this.classList.toggle("disabled");
};
// Event listener for when a card is clicked:
 document.querySelectorAll(".card").addEventListener("click", showCard);

 /*  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
