Mind Marvel: Trivia Game 

Project Description: Drawing inspiration from "Who Wants To Be A Millionaire?", Mind Marvel engages players in a quiz encompassing a diverse range of topics, spanning from world history to pop culture. Successfully answering each question results in a monetary reward. The challenge escalates progressively as questions become more intricate. To add an element of urgency, a time limit is imposed, and the game concludes if the player provides an incorrect answer. Subsequently, the game resets with a fresh set of randomly selected questions, maintaining variety and excitement. Throughout the gameplay, the system keeps track of the player's score within the defined time limits.




<img width="1016" alt="mind marvel example" src="https://github.com/laurendea/Mind-Marvel/assets/152624207/33dfc8da-3e6b-497a-b8d1-0acb82a7bc6c">




MVP Goals

1. Provide a clear presentation of the question and four answer choices on the page for an improved user experience.
2. Display the time limit prominently to enhance player awareness and engagement.
3. Include information about the question's point value and the player's current earnings for a comprehensive overview of progress.
4. Implement immediate feedback to inform players whether their answers are correct or incorrect, enhancing the interactive aspect of the game.
5. Offer the correct answer if a player responds incorrectly, promoting learning and continuous improvement.
6. Enable players to restart the game seamlessly upon winning or losing, ensuring a user-friendly and enjoyable gaming experience.

Stretch Goals

1. Enhance the player experience by incorporating animations for both correct and incorrect choices, adding a dynamic visual element to the decision-making process.
2. Provide an immersive experience by allowing players to enjoy background music while deliberating on their answers, enhancing engagement and enjoyment.
3. Integrate a responsive audio-visual feedback system, allowing players to hear a distinct sound and witness an animation upon clicking on an answer choice, contributing to a more interactive and engaging gameplay.
4. Elevate the gaming experience by incorporating victory or defeat music accompanied by a polished animated message, providing a clear and satisfying conclusion to each game session.

Timeline - Daily Accountability

| Friday     |   | Design Questions and Answers |   |   |
|------------|---|------------------------------|---|---|
| Saturday   |   | work on Design Scaffolding   |   |   |
| Sunday     |   | Add functionality            |   |   |
| Monday     |   | Add styling                  |   |   |
| Tuesday    |   | Finalize MVP                 |   |   |
| Wedenesday |   | Work on stretch goals        |   |   |


// Mind Marvel Game Pseudocode

// Initialize variables
questionsBank = []   // Array to store all available questions

questionText = ""     // Variable to store the question text

choices = []          // Array to store answer choices

correctAnswer = ""     // Variable to store the correct answer

playerScore = 0       // Variable to store the player's score for each round

totalPoints = 0       // Variable to store the player's cumulative points

timeLimit = 30        // Time limit for each question in seconds

moneyReward = 100     // Initial money reward amount

// Function to select a random set of questions
function selectRandomQuestions() {

// Assume questionsBank is a predefined array of all available questions
    
// Shuffle the questions in questionsBank to create randomness
    questionsBank = shuffle(questionsBank)
}

// Function to shuffle an array
function shuffle(array) {
    // Implementation of a shuffle algorithm 
}

// Function to display question and answer choices
function displayQuestionAndChoices() {
    // Display questionText
    print(questionText)
}

// Function to check player's answer
function checkAnswer(playerChoice) {
    // Check if playerChoice is equal to correctAnswer
    if (playerChoice == correctAnswer) {
        // Player answered correctly
        playerScore = moneyReward
        totalPoints = totalPoints + playerScore
        print("Correct! You earned $" + moneyReward + ".")
        print("Your score for this round: $" + playerScore)
        
  // Increase money reward for the next question
    moneyReward = moneyReward * 2  // You can adjust the increment as needed
} else {
    // Player answered incorrectly
    playerScore = 0
    print("Incorrect. The correct answer is: " + correctAnswer)
    
   // Reset money reward to the initial amount
    moneyReward = 100

  // Ask the player if they want to restart the game
    print("Do you want to restart the game? (yes/no)")
    // Get player's response (input from user)
    if (playerResponse is "yes") {
        // Restart the game
        resetGame()
    }
 }
}

// Function to reset the game variables
function resetGame() {
    totalPoints = 0
    moneyReward = 100
}

// Function to play a round of the game
function playRound() {
    // Select a new set of questions
    selectRandomQuestions()

  // Display the question and choices
    displayQuestionAndChoices()

   // Set a timer for timeLimit seconds

  // Get player's choice (input from user)

  // Check player's answer
    checkAnswer(playerChoice)
}

// Function to start the game
function startGame() {
    // Set up questionsBank with a list of all available questions

  // Repeat for a certain number of rounds or until the player decides to exit
    repeat {
        // Play a round
        playRound()

   // Display total points earned so far
        print("Total Points: $" + totalPoints)

  // Ask the player if they want to play another round
        print("Do you want to play another round? (yes/no)")
        // Get player's response (input from user)
    } until (playerResponse is "no")
}

// Main program

startGame()
