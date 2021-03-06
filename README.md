# Memory Card Game Project
A Front-End JS/HTML/CSS Web app for Udacity Front-End Nannodegree

### Play
https://hellodiara.github.io/memory-card-game/
* Clicking on tiles will flip them over so that you can see what they hide.
* Your goal is to match two tiles of the same type at a time.
* Then try to match all pairs while making minimum moves.
* At the end of the game it will show how much time it took you, and rate your game base on the moves you made.
* You can restart the game as many as you can by clicking on the refresh button.

### Screenshot
![Screenshot of Memory Card Game](https://github.com/hellodiara/memory-card-game/blob/master/img/memorycard_game.png)

## Table of Contents

* [Project Instructions](#instructions)
* [Project Requirements](#project-requirements)

## Instructions

We were provided with a starter project file with some HTML and CSS styling to display a static version of the Memory Card Game project. We needed to convert this project from a static project to an interactive one. This required modifying the HTML and CSS files, but primarily the JavaScript file.

## Project Requirements

### Memory Game Logic
The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

### Congratulations Popup
When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.

### Restart Button
A restart button allows the player to reset the game board, the timer, and the star rating.
Star Rating

### Star Rating
The game displays a star rating (from 1 to at least 3) that reflects the player's performance. At the beginning of a game, it should display at least 3 stars. After some number of moves, it should change to a lower star rating. After a few more moves, it should change to a even lower star rating (down to 1).

The number of moves needed to change the rating is up to you, but it should happen at some point.

### Timer
When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.

### Move Counter
Game displays the current number of moves a user has made.







