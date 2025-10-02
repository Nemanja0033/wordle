import React, { useEffect, useState } from 'react';

const App = () => {
  const SQUARES = Array.from({ length: 6 }, () => ({ letters: ['', '', '', '', '',] }));

  useEffect(() => {
    console.log(SQUARES);
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
        {SQUARES.map((line, i) =>
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
              <span>{i}-{j}</span>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default App;
