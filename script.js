// Function to switch between screens
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// Element references for Screen 1
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const subText = document.getElementById('subText');

let noCount = 0;
let yesPaddingVert = 12;
let yesPaddingHoriz = 20;
let yesFontSize = 0.9;

// Array of prompt subtext messages
const noMessages = [
  "are u sure?",
  "sure na?",
  "sure na sure na talaga?",
  "please? 🥺",
  "think again!",
  "dont do this to me :("
];

// Click event for NO button
noBtn.addEventListener('click', () => {
  // Update subtext based on click index
  if (noCount < noMessages.length) {
    subText.innerText = noMessages[noCount];
  } else {
    subText.innerText = noMessages[noMessages.length - 1];
  }

  // Make YES button progressively larger
  yesPaddingVert += 10;
  yesPaddingHoriz += 18;
  yesFontSize += 0.35;

  yesBtn.style.padding = `${yesPaddingVert}px ${yesPaddingHoriz}px`;
  yesBtn.style.fontSize = `${yesFontSize}rem`;

  noCount++;
});

// YES Click -> Advance to Screen 2
yesBtn.addEventListener('click', () => {
  showScreen('screen2');
});

// Screen 2 -> Screen 3
const toScreen3Btn = document.getElementById('toScreen3Btn');
if (toScreen3Btn) {
  toScreen3Btn.addEventListener('click', () => {
    showScreen('screen3');
  });
}

// Screen 3 -> Screen 4 (Date selection validation)
let selectedDate = '';
const toScreen4Btn = document.getElementById('toScreen4Btn');
if (toScreen4Btn) {
  toScreen4Btn.addEventListener('click', () => {
    const dateInput = document.getElementById('datePicker').value;
    if (!dateInput) {
      alert("Please pick a date first!");
      return;
    }
    selectedDate = dateInput;
    showScreen('screen4');
  });
}

// Screen 4: Select activity option logic
let selectedActivity = '';
const optionBtns = document.querySelectorAll('.option-btn');

optionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    optionBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedActivity = btn.getAttribute('data-val');
  });
});

// Screen 4 -> Screen 5 (Lock-in summary validation)
const lockBtn = document.getElementById('lockBtn');
if (lockBtn) {
  lockBtn.addEventListener('click', () => {
    if (!selectedActivity) {
      alert("Please select what you would like to do!");
      return;
    }
    
    // Format date for neat display
    const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    document.getElementById('summaryDate').innerText = `Date: ${formattedDate}`;
    document.getElementById('summaryActivity').innerText = `Activity: ${selectedActivity}`;
    showScreen('screen5');
  });
}