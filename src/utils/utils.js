export const API_URL = 'https://darkermango.github.io/5-Letter-words/words.json';

export const RANDOM_INDEX = Math.floor(Math.random() * 5757);

export const getColor = (letter, index, rightWord) => {
  if (!rightWord) return '';

  if (rightWord[index] === letter) {
    return 'green'; 
  }
  
  if (rightWord.includes(letter)) {
    return 'orange';
  }
  
  return ''; // slovo ne postoji u reči
   
};
