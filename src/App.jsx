
import "./App.css";
import {  getPrefixUrl, } from "./facts";
import { useCatFact, useCatImage } from "./hooks/Custom.hooks";



export function App() {
  
  const {fact , refreshFact}= useCatFact();
  const {imageUrl} = useCatImage({fact});

  
  const handleClick = async () => {
    refreshFact();
   
  };

  return (
    <main>
      <h1>App de Gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={`${getPrefixUrl()}${imageUrl}`}
            alt={`Image extracted using the first three words for ${fact}`}
          />
        )}
      </section>
      <button onClick={handleClick}>new Fact</button>
    </main>
  );
}
