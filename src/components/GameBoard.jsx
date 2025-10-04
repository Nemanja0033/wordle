import React, { useState } from 'react'
import { useGetWords } from '../hooks/useGetWords.js'
import { useGameLogic } from '../hooks/useGameLogic.js'
import { getColor } from '../utils/utils.js'

const GameBoard = () => {
  const { rightWordRef, allWordsRef } = useGetWords();
  const { wordRef, squares } = useGameLogic(allWordsRef, rightWordRef);
  
  return (
    <main style={{ backgroundColor:'#1a1a1d', width: '100%', height: '89.6vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          width: 'auto',
          height: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 'repeat(6, 1fr)',
          gap: '10px',
        }}
      >
        {squares.map((line, i) =>
          line.letters.map((letter, j) => (
            <div
              key={`${i}-${j}`}
              style={{
                marginTop: '2px',
                backgroundColor: i < wordRef.current ? getColor(letter, j, rightWordRef?.current).backgroundColor : '#3a3f47',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '55.99px',
                height: '55.99px',
              }}
            >
                <span
                  style={{
                    color: i < wordRef.current ? getColor(letter, j, rightWordRef?.current).color : 'white',
                    fontSize: '32px',
                  }}
                >
                  {letter.toUpperCase()}
                </span>
            </div>
          ))
        )}
      </div>
    </main>
  )
}

export default GameBoard