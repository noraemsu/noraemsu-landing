window.addEventListener('DOMContentLoaded', function() {
    var fullscreenAnimation = document.querySelector('.fullscreen-animation');
  
    // Add loaded class after animation duration (e.g., 1 second)
    setTimeout(function() {
      fullscreenAnimation.classList.add('loaded');
    }, 1000);
});


// Write out message and remove
var words = [
    'Hewwwoo and welcome to my site :3',
    'You look very cute today! 😳',
    'Have a great day! 💜',
    'Meow meow meow!',
    'I love playing with yarn!',
    'Purr purr purr...',
    'WAWAWAWAW',
    ':3'
  ];
  
  var part;
  var i = 0;
  var offset = 0;
  var len = words.length;
  var forwards = true;
  var skip_count = 0;
  var skip_delay = 15;
  var speed = 65;
  var interval;
  
  var wordflick = function() {
    var randomIndices = getRandomIndices(len, 2); // Get two random indices
    var randomWords = randomIndices.map(function(index) {
      return words[index];
    });
  
    interval = setInterval(function() {
      if (forwards) {
        if (offset >= randomWords[i].length) {
          ++skip_count;
          if (skip_count === skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          do {
            i++;
            if (i >= randomWords.length) {
              clearInterval(interval);
              $('.catSpeak').empty();
              return;
            }
          } while (randomWords[i] === randomWords[i - 1]); // Skip if the next word is the same
          offset = 0;
        }
      }
      part = randomWords[i].substr(0, offset);
      if (skip_count === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      $('.catSpeak').text(part);
    }, speed);
  };
  
  $(document).ready(function() {
    // Update the width of .word initially
    $('.words').width($(window).width());
  
    // Update the width of .word on window resize
    $(window).resize(function() {
      $('.words').width($(window).width());
    });
  
    wordflick();
  });
  
  function getRandomIndices(length, count) {
    var indices = [];
    var availableIndices = Array.from({ length: length }, (_, index) => index); // Create an array of available indices
    
    for (var i = 0; i < count; i++) {
      var randomIndex = Math.floor(Math.random() * availableIndices.length);
      var index = availableIndices[randomIndex]; // Get a random index from available indices
      availableIndices.splice(randomIndex, 1); // Remove the selected index from available indices
      indices.push(index);
    }
    
    return indices;
  }


// Meow spam
var meowWords = ['meow', 'purr', '💋', 'wawawawa', 'meeeeow', '💜'];

function createMeow() {
    var meow = document.createElement('div');
    meow.className = 'meow';
  
    // Choose a random word from the array
    var randomWord = meowWords[Math.floor(Math.random() * meowWords.length)];
    meow.innerText = randomWord;
  
    // Set random position
    var maxX = window.innerWidth - meow.offsetWidth;
    var maxY = window.innerHeight - meow.offsetHeight;
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    meow.style.top = randomY + 'px';
    meow.style.left = randomX + 'px';
  
    // Set random rotation
    var rotation = Math.floor(Math.random() * 360);
    meow.style.transform = 'rotate(' + rotation + 'deg)';
  
    var randomSize = Math.floor(Math.random() * 40) + 10; // Random size between 10 and 40 pixels
    meow.style.fontSize = randomSize + 'px';
  
    // Append to container
    document.getElementById('meowbox').appendChild(meow);
  
    // Trigger the fade-out transition after a short delay
    setTimeout(function() {
      meow.style.opacity = '0'; // Start the fade-out transition
      meow.addEventListener('transitionend', function() {
        meow.remove(); // Remove the element after the transition ends
      });
  
      // Set transition duration to 1 second
      meow.style.transitionDuration = '1s';
    }, 1000); // Wait for 10 seconds before starting the fade-out
    // Set animation properties
    meow.style.animationName = 'moveMeow';
    meow.style.animationDuration = '5s';
    meow.style.animationIterationCount = 'infinite';
    meow.style.animationTimingFunction = 'linear';
    
      // Generate random animation delay
    var animationDelay = Math.floor(Math.random() * 1) + 's';
    meow.style.animationDelay = animationDelay;
    // Generate random animation direction (left or right)
    var animationDirection = Math.random() < 0.5 ? 'normal' : 'reverse';
    meow.style.animationDirection = animationDirection;
    // Generate random animation rotation
    var animationRotation = Math.floor(Math.random() * 360) + 'deg';
    meow.style.animationRotation = animationRotation;
}
  
function startMeowAnimation() {
  // Create "meow" elements every second for 10 seconds
  var interval = setInterval(function() {
    createMeow();
  }, 325);

  // Stop after 10 seconds
  setTimeout(function() {
    clearInterval(interval);
  }, 9000);
}
  
// Start the animation when the page is loaded
window.addEventListener('load', startMeowAnimation);
