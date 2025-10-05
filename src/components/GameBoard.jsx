import React from 'react'
import { useGetWords } from '../hooks/useGetWords.js'
import { useGameLogic } from '../hooks/useGameLogic.js'
import { getStyles } from '../utils/utils.js'

const GameBoard = () => {
  const { rightWordRef, allWordsRef } = useGetWords();
  const { wordRef, squares } = useGameLogic(allWordsRef, rightWordRef);
  
  return (
    <main className="main-container">
      <div className="grid-container">
        {squares.map((line, i) =>
          line.letters.map((letter, j) => {
            const isActive = i < wordRef.current;
            const colorClass = isActive
              ? getStyles(letter, j, rightWordRef?.current).className
              : 'inactive';

            return (
              <div key={`${i}-${j}`} className={`grid-cell ${colorClass}`}>
                <span className={`grid-letter ${isActive ? 'active-text' : 'inactive-text'}`}>
                  {letter.toUpperCase()}
                </span>
              </div>
            );
          })
        )}
      </div>
    </main>

  )
}

export default GameBoard