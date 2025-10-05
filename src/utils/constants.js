export const API_URL = 'https://darkermango.github.io/5-Letter-words/words.json';
export const RANDOM_INDEX = Math.floor(Math.random() * 5757);
export const ALLOWED_KEYS = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z', 'Enter', 'Backspace'
];
export const SOUNDS = {
    correct: new Audio('/right_letter_right_pos.wav'),
    partial: new Audio('/right_letter_wrong_pos.wav'),
    win: new Audio('guessed_word.wav'),
    invalid_word: new Audio('invalid_word.wav')
}
export const ALLOWED_TRIES = 6;
  