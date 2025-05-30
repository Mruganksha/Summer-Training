const sentences = [
  "JavaScript is fun to learn.",
  "Practice makes perfect.",
  "Coding improves problem-solving skills."
];

const sentencel = document.getElementById("sentence");
const inputl = document.getElementById("input");
const time1 = document.getElementById("time");
const accuracyl = document.getElementById("accuracy");
const startBtn = document.getElementById("start");

let currentSentence = "";
let startTime;
let timerInterval;

function startTest() {
  currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
  sentencel.textContent = currentSentence;

  inputl.value = "";
  inputl.disabled = false;
  inputl.focus();
  time1.textContent = "0";
  accuracyl.textContent = "0";

  startTime = Date.now();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const secondsPassed = Math.floor((Date.now() - startTime) / 1000);
    time1.textContent = secondsPassed;
  }, 1000);
}

inputl.addEventListener("input", () => {
  const typedText = inputl.value;

  if (typedText === currentSentence) {
    clearInterval(timerInterval);
    inputl.disabled = true;

    let correctChars = 0;
    for (let i = 0; i < typedText.length; i++) {
      if (typedText[i] === currentSentence[i]) {
        correctChars++;
      }
    }

    const accuracy = Math.round((correctChars / currentSentence.length) * 100);
    accuracyl.textContent = accuracy;
  }
});

startBtn.addEventListener("click", startTest);
