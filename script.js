var playerScore = 0;
var computerScore = 0;
var playerScore_span = document.getElementById("player-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_div = document.querySelector(".result > p");
var Rock2_div = document.getElementById("r");
var paper2_div = document.getElementById("p");
var scissors2_div = document.getElementById("s");

function getComputerChoice() {
    var choices = ['r', 'p', 's'];
    var randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "ROCK";
    if (letter === "p") return "PAPER";
    return "SCISSORS";
}

function win(playerChoice, computerChoice) {
    var smallPlayerWord = "player".fontsize(3).sub();
    var smallComputerWord = "computer".fontsize(3).sub();
    var playerChoice_div = document.getElementById(playerChoice);
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(playerChoice) + smallPlayerWord + " BEATS " + convertToWord(computerChoice) + smallComputerWord + " YOU WIN!";
    playerChoice_div.classList.add('green-glow');
    setTimeout(function() {playerChoice_div.classList.remove('green-glow')}, 1000)
}

function lose(playerChoice, computerChoice) {
    var smallPlayerWord = "player".fontsize(3).sub();
    var smallComputerWord = "computer".fontsize(3).sub();
    var playerChoice_div = document.getElementById(playerChoice);
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(playerChoice) + smallPlayerWord + " LOSES TO " + convertToWord(computerChoice) + smallComputerWord + " YOU LOST...";
    playerChoice_div.classList.add('red-glow');
    setTimeout(function() {playerChoice_div.classList.remove('red-glow')}, 1000)
}

function draw(playerChoice, computerChoice) {
    var smallPlayerWord = "player".fontsize(3).sub();
    var smallComputerWord = "computer".fontsize(3).sub();
    var playerChoice_div = document.getElementById(playerChoice);
    result_div.innerHTML = convertToWord(playerChoice) + smallPlayerWord + " EQUALS " + convertToWord(computerChoice) + smallComputerWord + " IT'S A DRAW";
    playerChoice_div.classList.add('glow');
    setTimeout(function() {playerChoice_div.classList.remove('glow')}, 1000)
}

function game(playerChoice) {
    var computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, computerChoice);
            break;
    }
}

function main() {
    Rock2_div.addEventListener('click', function(){
      game("r");
    })

    paper2_div.addEventListener('click', function(){
      game("p");
    })

    scissors2_div.addEventListener('click', function(){
      game("s");
    })
}

main();
