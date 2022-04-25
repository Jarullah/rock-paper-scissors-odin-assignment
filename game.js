let playerWins = 0, computerWins = 0, ties = 0, round = 0;

function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    round++
    let result = 'Invalid input! Try again';
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        result = `Tie ! ${playerSelection} vs ${computerSelection}`;
        ties++;
    }else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computerWins++;
        }else if(computerSelection == 'scissors'){
            result = `You Win! ${playerSelection} beats ${computerSelection}`;
            playerWins++;
        }
    } else if (playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            result = `You Win! ${playerSelection} beats ${computerSelection}`;
            playerWins++;
        } else if (computerSelection == 'scissors'){
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computerWins++;
        }
    } else if (playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computerWins++;
        } else if (computerSelection == 'paper'){
            result = `You Win! ${playerSelection} beats ${computerSelection}`;
            playerWins++;
        }
    }

    return result;
}

function game() {
    for(let i = 0; i < 5; i++){
        let playerChoice = window.prompt("Rock, Paper, or Scissors :");
        let computerChoice = computerPlay();
        let result = playRound(playerChoice, computerChoice);
        window.alert(result);
        console.log(result);
    }

    let final_result = `player: ${playerWins} \ncomputer: ${computerWins}\nties: ${ties} \nWinner : ${playerWins > computerWins? 'player': 'computer'}`;
    window.alert(final_result);
    console.log(final_result);
}

function play(e){
    e.stopPropagation();
    let roundResult = document.querySelector('div.round-result');
    let pWins = document.querySelector('div.player');
    let cWins = document.querySelector('div.computer');
    let tie = document.querySelector('div.tie');
    let winner = document.querySelector('div.winner');
    let playerChoice = this.id;
    let computerChoice = computerPlay();
    let result = playRound(playerChoice,computerChoice);

    pWins.innerText = `Player : ${playerWins}`;
    cWins.innerText = `Computer : ${computerWins}`;
    tie.innerText = `Ties : ${ties}`;
    roundResult.classList.add('displayed-result');
    roundResult.innerText = result;

    if(playerWins < 5 || computerWins < 5) winner.innerText = 'Winner: ';

    if(playerWins == 5 || computerWins == 5){
        winner.innerText = `Winner : ${playerWins > computerWins? 'Player': 'Computer'}`;
        playerWins = 0;
        computerWins = 0;
        ties = 0;
        round = 0;
    } 

}


let buttons = document.querySelectorAll('button.choices');
buttons.forEach(button => button.addEventListener('click', play));
let roundResult = document.querySelector('div.round-result');
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('displayed-result');
}
roundResult.addEventListener('transitionend', removeTransition );
// document.querySelector('div.round-result').


// TODO: add event listner to buttons.
// Play the game. 5 rounds.
//game();

