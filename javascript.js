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
}

// declare three variables: win, tie, and lose for usage in counting the number of wins, ties, and losses for a given game.
let win = 0;
let tie = 0;
let lose = 0;

// function that plays a 5 round game of rock-paper-scissors that keeps the score
function game() {
    for (let i = 0; i < 5; i++)
    {
        const playerSelection = prompt('Choose rock, paper, or scissors: ');
        const computerSelection = computerPlay();
        const outcome = playRound(playerSelection.toLowerCase(), computerSelection);
        console.log(outcome);

        if (outcome == 'You Win! Rock beats Scissors.' || outcome == 'You Win! Paper beats Rock.' || outcome == 'You Win! Scissors beats Paper.') {
            win = ++win;
            console.log(win);
        } else if (outcome == 'You Tie! Rock ties with Rock.' || outcome == 'You Tie! Paper ties with Paper.' || outcome == 'You Tie! Scissors ties with Scissors.') {
            tie = ++tie;
            console.log(tie);
        } else if (outcome == 'You Lose! Rock loses to Paper.' || outcome == 'You Lose! Paper loses to Scissors.' || outcome == 'You Lose! Scissors loses to Rock.') {
            lose = ++lose;
            console.log(lose);
        }
    }
    result(win, tie, lose);
}

// function that determines the winner or loser of the game
function result(win, tie, lose) {
    if (win == 5 || win == 4 || win == 3) {
        console.log('You win the game!');
    } else if (lose == 5 || lose == 4 || lose == 3) {
        console.log('You lose the game.');
    } else if (tie == 5 || win == 1 & lose == 1 && tie ==3 || win == 2 && lose == 2 && tie == 1) {
        console.log('You tie the game.');
    } else {
        console.log('error');
    }
}

game();