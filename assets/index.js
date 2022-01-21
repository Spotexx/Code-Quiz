//Top left: View HighScores button => sends user alert containing high scores
//Top right: time remaining => loses game if time runs out
//main area: Code Quiz => User selects answer from multiple choice
    //if correct => user gets a point
    //if incorrect => 10 seconds penalty to time remaining
    //after every question => "correct" or "incorrect" is displayed underneath the question
    //at the end of the quiz => user can save their initials and score to local storage for highscores
    //after highscore is saved => user is sent a highscore alert and given the option to play again

//declaration variables
let highscoresElem = document.getElementById("highscores");
let timerContainerElem = document.getElementById("timer-container");
let timerElem = document.getElementById("timer");
let questionTitleElem = document.getElementById("question-content");
let questionContentElem = document.getElementById("question-content");
let questionFooterElem = document.getElementById("question-footer");
let mainButtonElem = document.getElementById("main-button");













//eventlistener for main button
mainButtonElem.addEventListener("click", function(){
    //if main button is clicked => run startGame function
    startGame();
});