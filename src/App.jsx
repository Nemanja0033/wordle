import React, { useEffect, useState, useRef } from 'react';

const App = () => {
  const [squares, setSquares] = useState(Array.from({ length: 6 }, () => ({ letters: ['', '', '', '', '',] })));
  const wordRef = useRef(0);
  const testWord = 'house';

  useEffect(() => {
    console.log('@changed letters', squares);
  }, [squares]);
  
  useEffect(() => {
    function insertLetter(e) {

      if (e.key === 'Enter') {
        setSquares((prevSquares) => {
          const currentWord = prevSquares[wordRef.current];
          if(wordRef.current >= 6 ) return; 
          if (currentWord.letters.includes('')) return prevSquares;
    
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

    window.addEventListener('keydown', insertLetter);
  }, []);

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
              <span style={{ color: testWord.includes(letter) ? 'green' : '' }}>{letter}</span>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default App;
