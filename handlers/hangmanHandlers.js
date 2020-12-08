const { words } = require('../data/words');

// Get a word object for testing
const getWordObj = (id) => {
  const index = words.findIndex(word => word.id === id);

  if (index !== -1) {
    return { status: 'ok', data: words[index] };
  } else {
    return { status: 'error', data: 'Word object not found'};
  }
}

// Get a random word
const getWord = () => {
  index = Math.floor((Math.random() * 11));
  return { status: 'ok', word: words[index].id, letterCount: words[index].letterCount }
}

// Evaluate guess
const evalGuess = (id, letter) => {
  const index = words.findIndex(word => word.id === id);

  if (index !== -1) {
    const wordArray = words[index].word.split('');
    let guessArray = Array(wordArray.length).fill('false');

    wordArray.forEach((char, index) => (char === letter ? guessArray[index] = true : guessArray[index] = false)); 
    return { status: 'ok', data: guessArray };
  } else {
    return { status: 'error', data: 'Word not found'};
  }
}

module.exports = { getWordObj, getWord, evalGuess };
