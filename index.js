var computerPlays =[];
var count = 0;

function getComputerPlays() {
  // for each count, generate a random number, figure out next button that will light up based on number
  // add to sequence by pushing that button into an array
  var random = Math.random();
  if (random < 0.25) {
    computerPlays.push('blue');
  } else if (random < 0.5) {
    computerPlays.push('red');
  } else if (random < 0.75) {
    computerPlays.push('green');
  } else if (random < 1) {
    computerPlays.push('yellow');
  }
}

function runComputerPlays() {
  // go through that array, make the buttons light up
    // add class to button and then remove it
  computerPlays.map(function(play) {
    var playBtn = document.getElementById(play);
    playBtn.classList.add('lightup');
    setTimeout(function() {
      playBtn.classList.remove('lightup');
    }, 1500);
  });
}

function startGame() {
  // increment count, update display
  count++;
  var countDisplay = document.getElementById('count__number');
  countDisplay.innerHTML = count;

  getComputerPlays();
  runComputerPlays();

  // push user's button presses into an array
  // compare original light up array with user presses array

  // link sounds to play button clicks
}
