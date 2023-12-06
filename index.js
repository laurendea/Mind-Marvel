const triviaQuestions = [
    {
        question: "Who was the influential leader of the Mali Empire known for promoting education and supporting the arts during the 14th century?",
        answers: ["Sundiata Keita", "Mansa Musa", "Askia Muhammad", "Shaka Zulu"],
        correctAnswer: 1,
        imgSrc: 'mansamusa.webp'
    },
    {
        question: "Which ancient civilization, located in present-day Mexico, developed sophisticated mathematical and astronomical systems, including the use of zero?",
        answers: ["Inca Empire", "Aztec Empire", "Olmec Culture", "Maya Civilization"],
        correctAnswer: 3,
        imgSrc: 'maya.jpg'
    },
    {
        question: "Who was the Chinese admiral and diplomat known for his extensive voyages in the early 15th century, promoting trade and cultural exchange?",
        answers: ["Yishiha", "Zheng He", "Yu Zigao", "Liu Guanxiong"],
        correctAnswer: 1,
        imgSrc: 'zheng.jpg'
    },
    {
        question: "The Renaissance, a period of renewed interest in art and learning, flourished in which European city known as a hub for cultural and intellectual achievements?",
        answers: ["Venice", "Rome", "Florence ", "Verona"],
        correctAnswer: 2,
        imgSrc: 'florence.webp'
    },
    {
        question: "What ancient civilization, located in the Indus Valley, developed one of the earliest known writing systems and urban planning?",
        answers: ["Sumerians", "Ancient Egyptians", "Phoenicians", "Harappan Civilization"],
        correctAnswer: 3,
        imgSrc: 'indus.jpg'
    },
    {
        question: "Who was the queen known for her wisdom and diplomatic skills, and is mentioned in religious texts such as the Bible and the Quran?",
        answers: ["Nefertiti", "Hatshepsut", "Queen of Sheba", "Cleopatra"],
        correctAnswer: 2,
        imgSrc: 'sheba.jpg'
    },
    {
        question: "The Gupta Empire in ancient India is often referred to as the 'Golden Age'. Which field experienced significant advancements during this period?",
        answers: ["Medicine", "Mathematics and Astronomy", "Philosophy", "Poetry"],
        correctAnswer: 1,
        imgSrc: 'gupta.jpg'
    },
    {
        question: "Who is often referred to as the 'First Lady of Song' and 'Queen of Jazz',known for her exceptional vocal range?",
        answers: ["Ella Fitzgerald", "Billie Holiday", "Sarah Vaughan", "Nina Simone"],
        correctAnswer: 0,
        imgSrc: 'ellafitz.jpg'
    },
    {
        question: "Nina Simone, a legendary figure in jazz and civil rights activism, was not only known for her powerful voice but also for her exceptional skills on which musical instrument?",
        answers: ["Trumpet", "Piano", "Saxophone", "Harp"],
        correctAnswer: 1,
        imgSrc: 'ninasimone.jpg'
    },
    {
        question: "In 1994, this R&B artist released the album 'My Life', which is often regarded as a classic in the genre. Who is the artist?",
        answers: ["Mary J. Blige", "Brandy", "Toni Braxton", "Aaliyah"],
        correctAnswer: 0,
        imgSrc: 'maryjb.webp'
    },
    {
        question: "This R&B group, consisting of sisters with hits like 'Weak' and 'Right Here', gained popularity in the early '90s. What is the name of the group?",
        answers: ["TLC", "SWV", "En Vogue", "Destiny's Child"],
        correctAnswer: 1,
        imgSrc: 'swv.png'
    },
    {
        question: " In 1991, this R&B artist released the album 'Forever My Lady', featuring hits like 'Stay and Come and Talk to Me'. Who is the artist?",
        answers: ["Keith Sweat", "Joe", "Jodeci", "Bobby Brown"],
        correctAnswer: 2,
        imgSrc: 'forever-my-lady-jodeci.gif'
    },
    {
        question: "Which planet rotates clockwise, unlike most other planets in our solar system?",
        answers: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: 2,
        imgSrc: 'venus.jpg'
    },
    {
        question: "In which country did the sandwich originate?",
        answers: ["England", "USA", "France", "Italy"],
        correctAnswer: 0,
        imgSrc: 'sandwhich.jpg'
    },
    {
        question: "What is the main ingredient in the traditional Ethiopian dish Kitfo?",
        answers: ["Lentils", "Raw minced meat", "Collard greens", "Injera"],
        correctAnswer: 1,
        imgSrc: 'kifto.jpg'
    },
    {
        question: "What is the primary ingredient in the traditional Indian dessert Gulab Jamun?",
        answers: ["Cottage cheese", "Fried dough balls", "Rice pudding", "Saffron-infused milk"],
        correctAnswer: 1,
        imgSrc: 'gulab.jpg'
    },
    {
        question: "Which Southeast Asian fruit has a spikey exterior and a taste that combines sweetness and sourness?",
        answers: ["Rambutan", "Mangosteen", "Jackfruit", "Pomelo"],
        correctAnswer: 1,
        imgSrc: 'mangosteen.webp'
    },
    {
        question: "In Egyptian mythology, what is the name of the snake that encircles the sun god Ra's boat?",
        answers: ["Apophis", "Ammit", "Wadjet", "Ma'at"],
        correctAnswer: 0,
        imgSrc: 'adophis.jpg'
    },
    {
        question: "Which Egyptian god is often depicted with the head of an ibis and associated with wisdom and writing?",
        answers: ["Sobek", "Ptah", "Thoth", "Horus"],
        correctAnswer: 2,
        imgSrc: 'thoth-god.jpg'
    },
    {
        question: "What is the name of the legendary hammer wielded by the Norse god Thor?",
        answers: ["Mjölnir", "Gungnir", "Tyrfing", "Gram"],
        correctAnswer: 0,
        imgSrc: 'thor.jpg'
    },
    {
        question: "What creature is part lion, part goat, and part serpent in Greek mythology?",
        answers: ["Cerberus", "Chimera", "Sphinx", "Minotaur"],
        correctAnswer: 1,
        imgSrc: 'chimera.jpg'
    },
    {
        question: "In Yoruba mythology, who is the trickster god and messenger of the supreme deity Olorun?",
        answers: ["Eshu", "Shango", "Orunmila", "Oya"],
        correctAnswer: 0,
        imgSrc: 'eshu.jpg'
    },
    {
        question: "What mythical creature in Brazilian folklore is a shape-shifting river dolphin that can transform into a handsome man?",
        answers: ["Saci", "Curupira", "Boto Cor-de-Rosa ", "Uiara"],
        correctAnswer: 2,
        imgSrc: 'boto.jpg'
    },
    {
        question: "In Hindu mythology, who is the monkey god known for his incredible strength and loyalty to Lord Rama?",
        answers: ["Sugriva", "Hanuman", "Vali", "Angada"],
        correctAnswer: 1,
        imgSrc: 'hanuman.jpg'
    },
    {
        question: "In Dogon mythology, what is the name of the celestial being associated with the star Sirius?",
        answers: ["Nommo", "Olokun", "Orishala", "Aganju"],
        correctAnswer: 0,
        imgSrc: 'nommo.png'
    },
    {
        question: "What mythical creature in Inuit mythology is a sea goddess who is believed to protect sea animals and ensure a bountiful harvest?",
        answers: ["Sedna", "Qalupalik", "Amarok", "Anguta"],
        correctAnswer: 0,
        imgSrc: 'sedna.jpg'
    },
    {
        question: "What is the term for the intricate patterns created by sand particles being moved by wind, forming ridges and dunes in deserts?",
        answers: ["Saltation", "Deflation", "Erg", " Zibar"],
        correctAnswer: 2,
        imgSrc: 'erg.jpg'
    },
    {
        question: "Which breathtaking natural event involves the simultaneous appearance of three suns in the sky, creating the illusion of multiple suns?",
        answers: ["Solar Eclipse", "Sun Dog", "Solar Halo", "Sun Mirage"],
        correctAnswer: 1,
        imgSrc: 'Sundog.jpg'
    },
    {
        question: "Which natural formation, located in the U.S., is known for its towering red sandstone pillars and is often called the 'Land of the Sleeping Rainbow?'",
        answers: ["Monument Valley", "Bryce Canyon", "Arches National Park", "Zion National Park"],
        correctAnswer: 2,
        imgSrc: 'arches.jpg'
    },
    {
        question: "What is the name of the natural phenomenon where the sun appears to pass directly overhead, causing vertical objects to cast no shadow?",
        answers: ["Solar Apex", "Zenith Passage", "Solar Equinox", "Subsolar Point"],
        correctAnswer: 1,
        imgSrc: 'zenith-passage.png'
    },
    {
        question: "What is the name of the unexplained phenomenon where large stones seem to move across the desert floor, leaving long trails behind them?",
        answers: ["Stone Skipping", "Rolling Rocks", "Drifting Boulders", "Sailing Stones"],
        correctAnswer: 3,
        imgSrc: 'assets/sailingstone.jpg'
    },
];

let currentQuestionIndex;
let playerEarnings = 0;
let totalQuestions = 25;
let totalEarnings = 1000000;
let earningsPerQuestion = 40000;
let playerAnswer;
let timer;
let gameStarted = false;


function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame() {
    currentQuestionIndex = 0;
    playerEarnings = 0;
    shuffleQuestions(triviaQuestions);
    earningsPerQuestion = Math.ceil(totalEarnings / totalQuestions);

    document.getElementById('moneyRewardLabel').textContent = `Earnings: $${playerEarnings}`;
    loadQuestion();

    // Update game state and button text
    gameStarted = true;
    updateButtonText();

    // Add the event listener for the button click
    const button = document.querySelector('.playAgain');
    button.removeEventListener('click', startGame); // Remove previous event listener
    button.addEventListener('click', resetGame); // Add new event listener for resetGame
}



function resetGame() {
    currentQuestionIndex = 0;
    playerEarnings = 0;

    document.getElementById('timer').textContent = '00:00';
    document.getElementById('moneyRewardLabel').textContent = `Earnings: $${playerEarnings}`;

    document.getElementById('losingMessage').style.display = 'none';

    gameStarted = false;
    updateButtonText();

    startGame();
}


function loadQuestion() {
    resetTimer();
    let currentQuestion = triviaQuestions[currentQuestionIndex];
    displayQuestion(currentQuestion);
    startTimer();
}



function startTimer() {
    let timeLeft = 30; 

    timer = setInterval(() => {
        document.getElementById('timer').textContent = formatTime(timeLeft);

        if (timeLeft === 0) {
            endGameTimeout();
        } else {
            timeLeft--;
        }
    }, 1000);
}


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}


function resetTimer() {
    clearInterval(timer);
    document.getElementById('timer').textContent = '00:00'; 
}


function endGameTimeout() {
    clearInterval(timer);
    console.log("Time's up! You lost the game.");

 
    resetGame();
}


function displayQuestion(question) {
    document.getElementById('questionText').textContent = question.question;

    const imageElement = document.getElementById('questionImage');
    if (question.imgSrc) {
        imageElement.src = question.imgSrc;
        document.querySelector('.questionsImages').style.display = 'block';
    } else {
        document.querySelector('.questionsImages').style.display = 'none';
    }
    
    displayAnswerChoices(question.answers);
}


function displayAnswerChoices(choices) {
    const choiceContainer = document.getElementById('choice');
    
    choiceContainer.innerHTML = '';

    choices.forEach((choice, index) => {
        const optionElement = document.createElement('span');
        optionElement.classList.add('option');
        optionElement.textContent = choice;
        optionElement.onclick = () => checkAnswer(index); 
        choiceContainer.appendChild(optionElement);
    });
}

function updateButtonText() {
    const button = document.querySelector('.playAgain');
    if (gameStarted) {
        button.textContent = 'Reset Game';
    } else {
        button.textContent = 'Start Game';
    }

    document.addEventListener('DOMContentLoaded', function () {
        const button = document.querySelector('.playAgain');
        button.addEventListener('click', startGame);
    });
}


let correctAnswerCounter = 0;

function displayWinningMessage() {
    const winningMessageElement = document.getElementById('winningMessage');
    winningMessageElement.textContent = "Congratulations! You've earned $1,000,000!";
    winningMessageElement.style.display = 'block';
    correctAnswerCounter = 0;

    setTimeout(() => {
        winningMessageElement.style.display = 'none';
        resetGame();
    }, 5000); // Adjust the timeout duration as needed
}


function displayLosingMessage() {
    const losingMessageElement = document.getElementById('losingMessage');
    losingMessageElement.textContent = "You've lost, please try again!";
    losingMessageElement.style.display = 'block';
}

function checkAnswer(selectedOption) {
    let currentQuestion = triviaQuestions[currentQuestionIndex];
    let options = document.querySelectorAll('.option');

    options.forEach((option, index) => {
        option.onclick = null;

        if (index === currentQuestion.correctAnswer) {
            option.classList.add('correct');
        } else if (index === selectedOption) {
            option.classList.add('incorrect');
        }
    });

    if (selectedOption === currentQuestion.correctAnswer) {
        correctAnswerCounter++;
        playerEarnings += earningsPerQuestion;
        document.getElementById('moneyRewardLabel').textContent = `Earnings: $${playerEarnings}`;

        if (correctAnswerCounter === 25) {
            displayWinningMessage();
            resetGame();
        } else {
            nextQuestion();
        }
    } else {
        displayLosingMessage();

        setTimeout(() => {
            resetGame();
        }, 5000); 
    }
}


function nextQuestion() {
    
    let options = document.querySelectorAll('.option');
    options.forEach((option) => {
        option.style.backgroundColor = ''; 
    });

    
    currentQuestionIndex++;
    if (currentQuestionIndex < triviaQuestions.length) {
        loadQuestion();
    } else {
       
        endGame();
    }
}


function endGame() {
    if (playerEarnings === totalEarnings) {
        const winningMessageElement = document.getElementById('winningMessage');
        winningMessageElement.textContent = "Congratulations! You've reached $1,000,000!";
        winningMessageElement.style.display = 'block';
        document.getElementById('moneyRewardLabel').textContent = `Earnings: $${totalEarnings}`;

        setTimeout(() => {
            winningMessageElement.style.display = 'none';
            resetGame();
        }, 3000); // Adjust the timeout duration as needed
    } else {
        resetGame();
    }
}



startGame();
updateButtonText();

















   

  
  