let input = document.querySelector(".input");
let message = document.querySelector(".correct");
let button = document.querySelector(".checkbtn");
let guessmsg = document.querySelector(".guesshead");
let body = document.querySelector("body");
let color1 = document.querySelector(".upperdiv");
let color2 = document.querySelector(".middlediv");
let againbtn = document.querySelector(".againbtn");
let score = document.querySelector(".mainscore");
let Highscore = document.querySelector(".Highscore");
let currscore = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

button.addEventListener("click", function () {
  const guess = Number(input.value);
  if (currscore < 1) {
    message.textContent = "Oooopsss You loose this Game";
    input.disabled = true;
  } else {
    if (guess < secretNumber) {
      message.textContent = "📉 Too low!";
      guessmsg.textContent = "Wrong Number";
      currscore--;
      score.textContent = currscore;
    } else if (guess > secretNumber) {
      message.textContent = "📈 Too high!";
      guessmsg.textContent = "Wrong Number";
      currscore--;
      score.textContent = currscore;
    } else {
      message.textContent = "🏆Winner.........";
      guessmsg.textContent = `${secretNumber} Is Correct`;
      document.body.style.backgroundColor = "#60b347";
      color1.style.backgroundColor = "#60b347";
      color2.style.backgroundColor = "#60b347";
      input.disabled = true;
      score.textContent = currscore;
      button.disabled = true;
      if (currscore > highscore) {
        highscore = currscore;
        Highscore.textContent = highscore;
      }
    }
  }
});

againbtn.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  currscore = 20;
  score.textContent = currscore;
  guessmsg.innerHTML = "Guess My Number";
  message.innerHTML = "Choose option.........";
  input.disabled = false;
  input.value = 0;
  document.body.style.backgroundColor = "black";
  color1.style.backgroundColor = "brown";
  color2.style.backgroundColor = "brown";
  button.disabled = false;
});
