  // Date of the last chinese Kalum ordered (format: year, month - 1, day)
  const startDate = new Date(2024, 4, 5);
  const numRaindrops = 50;
  const content = document.getElementById('content');

  // Date logic
  function updateDaysSince() {
    const now = new Date();
    const timeDifference = now - startDate;
    const daysSince = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById("daysSince").textContent = `${daysSince} days`;
  }

  updateDaysSince();

  
  // Song functionality
  var song = new Audio('assets/song.mp3')
  document.body.addEventListener('click', function() { 
    song.play()
    startRain()
   });
  

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