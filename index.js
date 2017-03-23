var computerPlays =[];
var count = 0;

// increment count, update display
count++;
var countNumber = document.getElementById('count__number');
// countNumber.innerHTML = count;

// for each count, generate a random number, figure out next button that lights up based on number
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

// go through that array, make the buttons light up
  // add class to button and then remove it
for (var i = 0; i < demoArr.length; i++) {
  document.getElementById(`${demoArr[i]}`).classList.add('lightup');
}

// push user's button presses into an array
// compare original light up array with user presses array

// link sounds to play button clicks
