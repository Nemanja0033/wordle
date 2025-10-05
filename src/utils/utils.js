export const getColor = (letter, index, rightWord) => {
  if (!rightWord) return { className: 'inactive inactive-text' };

  if (rightWord[index] === letter) {
    return { className: 'correct correct-text' };
  }

  if (rightWord.includes(letter)) {
    return { className: 'present present-text' };
  }

  return { className: 'absent absent-text' };
};
