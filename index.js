var computerPlays =[];
var userPlays = [];
var round = 0;

function getComputerPlays() {
  // for the first count, generate a random number, figure out next button that will light up based on number
  // add to sequence by pushing that button into an array

  // what about each subsequent count??

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
  round++;
  var roundDisplay = document.getElementById('round__number');
  roundDisplay.innerHTML = round;

  getComputerPlays();
  runComputerPlays();

  // on each of user's button clicks
  // push user's button presses into an array
  // compare original light up array with user presses array
  var playBtns = document.querySelectorAll('playButton');
  for (var j = 0; j < playBtns.length; j++) {
    playBtns[j].addEventListener('click', function() {
      userPlays.push(); // push the id of the button
    });
  }

  // link sounds to play button clicks
}
