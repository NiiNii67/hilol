// Screen Transition Function with Slide Animations
function transitionScreen(currentScreenId, nextScreenId) {
  const currentScreen = document.getElementById(currentScreenId);
  const nextScreen = document.getElementById(nextScreenId);

  if (currentScreen && nextScreen) {
    currentScreen.classList.remove('active');
    currentScreen.classList.add('slide-out');
    nextScreen.classList.add('active');
  }
}

// Screen 1 Elements & Logic
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const subText = document.getElementById('subText');

let noCount = 0;
let yesPaddingVert = 12;
let yesPaddingHoriz = 20;
let yesFontSize = 0.9;

const noMessages = [
  "are u sure?",
  "sure na talaga? :(",
  "pretty please",
  "fine... </3"
];

noBtn.addEventListener('click', () => {
  if (noCount < noMessages.length) {
    subText.innerText = noMessages[noCount];

    // Grow YES button for clicks 1 to 3
    if (noCount < 3) {
      yesPaddingVert += 10;
      yesPaddingHoriz += 18;
      yesFontSize += 0.35;

      yesBtn.style.padding = `${yesPaddingVert}px ${yesPaddingHoriz}px`;
      yesBtn.style.fontSize = `${yesFontSize}rem`;
    }

    noCount++;

    // 4th Click: End flow and show Screen 6 ("ghost the sender")
    if (noCount === 4) {
      setTimeout(() => {
        transitionScreen('screen1', 'screen6');
      }, 600);
    }
  }
});

// YES Click -> Screen 1 to Screen 2
yesBtn.addEventListener('click', () => {
  transitionScreen('screen1', 'screen2');
});

// Screen 2 -> Screen 3
const toScreen3Btn = document.getElementById('toScreen3Btn');
if (toScreen3Btn) {
  toScreen3Btn.addEventListener('click', () => {
    transitionScreen('screen2', 'screen3');
  });
}

// Screen 3 -> Screen 4
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
    transitionScreen('screen3', 'screen4');
  });
}

// Screen 4 Options Selection
let selectedActivity = '';
const optionBtns = document.querySelectorAll('.option-btn');

optionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    optionBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedActivity = btn.getAttribute('data-val');
  });
});

// Screen 4 -> Screen 5
const lockBtn = document.getElementById('lockBtn');
if (lockBtn) {
  lockBtn.addEventListener('click', () => {
    if (!selectedActivity) {
      alert("Please select what you would like to do!");
      return;
    }

    const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    document.getElementById('summaryDate').innerText = `Date: ${formattedDate}`;
    document.getElementById('summaryActivity').innerText = `Activity: ${selectedActivity}`;
    
    transitionScreen('screen4', 'screen5');
  });
}