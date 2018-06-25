// List that holds all the cards
var cards = [ 'fa-diamond' , 'fa-diamond',
            'fa-paper-plane-o', 'fa-paper-plane-o',
            'fa-anchor', 'fa-anchor',
            'fa-bolt', 'fa-bolt',
            'fa-cube', 'fa-cube',
            'fa-leaf', 'fa-leaf',
            'fa-bicycle', 'fa-bicycle',
            'fa-bomb', 'fa-bomb'
];

function generateCard(card) {
    return '<li class='card'><i class='fa $(card)'></i></li>';
}

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

function initGame() {
    var deck = document.querySelector('.deck');
    var cardHTML = shuffle(cards).map(function(card) {
        return generateCard(card);
    });

    deck.innerHTML = cardHTML.join('');
}

initGame();

 /*  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// Display the card's symbol when clicked
var allCards = document.querySelectorAll('.card');
var openCards = [];

allCards.forEach(function(card) {
    card.addEventListener('click' , function(e) {
        if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {
        openCards.push(card);
        card.classList.add('open' , 'show');

        //Check if the cards match
        var firstCardType = openCards[0].dataset.card;
        console.log(firstCardType);

        //Cards disappear if they don't match
        if (openCards.length >=2)  {
            setTimeout(function(){
                openCards.forEach(function(card) {
                    card.classList.remove('open' , 'show');
                });

                openCards = [];
            }, 1000);
        }

    }
        
    });
 });
