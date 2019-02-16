document.addEventListener("DOMContentLoaded", () => {
  const qwerty = document.getElementById('qwerty');
  const phrase = document.getElementById('phrase');
  const phrases = [
  'impossible is for the unwilling',
  'take the risk or lose the chance',
  'focus on the good',
  'enjoy today',
  'never stop dreaming'
  ];
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
  // function that randomly choosees a phrase from the phrases array and split that phrase into a new array of characters.
  // The function returns the new character array.
  function getRandomPhraseAsArray(arr) {

  }

  // loops through an array of characters
  function addPhraseToDisplay(arr) {

  }

  //const phraseArray = getRandomPhraseAsArray(phrases);
  //addPhrasetoDisplay(phraseArray);

  function checkLetter(letter) {

  }

  // each time the player guesses a letter, the function checks whether the game has been won or lost
  function checkWin() {

  }



});
