import { useRef, useEffect, useState } from "react";
import { ALLOWED_KEYS } from "../utils/constants";
import { toast } from "react-toastify";

export function useGameLogic(allWordsRef, rightWordRef){
    const [squares, setSquares] = useState(Array.from({ length: 6 }, () => ({ letters: ['', '', '', '', '',] })));
    const wordRef = useRef(0);
  
    useEffect(() => {
        function gameLogic(e) {
        // Validate pressed key
        if(!ALLOWED_KEYS.includes(e.key) ){
            console.log('Invlaid key');
            return;
        }

        // Apply entered word logic
        if (e.key === 'Enter') {
            // Limt word tries.
            if (wordRef.current >= 6) return;

            setSquares((prevSquares) => {
            const currentWord = prevSquares[wordRef.current];

            // Ensure that whole word if filled with chars before apply
            if (currentWord.letters.includes('')) {
                toast('Enter full word!');
                return [...prevSquares];
            }

            // Check if entred word is not valid
            if (!allWordsRef.current.includes(currentWord.letters.join(''))) {
                toast('Invalid word!');
                return [...prevSquares];
            }

            // If user guess the word
            if (currentWord.letters.join('') === rightWordRef.current) {
                toast('You guessed the word!');
                wordRef.current++;
                return [...prevSquares];
            }

            // If everything is okay, then move to next try 
            wordRef.current++;
            console.log("@word ref", wordRef.current);
            return [...prevSquares]; 
            });
            return;
        }

        // Delete one letter logic
        if (e.key === 'Backspace') {
            setSquares((prevSquares) => {
            const newSquares = [...prevSquares];
            const word = { ...newSquares[wordRef.current] };
            const letters = [...word.letters];
        
            let lastFilledIndex = -1;
            for (let i = letters.length - 1; i >= 0; i--) {
                if (letters[i] !== '') {
                lastFilledIndex = i;
                break;
                }
            }
        
            if (lastFilledIndex !== -1) {
                letters[lastFilledIndex] = '';
                word.letters = letters;
                newSquares[wordRef.current] = word;
            }
        
            return newSquares;
            });
        }

        // Dont allow user to try more than is allowed
        if(wordRef.current >= 6 ) return;

        // Enter a letter on square logic
        if(ALLOWED_KEYS.includes(e.key)){
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
    
                // if use enter a special char just retun current state
                if(e.key === 'Enter' || e.key === 'Backspace'){
                return newSquares;
                }
    
                //set pressed key as letter
                letters[emptyIndex] = e.key;
                word.letters = letters;
                newSquares[wordRef.current] = word;
            }
    
            return newSquares;
            });
        }
        };

        window.addEventListener('keydown', gameLogic);
    }, []);

    return {
        wordRef,
        squares
    }
}