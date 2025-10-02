import React, { useEffect, useState } from 'react';

const App = () => {
  const [squares, setSquares] = useState(Array.from({ length: 6 }, () => ({ letters: ['', '', '', '', '',] })));

  useEffect(() => {
    console.log(squares);

    const handleKeyPress = (e) => {
      // Enter a letter on square
       setSquares((prevSquares) => {
        const newSquares = [...prevSquares];
        const firstSquare = { ...newSquares[0] };
        const letters = [...firstSquare.letters];

        const emptyIndex = letters.findIndex((l) => l === '');
        if (emptyIndex !== -1) {
          letters[emptyIndex] = e.key;
          console.log('@letter', letters[emptyIndex])
          firstSquare.letters = letters;
          newSquares[0] = firstSquare;
        }

        return newSquares;
      });
    };

    window.addEventListener('keydown', handleKeyPress);
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
              <span>{letter}</span>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default App;
