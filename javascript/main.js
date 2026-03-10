    /* Initial variables for the game, selectionMade is set to
       false beacause it only need to be true in some instances */
let selectionMade = false;
// let playGame;
const rps = ["rock", "paper", "scissors"];
const results = {
    win: 0,
    tie: 0,
    loss: 0
};
    /* This for loop sets results to 0 wins, 0 ties, and 0 losses and displays it on 
       screen when page loads*/
for(let option in results) {
    document.getElementById(option).textContent = results[option];
}
    // This Function(e) resets to game for any subsequent rounds
document.getElementById('play-again').onclick = function(e) {
    resetBoard();
}
    
    // This Function(e) makes user choice 'rock'
document.getElementById('rock').onclick = function(e){
    if (!selectionMade) playGame('rock');
}
    // This Function(e) makes user choice 'paper'
document.getElementById('paper').onclick = function(e){
    if (!selectionMade) playGame('paper');
}
    // This Function(e) makes user choice 'scissors'
document.getElementById('scissors').onclick = function(e){
    if (!selectionMade) playGame('scissors');
}


    /* Function playGame takes two other Functions and assigns 
    them to variables for later use. It also calls two other Functions 
    setting a Template for the game to follow procedurally */
 playGame = (userChoice) => {
    const computerChoice = computerChooses();
    const outcome = compare(userChoice, computerChoice);
    updateResults(outcome);
    updateWebpage(userChoice, computerChoice, outcome); 
}

    /* Function computerChooses helps computer makes a choice at random */
 computerChooses = () => {
   let randomChoice = rps[Math.floor(Math.random() * rps.length)];
      return randomChoice;
}
    
  
    /* Function compare takes userChoice to computerChoice 
    and determines a result through an if statement */
 compare = (userChoice, computerChoice) => {
if(userChoice === computerChoice) {
    return "tie";

} else if(userChoice === "rock" && computerChoice === "scissors") {
    return "win";

  } else if(userChoice === "paper" && computerChoice === "rock") {
    return "win";

  } else if(userChoice === "scissors" && computerChoice === "paper") { 
    return "win";

  } else {
    return "loss";
  }
 }

    /* Function updateResults takes the outcome of the game and adds 1 to the 
    scoreboard, whether its win, loss or tie. */
 updateResults = (outcome) => {
  results[outcome]++;
}

     /* Function updateWebpage will update the webpage to reflect the user selection,
        computer selection, the outcome of this game, and the overall scoreboard. */
 updateWebpage = (userChoice, computerChoice, outcome) => {

    selectionMade = true;

        // updates the user choice on screen with a message
    document.getElementById('user-selection').textContent = `You chose ${userChoice}!`;
    document.getElementById(userChoice).style.cursor = "default";
    for (let option of rps) {
        if(option != userChoice) {
            document.getElementById(option).style.display = "none";
        }
    }
        // updates the computer choice on screen with a message
    document.getElementById('computer-selection').textContent = `The computer chose ${computerChoice}!!`;
    document.getElementById(`computer-${computerChoice}`).style.display = "inline-block";

        // updates the results on screen with a message
    document.getElementById('game-outcome').textContent = (outcome === "loss") ? "Lost!!" : `${outcome}!!`
    document.getElementById(outcome).textContent = results[outcome];
}


     /* This function is called when the event listener on the "Play Again"
        button is clicked. It resets all the text and images to the initial
        state of game play, but does not remove the scores on the scoreboard. */
 resetBoard = () => {
    
    selectionMade = false;

    // resets the text on the board back to default
    document.getElementById('user-selection').textContent = "Make your selection:";
    document.getElementById('computer-selection').textContent = "The computer chooses...";

    // resets the images on the board back to default
    for (let option of rps) {
        document.getElementById(option).style.display = "inline-block";
        document.getElementById(option).style.cursor = "pointer";
        document.getElementById(`computer-${option}`).style.display = "none";
    }

    // resets the outcome message back to default
    document.getElementById('game-outcome').textContent = "";
}