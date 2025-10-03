import React, { useEffect, useState, useRef } from 'react';
import { API_URL, RANDOM_INDEX } from './utils.js'

const App = () => {
  const [squares, setSquares] = useState(Array.from({ length: 6 }, () => ({ letters: ['', '', '', '', '',] })));
  const wordRef = useRef(0);
  const allWordsRef = useRef(null);
  const rightWordRef = useRef(null);
  const testWord = 'house';

  useEffect(() => {
    const fetchWords =  async () => {
      try{
        const res = await fetch(API_URL);
        const data = await res.json();
        allWordsRef.current = data.words;
        rightWordRef.current = allWordsRef.current[RANDOM_INDEX]
      }
      catch(err){
        console.error('Error while fetching words', err);
      }
    }

    fetchWords();
  }, []);
  
  useEffect(() => {
    function gameLogic(e) {
      // Apply entered word
      if (e.key === 'Enter') {
        // Limt word tries.
        if(wordRef.current >= 6 ) return;

        setSquares((prevSquares) => {
          const currentWord = prevSquares[wordRef.current];

          // Ensure that whole word if filled with chars before apply
          if (currentWord.letters.includes('')) return prevSquares;
          
          // Check if entred word is not valid
          if(!allWordsRef.current.includes(currentWord.letters.join(''))){
            console.log('@invalid wors');
            return prevSquares;
          } 

          // If everything is okay, then move to next try 
          wordRef.current++;
          console.log("@word ref", wordRef.current);
          return prevSquares;
        });
        return;
      }

      if(wordRef.current >= 6 ) return;

      // Enter a letter on square
       setSquares((prevSquares) => {
        const newSquares = [...prevSquares];
        // pick word by wordRef
        const word = { ...newSquares[wordRef.current]};
        console.log('@word', word)
        // spread all letters of word
        const letters = [...word.letters];

        // find first empty letter 
        const emptyIndex = letters.findIndex((l) => l === '');
        if (emptyIndex !== -1) {
          //set pressed key as letter
          letters[emptyIndex] = e.key;
          word.letters = letters;
          newSquares[wordRef.current] = word;
        }

        return newSquares;
      });

    };

    window.addEventListener('keydown', gameLogic);
  }, []);

  const getColor = (letter, index) => {
    if (testWord.includes(letter)) {
      if (testWord.indexOf(letter) === index) {
        return 'green'; 
      }
      return 'orange'; 
    }
    return ''; 
  };

  return (
    <main style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          width: '300px',
          height: '300px',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 'repeat(6, 1fr)',
          gap: '2px',
        }}
      >
        {squares.map((line, i) =>
          line.letters.map((letter, j) => (
            <div
              key={`${i}-${j}`}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50px',
                height: '50px',
                border: '2px solid black',
              }}
            >
              <span style={{ color: getColor(letter, j), fontSize: '20px'}}>{letter}</span>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default App;
