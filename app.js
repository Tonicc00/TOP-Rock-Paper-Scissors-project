

// This function gets computers choice and returns it 

function getComputerChoice(){
    const choice = ['Rock', 'Papper', 'Scissors'];
    return choice[Math.floor(Math.random()*choice.length)];
};

/* This function plays a round of RPS, has player and computer
selection as parameters and returns a string declaring a winner/looser,
tie or invalid word*/


let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection = prompt('Your choice:', '').toLowerCase(), computerSelection = getComputerChoice()){
    
    
    if(playerSelection === 'rock' && computerSelection === 'Papper' 
    || playerSelection === 'paper' && computerSelection === 'Scisors'
    || playerSelection === 'scissors' && computerSelection === 'Rock'){
        ++computerWins;
        playerWins;
        console.log(`You loose! ${computerSelection} beats ${playerSelection}.`, playerWins, computerWins);
    } else if (playerSelection === 'paper' && computerSelection === 'Papper'
    || playerSelection === 'rock' && computerSelection === 'Rock'
    || playerSelection === 'scissors' && computerSelection === 'Scissors'){
        playerWins;
        computerWins;
        console.log(`${computerSelection}, it's a tie!`, playerWins, computerWins);
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors' 
    || playerSelection === 'paper' && computerSelection === 'Rock'
    || playerSelection === 'scissors' && computerSelection === 'Papper'){
        computerWins;
        ++playerWins;
        console.log(`Congradulations, ${playerSelection} beats ${computerSelection.toLowerCase()}.`, playerWins, computerWins);
    } else if (playerSelection !== 'rock' || playerSelection !== 'paper' || 
    playerSelection !== 'scissors'){
        console.log('Invalid word!');
    }
};

/* This function keeps score of the 5 rounds of game and
declares a winner or loser at the end */

function game(){
    // There should be a counter
    // Counter should increment by 1 after every round
    // When the counter hits 5, the game is over

    // There should be a loop which triggers the counter incrementation
    // Maybe I could use two counters, one for each player

    for(let i = 0; i < 5; i++){
        if(i <= 5){
            playRound(playerSelection = prompt('Your choice:', '').toLowerCase(), computerSelection = getComputerChoice());
        }
    }
    if(playerWins > computerWins){
        console.log(`${playerWins} ${computerWins} Bravo! Men will live! `);
    } else if (computerWins > playerWins){
        console.log(`${playerWins} ${computerWins} Men are doomed.` );
    } else {
        console.log(`${playerWins} ${computerWins} We are gonna have to play more.`);
    }
};
game();