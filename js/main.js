// Hides the cursor during the intro animation
document.addEventListener('DOMContentLoaded', function() {
    var hideCursor = document.querySelector('.fullscreen-animation');
    var body = document.querySelector('body');
    var introTimer = getComputedStyle(document.documentElement).getPropertyValue('--intoTimer');
  
    // Hide the cursor during the intro animation
    body.style.setProperty('cursor', 'none');
  
    // Show the cursor again after the specified time
    setTimeout(function() {
      body.style.removeProperty('cursor');
    }, parseFloat(introTimer) * 1000 - 1000);
  });

// Disables Right Click Functionality
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});