var computerPlays =[];
var userPlays = [];
var round = 0;

var blueSound = new Audio(['https://s3.amazonaws.com/freecodecamp/simonSound1.mp3']);
var redSound = new Audio(['https://s3.amazonaws.com/freecodecamp/simonSound2.mp3']);
var greenSound = new Audio(['https://s3.amazonaws.com/freecodecamp/simonSound3.mp3']);
var yellowSound = new Audio(['https://s3.amazonaws.com/freecodecamp/simonSound4.mp3']);

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
    var compPlayBtn = document.getElementById(play);

    switch(play) {
      case 'blue':
        compPlayBtn.classList.add('lightup');
        blueSound.play();
        setTimeout(function() {
          compPlayBtn.classList.remove('lightup');
        }, 1500);
        break;
      case 'red':
        compPlayBtn.classList.add('lightup');
        redSound.play();
        setTimeout(function() {
          compPlayBtn.classList.remove('lightup');
        }, 1500);
        break;
      case 'green':
        compPlayBtn.classList.add('lightup');
        greenSound.play();
        setTimeout(function() {
          compPlayBtn.classList.remove('lightup');
        }, 1500);
        break;
      case 'yellow':
        compPlayBtn.classList.add('lightup');
        yellowSound.play();
        setTimeout(function() {
          compPlayBtn.classList.remove('lightup');
        }, 1500);
        break;
      default:
        console.log('Uh oh, something went wrong.');
    }

  });
}

function startGame() {
  // increment count, update display
  round++;
  var roundDisplay = document.getElementById('round__number');
  roundDisplay.innerHTML = round;

  // run getComputerPlays as many times as the number of plays the current round should have
  for (var k = 0; k < round; k++) {
    getComputerPlays();
  }
  runComputerPlays();

  // on each of user's button clicks
  // push user's button presses into an array
  // compare original light up array with user presses array
  var playBtns = document.querySelectorAll('playButton');

  for (let j = 0; j < playBtns.length; j++) {
    playBtns[j].addEventListener('click', function() {
      playBtns[j].classList.add('lightup');

      switch(playBtns[j].id) {
        case 'blue':
          blueSound.play();
          break;
        case 'red':
          redSound.play();
          break;
        case 'green':
          greenSound.play();
          break;
        case 'yellow':
          yellowSound.play();
          break;
        default:
          console.log('Uh oh, something went wrong with the button you chose.');
      }
      setTimeout(function() {
        playBtns[j].classList.remove('lightup');
      }, 1500);
      userPlays.push(playBtns[j].id);

      // check if last item in userPlays matches the item at the same index in computerPlays
      if (computerPlays[j] !== userPlays[j]) {
        break;
      }
    });
  }
}
