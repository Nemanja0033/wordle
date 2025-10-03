import React from 'react'
import { useGetWords } from '../hooks/useGetWords.js'
import { useGameLogic } from '../hooks/useGameLogic.js'
import { getColor } from '../utils/utils.js'

const GameBoard = () => {
  const { rightWordRef, allWordsRef } = useGetWords();
  const { wordRef, squares } = useGameLogic(allWordsRef, rightWordRef);
  
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
                <span
                  style={{
                    color: i < wordRef.current ? getColor(letter, j, rightWordRef?.current) : '',
                    fontSize: '20px',
                  }}
                >
                  {letter}
                </span>
            </div>
          ))
        )}
      </div>
    </main>
  )
}

export default GameBoard