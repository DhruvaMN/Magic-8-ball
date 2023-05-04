const buttonEl = document.getElementById("button");
const normalEl = document.getElementById("normal");
const activeEl = document.getElementById("active");
const containerEl = document.getElementById("container");

const textEl = document.getElementById("text");

let change = false;

const answers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes definitely.",
  "You may rely on it",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

function randomAnswer() {
  return answers[Math.floor(Math.random() * answers.length)];
}
function searchActiveClass(array) {
  array.forEach((element) => {
    if (element === "animate") {
      return true;
    } else return false;
  });
}
let yes = false;
function animation() {
  window.requestAnimationFrame(animation);
  buttonEl.onclick = () => {
    yes = false;
    containerEl.classList.add("animate");
    setTimeout(() => {
      yes = true;
      containerEl.classList.remove("animate");
    }, 900);
  };
  if (yes === true) {
    yes = false;
    setTimeout(() => {
      normalEl.style.display = "none";
      activeEl.style.display = "flex";
      textEl.innerText = randomAnswer();
    }, 500);

    setTimeout(() => {
      normalEl.style.display = "flex";
      activeEl.style.display = "none";
    }, 2500);
  }
}
animation();
