Mind Marvel: Trivia Game 

Project Description: Drawing inspiration from "Who Wants To Be A Millionaire?", Mind Marvel quizs players in a range of topics, spanning from world history to pop culture. Answering each question correctly results in a monetary reward. A time limit will exist, andF the game will end if the player provides an incorrect answer. A new set of randomly selected questions will appear when the game starts over.




<img width="1016" alt="mind marvel example" src="https://github.com/laurendea/Mind-Marvel/assets/152624207/33dfc8da-3e6b-497a-b8d1-0acb82a7bc6c">




MVP Goals

1. As a player, I want my game to have a clear presentation of the question and four answer choices.
2. As a player, I want my game to include the question's money value and the player's current earnings.
3. As a player, I want my game to inform the player whether the answer is correct or incorrect.
4. As a player, I want my game to give the correct answer if the choice is incorrect.
5. As a player, I want my game to restart upon losing.
6. As a player, I want my game to give a victory message once $1,000,000 is earned.

Stretch Goals

1. As a player, I would like to incorporate color animations for both correct and incorrect choices.
2. As a player, I would like to have background music while deciding on my answers.
3. As a player, I would like to hear a sound upon clicking on an answer choice.
4. As a player, I would like to see a victory or defeat animation and sound.
5. 2. As a player, I want my game to display the time limit.


Psuedocode:

Variables
1. questions bank
2. questions text
3. choices array
4. correct answers 
5. player's stored earnings
6. time limit
7. money reward for each answer
8. player's answer choice




Functions:
1. to start the game
2. to select a random set of questions
3. to display questions and their answer choices
4. to start time limit with each new question
5. to end the game if the time limit ends
6. to check the players answer against the correct answer
7. to add money value to currect earnings if correct
8. to display another round of questions if correct
9. to increase money reward for next question if correct
10. to repeat the game until the player reaches money goal
11. to display a winning message
12. to display a losing message
13. to display correct answer if player choice is wrong
14. to reset money reward if wrong
15. to shuffle and display a new set of questions if the game restarts


//

Variables
let questionsBank = [
  { question: "What is the capital of France?", choices: ["Berlin", "Paris", "London", "Madrid"], correctAnswer: 1 },
  // Add more questions as needed
];
let currentQuestionIndex;
let playerEarnings = 0;
let timeLimit = 30;
let moneyReward = 500; // Initial money reward
let playerAnswer;

// Functions

// 1. To start the game
function startGame() {
  currentQuestionIndex = 0;
  playerEarnings = 0;
  moneyReward = 500; // Reset money reward
  selectRandomQuestions();
  loadQuestion();
}

// 2. To select a random set of questions
function selectRandomQuestions() {
  // Code to shuffle questionsBank or select a random subset
}

// 3. To display questions and their answer choices
function loadQuestion() {
  let currentQuestion = questionsBank[currentQuestionIndex];
  displayQuestion(currentQuestion);
  startTimer();
}

// Function to display the current question's worth in money reward
function displayMoneyReward() {
  // Code to display the current question's worth in money reward
}

// 4. To start time limit with each new question
function startTimer() {
  // Code to start a timer with timeLimit seconds
}

// 5. To end the game if the time limit ends
function endGameTimeout() {
  // Code to display a message and end the game
}

// 6. To check the player's answer against the correct answer
function checkAnswer() {
  let currentQuestion = questionsBank[currentQuestionIndex];
  if (playerAnswer === currentQuestion.correctAnswer) {
    // 7. To add money value to current earnings if correct
    playerEarnings += moneyReward;
    displayCorrectAnswerMessage("Correct! You earned $" + moneyReward);
    // 8. To display another round of questions if correct
    if (playerEarnings < moneyGoal) {
      currentQuestionIndex++;
      moneyReward *= 2; // Increase money reward for the next question
      loadQuestion();
    } else {
      // 11. To display a winning message
      displayWinningMessage();
    }
  } else {
    // 12. To display a losing message
    displayLosingMessage();
    // 13. To display correct answer if the player's choice is wrong
    displayCorrectAnswerMessage("The correct answer is: " + currentQuestion.choices[currentQuestion.correctAnswer]);
    // 14. To reset money reward if wrong
    moneyReward = 500; // Reset money reward for the next attempt
    // 15. To shuffle and display a new set of questions if the game restarts
    selectRandomQuestions();
    // Restart the game
    startGame();
  }
}

// Additional variables for functions 11 and 12
let moneyGoal = 1000000; // Set a money goal for winning

// 11. To display a winning message
function displayWinningMessage() {
  // Code to display a winning message
}

// 12. To display a losing message
function displayLosingMessage() {
  // Code to display a losing message
}

// 13. To display correct answer if player choice is wrong
function displayCorrectAnswerMessage(message) {
  // Code to display a message with the correct answer
}






//

| Friday     |   | Write pseudocode, Design questions and answers, Write the logic/Css scaffolding  |   |   |
|------------|---|----------------------------------------------------------------------------------|---|---|
| Saturday   |   | Work on the logic and Css                                                        |   |   |
| Sunday     |   | Work on the logic and Css                                                        |   |   |
| Monday     |   | Work on the logic and Css                                                        |   |   |
| Tuesday    |   | Finalize MVP                                                                     |   |   |
| Wedenesday |   | Work on stretch goals                                                            |   |   |                                                           |   |   |


