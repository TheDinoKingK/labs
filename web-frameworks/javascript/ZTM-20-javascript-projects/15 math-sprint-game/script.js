// Pages
const gamePage = document.getElementById('game-page');
const scorePage = document.getElementById('score-page');
const splashPage = document.getElementById('splash-page');
const countdownPage = document.getElementById('countdown-page');
// Splash Page
const startForm = document.getElementById('start-form');
const radioContainers = document.querySelectorAll('.radio-container');
const radioInputs = document.querySelectorAll('input');
const bestScores = document.querySelectorAll('.best-score-value');
// Countdown Page
const countdown = document.querySelector('.countdown');
// Game Page
const itemContainer = document.querySelector('.item-container');
// Score Page
const finalTimeEl = document.querySelector('.final-time');
const baseTimeEl = document.querySelector('.base-time');
const penaltyTimeEl = document.querySelector('.penalty-time');
const playAgainBtn = document.querySelector('.play-again');

// Equations

let questionAmount = 0;
let equationsArray = [];
let playerGuessArray = [];
let bestScoreArray = [];

// Game Page
let firstNumber = 0;
let secondNumber = 0;
let equationObject = {};
const wrongFormat = [];

// Time
let timer;
let timePlayed = 0;
let baseTime = 0;
let penaltyTime = 0;
let finalTime = 0;
let finalTimeDisplay = '0.0s';

// Scroll
let valueY = 0;

// Refreshes Splash Page To The Current Best Score/Time
function bestScoresToDOM() {
    bestScores.forEach((bestScore, index) => {
      const bestScoreEl = bestScores;
      bestScoreEl.textContent = `${bestScoreArray[index].bestScore}s`;
    });
}

// Checks Local Storage For Best Scores & set's The bestScoreArray
function getSavedBestScore() {
    if(localStorage.getItem('bestScores')) {
        bestScoreArray = JSON.parse(localStorage.bestScores);
    } else {
        bestScoreArray = [
            { questions: 10, bestScore: finalTimeDisplay },
            { questions: 25, bestScore: finalTimeDisplay },
            { questions: 50, bestScore: finalTimeDisplay },
            { questions: 99, bestScore: finalTimeDisplay },
        ];
        localStorage.setItem('bestScores', JSON.stringify(bestScoreArray));
    }
    bestScoresToDOM();
}

// Resets Game
function playAgain() {
    gamePage.addEventListener('click', startTimer);
    scorePage.hidden = true;
    splashPage.hidden = false;
    equationsArray = [];
    playerGuessArray = [];
    valueY = 0;
    playAgainBtn.hidden = true;
}

// Show Score Page
function showScorePage() {
    // Show Play Again Button After A Tiny Bit To Avoid Clicking Play Again While Playing Game before you see your score
    setTimeout(() => {
        playAgainBtn.hidden = false;
    }, 1000);
    gamePage.hidden = true;
    scorePage.hidden = false;
}

// Format & display time to dom
function scoresToDOM() {
    finalTimeDisplay = finalTime.toFixed(1);
    baseTime = timePlayed.toFixed(1);
    penaltyTime = penaltyTime.toFixed(1);
    baseTimeEl.textContent = `Base Time: ${baseTime}s`;
    penaltyTimeEl.textContent = `Penalty: +${penaltyTime}s`;
    finalTimeEl.textContent = `${finalTimeDisplay}s`;
    updateBestScore();
    // Scroll To Top, Go To Score Page
    itemContainer.scrollTo({ top: 0, behavior: 'instant' });
    showScorePage();
}

// Stop Timer, Process Results, Go To Score Page
function checkTime() {
    if(playerGuessArray.length == questionAmount) {
        console.log('player guess array: ', playerGuessArray);
        baseTime = timePlayed;
        clearInterval(timer);
        equationsArray.forEach((equation, i) => {
            if(equation.evaluated === playerGuessArray[i]) {
                // Nothing, You Guessed Correctly
            } else {
                // Well Crap Your Wrong, ADD PENALTY TIME!
                penaltyTime += 0.5;
            }
        });
        finalTime = baseTime + penaltyTime;
        console.log('Final Time: ', finalTime);
        console.log('Base Time: ', baseTime);
        console.log('Penalty Time: ', penaltyTime);
        scoresToDOM();
    }
}

// Updates Best Score Array
function updateBestScore() {
    bestScoreArray.forEach((score, index) => {
      // Select The Correct Best Score
      if(questionAmount == score.questions) {
          // return best Score as number with a decimal
          const savedBestScore = Number(bestScoreArray[index].bestScore);
          // Update If The New Final Score Is Less Or Replacing 0
          if(savedBestScore === 0 || savedBestScore > finalTime) {
            bestScoreArray[index].bestScore = finalTimeDisplay;
          }
      }
    });
    // Update Splash Page
    bestScoresToDOM();
    // Save To Local Storage
    localStorage.setItem('bestScores', JSON.stringify(bestScoreArray));
}

// Add A Tenth Of A Second To timePlayed
function addTime() {
    timePlayed += 0.1;
    checkTime();
}

// Start Timer When Game Page
function startTimer() {
    // Reset Times
    timePlayed = 0;
    penaltyTime = 0;
    finalTime = 0;
    timer = setInterval(addTime, 100);
    gamePage.removeEventListener('click', startTimer);
}

// Scrolls, Stores User Selection In playerGuess Array
function select(guessedTrue) {
    // Scroll 80 pixels
    valueY += 80;
    itemContainer.scroll(0, valueY);
    // add Player Guess To Array
    return guessedTrue ? playerGuessArray.push('true') : playerGuessArray.push('false');
}

// Displays Game Page
function showGamePage() {
    gamePage.hidden = false;
    countdownPage.hidden = true;
}

// Get Random Number Up To A Max Number
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Create Correct/Incorrect Random Equations
function createEquations() {
  // Randomly choose how many correct equations there should be
  const correctEquations = getRandomInt(questionAmount);
  console.log("Correct Equations: ", correctEquations);
  // Set amount of wrong equations
  const wrongEquations = questionAmount - correctEquations;
  console.log("Incorrect Equations: ", wrongEquations);
  // Loop through, multiply random numbers up to 9, push to array
  for (let i = 0; i < correctEquations; i++) {
    firstNumber = getRandomInt(9);
    secondNumber = getRandomInt(9);
    const equationValue = firstNumber * secondNumber;
    const equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;
    equationObject = { value: equation, evaluated: 'true' };
    equationsArray.push(equationObject);
  }
  // Loop through, mess with the equation results, push to array
  for (let i = 0; i < wrongEquations; i++) {
    firstNumber = getRandomInt(9);
    secondNumber = getRandomInt(9);
    const equationValue = firstNumber * secondNumber;
    wrongFormat[0] = `${firstNumber} x ${secondNumber + 1} = ${equationValue}`;
    wrongFormat[1] = `${firstNumber} x ${secondNumber} = ${equationValue - 1}`;
    wrongFormat[2] = `${firstNumber + 1} x ${secondNumber} = ${equationValue}`;
    const formatChoice = getRandomInt(3);
    const equation = wrongFormat[formatChoice];
    equationObject = { value: equation, evaluated: 'false' };
    equationsArray.push(equationObject);
  }
  shuffle(equationsArray);
}

// Add Equations to DOM
function equationsToDOM() {
    equationsArray.forEach((equation) => {
      // Item
      const item = document.createElement('div');
      item.classList.add('item');
      // Equation Text
      const equationText = document.createElement('h1');
      equationText.textContent = equation.value;
      // Append
      item.appendChild(equationText);
      itemContainer.appendChild(item);

    });
}

// Dynamically adding correct/incorrect equations
function populateGamePage() {
  // Reset DOM, Set Blank Space Above
  itemContainer.textContent = '';
  // Spacer
  const topSpacer = document.createElement('div');
  topSpacer.classList.add('height-240');
  // Selected Item
  const selectedItem = document.createElement('div');
  selectedItem.classList.add('selected-item');
  // Append
  itemContainer.append(topSpacer, selectedItem);

  // Create Equations, Build Elements in DOM
    createEquations();
    equationsToDOM();

  // Set Blank Space Below
  const bottomSpacer = document.createElement('div');
  bottomSpacer.classList.add('height-500');
  itemContainer.appendChild(bottomSpacer);
}

// Displays "3, 2, 1, GO!"
function countdownStart() {
  countdown.textContent = "3";
  setTimeout(() => {
      countdown.textContent = "2";
  },1000);
  setTimeout(() => {
      countdown.textContent = "1";
  },1500);
  setTimeout(() => {
      countdown.textContent = "GO!";
  },2000);
}

// Navigate From Splash To Countdown Page
function showCountdown() {
    countdownPage.hidden = false;
    splashPage.hidden = true;
    countdownStart();
    populateGamePage();
    setTimeout(showGamePage, 400);
}

// Get The Value From Selected Radio Button
function getRadioValue() {
    let radioValue;
    radioInputs.forEach((radioInput) => {
        if(radioInput.checked) {
            radioValue = radioInput.value;
        }
    });
    return radioValue;
}

// Form That Decides Amount Of Questions Given
function selectQuestionAmount(e) {
    e.preventDefault();
    questionAmount = getRadioValue();
    console.log('Question Amount: ', questionAmount);
    if(questionAmount) {
      showCountdown();
    }
}

startForm.addEventListener('click', () => {
    radioContainers.forEach((radioEl) => {
       // Remove Selected Label Styling
       radioEl.classList.remove('selected-label');
       // Add It Back If Radio Input Is Checked.
       if(radioEl.children[1].checked) {
           radioEl.classList.add('selected-label');
       }
    });
});

// Event Listeners
startForm.addEventListener('submit', selectQuestionAmount);
gamePage.addEventListener('click', startTimer);

// On Load
getSavedBestScore();