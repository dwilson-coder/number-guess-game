'use strict';
const check = document.querySelector('.check');
const message = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const again = document.querySelector('.again');
let score = 20;
let highScore = 0;

// Listen for guess
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // Player didn't choose a number
    message.textContent = 'No number 🤔';
    changeScore();
  } else if (guess > 20) {
    message.textContent = 'Must be between 1-20 🥹';
    changeScore();
  } else if (guess === secretNumber) {
    message.textContent = 'Correct number! 🏆 ';
    // when player wins, display secret number
    document.querySelector('.number').textContent = secretNumber;
    // Change the background color when player wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      if (highScore >= 18) {
        document.querySelector('.highscore').textContent = highScore + `🔥`;
      } else {
        document.querySelector('.highscore').textContent = highScore + ' ';
      }
    }
  }
  // When guess is too low
  else if (guess < secretNumber) {
    message.textContent = 'Too low ...🤿';
    changeScore();
  }
  // When guess is too high
  else if (guess > secretNumber) {
    message.textContent = 'Too high! ✈️ ';
    changeScore();
  }
});

// Change the scrore
const changeScore = function () {
  score--;

  if (score === 0) {
    message.textContent = 'Sorry, you lost the game ... 🙁 ';
  } else {
    // document.querySelector('.guess').value = '';
  }

  document.querySelector('.score').textContent = score;
};

// Reset the game
again.addEventListener('click', function () {
  // resets score
  score = 20;
  document.querySelector('.score').textContent = score;
  // resets the background
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  message.textContent = 'Start guessing ...';
  // Resets the guess
  document.querySelector('.guess').value = '';
  // Resets the secret number
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
