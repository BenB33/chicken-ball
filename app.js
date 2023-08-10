  // Set the date since which you want to count days (format: year, month - 1, day)
  const startDate = new Date(2023, 7, 5); // January 1, 2023

  function updateDaysSince() {
    const now = new Date();
    const timeDifference = now - startDate;
    const daysSince = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById("daysSince").textContent = `${daysSince} days`;
  }

  updateDaysSince();


  var song = new Audio('assets/song.mp3')
  document.body.addEventListener('click', function() { 
    song.play()
   });

   