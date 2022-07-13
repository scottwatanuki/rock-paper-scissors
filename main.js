function resetGame() {
    //reset game
}

// function to execute computer randomly generating rock, paper, or scissors
function computerPlay() {
    let result = Math.floor(Math.random()*3);
    if (result == 0) {
        return 'rock';
    } else if (result == 1) {
        return 'paper';
    } else if (result == 2) {
        return 'scissors';
    } else {
        return error;
    }
}

// function to execute one round of rock-paper-scissors between player and computer
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'You Tie! Rock ties with Rock.';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You Lose! Rock loses to Paper.';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You Win! Rock beats Scissors.';
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'You Tie! Paper ties with Paper.';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You Lose! Paper loses to Scissors.';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You Win! Paper beats Rock.';
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'You Tie! Scissors ties with Scissors.';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You Lose! Scissors loses to Rock.';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You Win! Scissors beats Paper.';
    }
    
    let wins = game();
    if (wins >= 5) {
        return;
    }
}

// declare three variables: win, tie, and lose for usage in counting the number of wins, ties, and losses for a given game.
let win = 0;
let tie = 0;
let lose = 0;

// function that plays a 5 round game of rock-paper-scissors that keeps the score
function game() {
    //every single image will be listening to a click from the player
    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) =>  
    img.addEventListener(('click'), () =>{
        if(img.id) {
            playRound(img.id);
        }
    }))

    const computerSelection = computerPlay();
    const outcome = playRound(playerSelection, computerSelection);
    //console.log(outcome);

    if (outcome == 'You Win! Rock beats Scissors.' || outcome == 'You Win! Paper beats Rock.' || outcome == 'You Win! Scissors beats Paper.') {
        win = ++win;
        return(win);
    } else if (outcome == 'You Tie! Rock ties with Rock.' || outcome == 'You Tie! Paper ties with Paper.' || outcome == 'You Tie! Scissors ties with Scissors.') {
        tie = ++tie;
        return(tie);
    } else if (outcome == 'You Lose! Rock loses to Paper.' || outcome == 'You Lose! Paper loses to Scissors.' || outcome == 'You Lose! Scissors loses to Rock.') {
        lose = ++lose;
        return(lose);
    }

    document.querySelector(".playerScore").textContent = `Score ${win}`;
    document.querySelector(".computerScore").textContent = `Score ${lose}`;
    document.querySelector(".ties").textContent = `Score ${tie}`;
    result(win, tie, lose); 
    return Math.max(win, lose);
}

function displayRound(playerSelection, computerSelection, winner)

// function that determines the winner or loser of the game
/* function result(win, tie, lose) {
    if (win == 5 || win == 4 || win == 3) {
        return('You win the game!');
    } else if (lose == 5 || lose == 4 || lose == 3) {
        return('You lose the game.');
    } else if (tie == 5 || win == 1 & lose == 1 && tie ==3 || win == 2 && lose == 2 && tie == 1) {
        return('You tie the game.');
    } else {
        return('error');
    }
} */

game(); // run game