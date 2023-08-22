import { useEffect, useState } from "react";

//const CAT_ENDPOINT_IMAGE_URL=`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;
const CAT_ENDPOINT__RAMDOM_FACT=`https://catfact.ninja/fact`;
export function App(){

    const [fact, setFact] = useState();

    useEffect(() => {
    
    
      return () => {
        fetch(CAT_ENDPOINT__RAMDOM_FACT)
        .then(res => res.json())
        .then(data=>{
            const {fact} = data
            setFact(fact)

            const firstWord = fact.split(' ')[0];
            //las tres primeras palabras
            const threeWords = fact.split(' ').slice(0, 3).join(' ');
            console.log(threeWords);
            }
        )}
    }, [])
    
    return(
        <main>
            <h1>App de Gatitos</h1>
            {fact && <p>{fact}</p>}
        </main>
            
        
        
    );
};
