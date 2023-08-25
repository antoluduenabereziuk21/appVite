import { useEffect, useState } from "react";
import "./App.css";
import { getImageFact, getPrefixUrl, getRamdomFact } from "./facts";
import { useCatImage } from "./hooks/Custom.hooks";



export function App() {
  const [fact, setFact] = useState();

  //para recuperar la cita al cargar la pagina
  useEffect(() => {
    getRamdomFact().then(newFact => setFact(newFact));
    
  }, []);

  //para recuperar la imagen cada vex que tenemos una cita nueva
  /*useEffect(() => {
    if (!fact) return;
      getImageFact().then(newImageUrl => setImageUrl(newImageUrl));
  }, [fact]);*/
  const {imageUrl} = useCatImage({fact});
  
  const handleClick = async () => {
    const newFact = await getRamdomFact();
    setFact(newFact);
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
