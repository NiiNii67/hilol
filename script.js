const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const subText = document.getElementById('subText');
const question = document.getElementById('question');
const gif = document.getElementById('gif');

let noCount = 0;
let yesPaddingVert = 12;
let yesPaddingHoriz = 24;
let yesFontSize = 1;

const noMessages = [
  "are u sure?",
  "sure na?",
  "sure na sure na talaga?",
  "please? 🥺",
  "think again!",
  "dont do this to me :("
];

noBtn.addEventListener('click', () => {
  if (noCount < noMessages.length) {
    subText.innerText = noMessages[noCount];
  } else {
    subText.innerText = noMessages[noMessages.length - 1];
  }

  // Make YES button progressively larger
  yesPaddingVert += 8;
  yesPaddingHoriz += 16;
  yesFontSize += 0.35;

  yesBtn.style.padding = `${yesPaddingVert}px ${yesPaddingHoriz}px`;
  yesBtn.style.fontSize = `${yesFontSize}rem`;

  noCount++;
});

yesBtn.addEventListener('click', () => {
  question.innerText = "YAY! See you soon! 💕";
  subText.innerText = "";
  gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3p4Zml5Y3M1Nm8xd3V3aHowbm5mMjZ4bTRuY2RybmdmcmxuaDFyZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/KztT2c4u8mYYUiMKdJ/giphy.gif";
  document.querySelector('.buttons').style.display = 'none';
});
