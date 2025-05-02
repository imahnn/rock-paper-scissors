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
        console.log("Tie!");
    }else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You Lose! Paper beats Rock");
        computerScore++;
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You Win! Rock beats Scissors");
        humanScore++;
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You Win! Paper beats Rock");
        humanScore++;
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You Win! Scissors beats Paper");
        humanScore++;
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }else{
        console.log("Wrong or no input entered, Use Rock, Papper or Scissors :)")
    }


}

let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");

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
