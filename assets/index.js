//Top left: View HighScores button => sends user alert containing high scores
//Top right: time remaining => loses game if time runs out
//main area: Code Quiz => User selects answer from multiple choice
    //if correct => user gets a point
    //if incorrect => 10 seconds penalty to time remaining
    //after every question => "correct" or "incorrect" is displayed underneath the question
    //at the end of the quiz => user can save their initials and score to local storage for highscores
    //after highscore is saved => user is sent a highscore alert and given the option to play again

//declaration elements
let highscoresElem = document.getElementById("highscores");
let timerContainerElem = document.getElementById("timer-container");
let timerElem = document.getElementById("timer");
let questionTitleElem = document.getElementById("question-title");
let questionContentElem = document.getElementById("question-content");
let questionFooterElem = document.getElementById("question-footer");
let mainButtonElem = document.getElementById("main-button");
let instructionElem = document.getElementById("instruction");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");

//declaration variables
let timeLeft = 60;
let gameEnd = false;
let currentPoints = 0;







//starts the game timer
let startTimer = () => {
    timeLeft = 60;
    let timerInterval = setInterval(() => {
        timeLeft--;
        timerElem.textContent = timeLeft; 
        if (gameEnd === true) {
            clearInterval(timerInterval);
        }
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            gameEnd = true;
            timerElem.textContent = "60";
            //end game
        }
    }, 1000);
}

let showQuestion3 = () => {
    
    console.log(currentPoints);
}
let showQuestion2 =() => {
    //prints the question and makes options visible
    questionTitleElem.textContent = "What of these options shouldn't be done with local storage?";
    answer1.textContent = "Storing a users personal highscores in a game";
    answer2.textContent = "store a theme selection for a color scheme";
    answer3.textContent = "storing a users username and password";
    answer4.textContent = "all of the above are fine";

    //adds event listeners to the options
}

let showQuestion1 = () => {
    //prints the question and makes options visible
    questionTitleElem.textContent = "What type of brackets are used at the beginning and end of an array?";
    instructionElem.textContent = "";
    answer1.style.visibility = "visible";
    answer1.textContent = "Square brackets";
    answer2.style.visibility = "visible";
    answer2.textContent = "Curly brackets";
    answer3.style.visibility = "visible";
    answer3.textContent = "Parentheses";
    answer4.style.visibility = "visible";
    answer4.textContent = "None of the above";

    //adds event listeners to the options
 
}


let startGame = () => {
    startTimer();
    showQuestion1();
}

//eventlistener for main button
mainButtonElem.addEventListener("click", function(){
    //if main button is clicked => run startGame function
    startGame();
});