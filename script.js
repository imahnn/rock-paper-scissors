console.log("Welcome To RPS");

function getComputerChoice(){
    let randomNumber = Math.floor((Math.random()) * 3);
    if (randomNumber === 1){
        return "rock";
    }else if (randomNumber === 2){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    let humanValue = prompt("Rock, Paper or Scissors: ");
    humanValue = humanValue.toLowerCase();
    return humanValue;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice,){
    if (humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors"
    ){
        roundResult.textContent = "Tie!";
    }else if (humanChoice === "rock" && computerChoice === "paper"){
        roundResult.textContent = "You Lose! Paper beats Rock";
        computerScore++;
        humanScoreText.textContent = humanScore;
        computerScoreText.textContent = computerScore;
    }else if (humanChoice === "rock" && computerChoice === "scissors"){
        roundResult.textContent = "You Win! Rock beats Scissors";
        humanScore++;
        humanScoreText.textContent = humanScore;
        computerScoreText.textContent = computerScore;
    }else if (humanChoice === "paper" && computerChoice === "rock"){
        roundResult.textContent = "You Win! Paper beats Rock";
        humanScore++;
        humanScoreText.textContent = humanScore;
        computerScoreText.textContent = computerScore;
    }else if (humanChoice === "paper" && computerChoice === "scissors"){
        roundResult.textContent = "You Lose! Scissors beats Paper";
        computerScore++;
        humanScoreText.textContent = humanScore;
        computerScoreText.textContent = computerScore;
    }else if (humanChoice === "scissors" && computerChoice === "rock"){
        roundResult.textContent = "You Lose! Rock beats Scissors";
        computerScore++;
        humanScoreText.textContent = humanScore;
        computerScoreText.textContent = computerScore;
    }else if (humanChoice === "scissors" && computerChoice === "paper"){
        roundResult.textContent = "You Win! Scissors beats Paper";
        humanScore++;
        humanScoreText.textContent = humanScore;
        computerScoreText.textContent = computerScore;
    }else{
        roundResult.textContent = "Wrong or no input entered, Use Rock, Papper or Scissors :)";
    }
}

let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
let roundResult = document.querySelector(".roundResult");
let humanScoreText = document.querySelector(".humanScore");
let computerScoreText = document.querySelector(".computerScore");

rockBtn.addEventListener("click", e => { playRound("rock", getComputerChoice()) });
paperBtn.addEventListener("click", e => { playRound("paper", getComputerChoice()) });
scissorsBtn.addEventListener("click", e => { playRound("scissors", getComputerChoice()) });

if (humanScore > computerScore){
    console.log("Finally you are the overall winner!");
}else if (humanScore < computerScore){
    console.log("You finally lose but dont give up just hit F5 or referesh the page");
}else{
    console.log("The game ended up a Tie, Reload for a remarch");
}
