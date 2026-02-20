// Date of the last chinese Kalum ordered (format: year, month - 1, day)
const startDate = new Date(2026, 1, 20);
const numRaindrops = 50;
const content = document.getElementById('content');
const title = document.getElementById('title')
const picture = document.getElementById('main-image')
const scarePicture = document.getElementById('scare-image')
var chineseSong = new Audio('assets/song.mp3')
var scareAudio = new Audio('assets/scare.mp3')
const hiddenInput = document.getElementById('hidden-input')

const phrase = 'chickenball'
let typedLetters = ''

// 'chickenball' type functionality
document.addEventListener('keypress', function (event) {
  typedLetters += event.key;

  if (typedLetters.toLowerCase().includes(phrase)) {
    // Turn off and reset the song
    chineseSong.pause()
    chineseSong.currentTime = 0

    jumpScare()
  }

  if (typedLetters.length > phrase.length) {
    typedLetters = ''
  }
})

// Song functionality
document.body.addEventListener('click', function () {
  hiddenInput.focus()
  chineseSong.play()
  startRain()
});

// Jumpscare logic
function jumpScare() {
  picture.style.display = 'none'
  scarePicture.style.display = 'block'
  title.textContent = 'Your soul is mine...'
  scareAudio.play()
}

// Date logic
function updateDaysSince() {
  const now = new Date();
  const timeDifference = now - startDate;
  const daysSince = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  document.getElementById("daysSince").textContent = `${daysSince} days`;
}

// Raining chickenball logic
function createFallingChickenball() {
  const raindrop = document.createElement('div');
  raindrop.className = 'chickenball';
  raindrop.style.left = `${Math.random() * 100}vw`;
  raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
  content.appendChild(raindrop);
}

function startRain() {
  for (let i = 0; i < numRaindrops; i++) {
    createFallingChickenball();
  }
}

updateDaysSince();

