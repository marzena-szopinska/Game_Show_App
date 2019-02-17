document.addEventListener("DOMContentLoaded", () => {
  const qwerty = document.getElementById('qwerty');
  const phrase = document.getElementById('phrase');
  const list = document.querySelector('#phrase ul');
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
    // generate a random number (from 0 to 4)
    const randNumber = Math.floor(Math.random() * arr.length);
    // use generated number to pick a random phrase
    const randPhrase = phrases[randNumber];
    // split the phrase into a new array of characters
    let arrOfChar = randPhrase.split("");
    // return the new array of characters
    return arrOfChar;
  }

  function addPhraseToDisplay(arr) {
    // loop through a new array of characters
    for(let i = 0; i < arr.length; i += 1){
      // for each character in the array...
      let letter = arr[i];
      //...create a list item
      letter = document.createElement('LI');
      //...put the character inside of the list item
      letter.textContent = arr[i];
      // if the character in the array is a letter and not a space, the function should add the class “letter” to the list item
      if(letter.textContent !== " "){
        letter.className = "letter";
      }
      else {
        letter.className = "space";
      }
      // append that list item to the #phrase ul in your HTML
      list.appendChild(letter);
    }
  }

  const phraseArray = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(phraseArray);

  qwerty.addEventListener('click', (e) => {
    // store the chosen letter
    let letterFound = e.target;

    // when a player chooses a letter that doesnt have class named letter...
    if(letterFound.className !== 'chosen'){
      // add the “chosen” class to that button so the same letter can’t be chosen twice
      letterFound.className = 'chosen';
      // disable the button
      letterFound.setAttribute("disabled", true);
    }
    // pass the clicked letter
    checkLetter(letterFound);
  });

  function checkLetter(pickedKey) {
    let letter = null;
    // get all of the elements with a class of “letter”
    let letters = document.querySelectorAll('.letter');
    // loop over the letters and check if they match the letter in the button the player has chosen
    for(let i = 0; i < letters.length; i += 1) {
      // if there’s a match
      if(pickedKey.textContent === letters[i].textContent){
        // add the “show” class to the list item containing that letter
        // and store the matching letter inside of a variable, and return that letter
        letters[i].className += " " + "show";
        //const letter = letters[i];
        letter = letters[i];
      }
    }
    return letter;
  }

  // each time the player guesses a letter, the function checks whether the game has been won or lost
  function checkWin() {

  }

});
