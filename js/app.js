document.addEventListener("DOMContentLoaded", () => {

  const qwerty = document.getElementById('qwerty');
  const phrase = document.getElementById('phrase');

  const overlay = document.getElementById('overlay');
  // keeps track of the number of guesses the player has missed
  let missed = 0;

  // OVERLAY
  overlay.addEventListener('click', (e) => {
    if(e.target.tagName === 'A'){
        // hide the screen overlay
        overlay.style.display = 'none';
    }
  });

  overlay.addEventListener('mouseover', (e) => {
    if(e.target.tagName === 'A'){
        // change the cursor into pointer
        e.target.style.cursor = 'pointer';
    }
  });

  // 


});
