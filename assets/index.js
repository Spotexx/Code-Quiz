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
let answer1Elem = document.getElementById("answer1");
let answer2Elem = document.getElementById("answer2");
let answer3Elem = document.getElementById("answer3");
let answer4Elem = document.getElementById("answer4");

//declaration variables
let timeLeft = 30;
let gameEnd = false;
let currentPoints = 0;
let highscores = JSON.parse(localStorage.getItem("highscores")) || {};

//starts the game timer
let startTimer = () => {
    timeLeft = 30;
    let timerInterval = setInterval(() => {
        timeLeft--;
        timerElem.textContent = timeLeft;
        if (gameEnd === true) {
            clearInterval(timerInterval);
        }
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            alert("Time's up! You didn't finish in time. Your score is " + currentPoints);
            location.reload();
        }
    }, 1000);
}

//sets timer to 0, lets you record your score, and reloads the page
let endGame = () => {
    gameEnd = true;
    timerElem.textContent = "0";
    let name = prompt("You finished the quiz with " + currentPoints + " points! Enter your initials to save your score!");
    //checks if name is taken as a key in object highscores
    if (highscores[name]) {
        //if name is taken, user is prompted to enter another name
        let name = alert("Name already taken! Enter your initials to save your score!");
        endGame();
    } else {
        //if name is not taken, user is given option to save score
        highscores[name] = currentPoints;
        localStorage.setItem("highscores", JSON.stringify(highscores));
    }
    location.reload();
}

let showQuestion5 = () => {
    //question contents
    questionTitleElem.textContent = "which of the following is not a valid for loop?";
    answer1Elem.textContent = "for (let i = 0; i < variable.length; i++)";
    answer2Elem.textContent = "for (let i in variable)";
    answer3Elem.textContent = "for (let i with variable)";
    answer4Elem.textContent = "for (let i of variable)";

    ///adds onclick events to the options
    answer1Elem.onclick = () => {
        questionFooterElem.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerElem.textContent = timeLeft;
        endGame();
    }
    answer2Elem.onclick = () => {
        questionFooterElem.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerElem.textContent = timeLeft;
        endGame();
    }
    answer3Elem.onclick = () => {
        questionFooterElem.textContent = "Correct";
        currentPoints++;
        endGame();
    }
    answer4Elem.onclick = () => {
        questionFooterElem.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerElem.textContent = timeLeft;
        endGame();
    }
    
}

let showQuestion4 = () => {
    //question contents
    questionTitleElem.textContent = "How do you write \"Hello World\" in an alert box?";//question from w3schools
    answer1Elem.textContent = "msgBox('Hello World');";
    answer2Elem.textContent = "alert('Hello World');";
    answer3Elem.textContent = "msg('Hello World');";
    answer4Elem.textContent = "alertBox('Hello World');";

    //adds onclick events to the options
    answer1Elem.onclick = () => {
        questionFooterElem.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerElem.textContent = timeLeft;
        showQuestion5();
    }
    answer2Elem.onclick = () => {
        questionFooterElem.textContent = "Correct";
        currentPoints++;
        showQuestion5();
    }
    answer3Elem.onclick = () => {
        questionFooterElem.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerElem.textContent = timeLeft;
        showQuestion5();
    }
    answer4Elem.onclick = () => {
        questionFooterElem.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerElem.textContent = timeLeft;
        showQuestion5();
    }
}

let showQuestion3 = () => {
    //question contents
    questionTitleElem.textContent = "In HTML, what is the correct TAG for referring to an external style sheet?";//question from w3schools
    answer1Elem.textContent = "<js>";
    answer2Elem.textContent = "<link>";
    answer3Elem.textContent = "<javascript>";
    answer4Elem.textContent = "<script>";

    //adds onclick events to the options
    answer1Elem.onclick = () => {
        questionFooterElem.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerElem.textContent = timeLeft;
        showQuestion4();
    }
    answer2Elem.onclick = () => {
        questionFooterElem.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerElem.textContent = timeLeft;
        showQuestion4();
    }
    answer3Elem.onclick = () => {
        questionFooterElem.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerElem.textContent = timeLeft;
        showQuestion4();
    }
    answer4Elem.onclick = () => {
        questionFooterElem.textContent = "Correct";
        currentPoints++;
        showQuestion4();
    }
}
let showQuestion2 = () => {
    //question contents
    questionTitleElem.textContent = "What of these options shouldn't be done with local storage?";
    answer1Elem.textContent = "Storing a users personal highscores in a game";
    answer2Elem.textContent = "store a theme selection for a color scheme";
    answer3Elem.textContent = "storing a users username and password";
    answer4Elem.textContent = "all of the above are fine";

    //adds onclick events to the options
    answer1Elem.onclick = () => {
        questionFooterElem.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerElem.textContent = timeLeft;
        showQuestion3();
    }
    answer2Elem.onclick = () => {
        questionFooterElem.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerElem.textContent = timeLeft;
        showQuestion3();
    }
    answer3Elem.onclick = () => {
        questionFooterElem.textContent = "Correct";
        currentPoints++;
        showQuestion3();
    }
    answer4Elem.onclick = () => {
        questionFooterElem.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerElem.textContent = timeLeft;
        showQuestion3();
    }
}

let showQuestion1 = () => {
    //question contents
    questionTitleElem.textContent = "What type of brackets are used at the beginning and end of an array?";
    instructionElem.textContent = "";
    answer1Elem.style.visibility = "visible";
    answer1Elem.textContent = "Square brackets";
    answer2Elem.style.visibility = "visible";
    answer2Elem.textContent = "Curly brackets";
    answer3Elem.style.visibility = "visible";
    answer3Elem.textContent = "Parentheses";
    answer4Elem.style.visibility = "visible";
    answer4Elem.textContent = "None of the above";

    //adds event listeners to the options
    answer1Elem.onclick = () => {
        questionFooterElem.textContent = "Correct";
        currentPoints++;
        showQuestion2();
    }
    answer2Elem.onclick = () => {
        questionFooterElem.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerElem.textContent = timeLeft;
        showQuestion2();
    }
    answer3Elem.onclick = () => {
        questionFooterElem.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerElem.textContent = timeLeft;
        showQuestion2();
    }
    answer4Elem.onclick = () => {
        questionFooterElem.textContent = "Incorrect";
        timeLeft = timeLeft - 10;
        timerElem.textContent = timeLeft;
        showQuestion2();
    }

}

//event listener for highscores button
highscoresElem.addEventListener("click", () => {
    //if highscores button is clicked => alert highscores
    //first sorts the object by the highest value to lowest
    let sortedHighscores = Object.entries(highscores).sort((a, b) => b[1] - a[1]);
    console.log(sortedHighscores);
    for(let index = 0; index< 5; index++){
        if(sortedHighscores[index] == null){
            sortedHighscores[index] = ["No record yet"];
            sortedHighscores[index].push(0);
        }
    }

    // if(sortedHighscores[0])
    //alerts user with top 5 highscores displaying the word empty if the array element is empty

    alert("1. " + sortedHighscores[0][0] + " - " + sortedHighscores[0][1] + "\n"
        + "2. " + sortedHighscores[1][0] + " - " + sortedHighscores[1][1] + "\n"
        + "3. " + sortedHighscores[2][0] + " - " + sortedHighscores[2][1] + "\n"    
        + "4. " + sortedHighscores[3][0] + " - " + sortedHighscores[3][1] + "\n"
        + "5. " + sortedHighscores[4][0] + " - " + sortedHighscores[4][1]);
});

// game INIT function
let startGame = () => {
    startTimer();
    showQuestion1();
}

//eventlistener for main button
mainButtonElem.addEventListener("click", function () {
    //if main button is clicked => run startGame function
    startGame();
    console.log("made it here");
});