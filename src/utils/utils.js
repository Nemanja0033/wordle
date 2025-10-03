export const API_URL = 'https://darkermango.github.io/5-Letter-words/words.json';

export const RANDOM_INDEX = Math.floor(Math.random() * 5757);

export const getColor = (letter, index) => {
    if (testWord.includes(letter)) {
      if (testWord.indexOf(letter) === index) {
        return 'green'; 
      }
      return 'orange'; 
    }
    return ''; 
};
