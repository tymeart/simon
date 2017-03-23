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
  demoArr.push('one');
} else if (random < 0.5) {
  demoArr.push('two');
} else if (random < 0.75) {
  demoArr.push('three');
} else if (random < 1) {
  demoArr.push('four');
}

// go through that array, make the buttons light up
  // add class to button and then remove it
for (var i = 0; i < demoArr.length; i++) {
  document.getElementById(`${demoArr[i]}`).classList.add('lightup');
}

// push user's button presses into an array
// compare original light up array with user presses array

// link sounds to play button clicks
