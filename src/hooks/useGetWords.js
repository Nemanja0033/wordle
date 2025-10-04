import { useEffect, useRef } from "react";
import { API_URL, RANDOM_INDEX } from "../utils/utils.js"

export function useGetWords(){
    const allWordsRef = useRef(null);
    const rightWordRef = useRef(null);

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

    return{
        allWordsRef,
        rightWordRef
    }
}