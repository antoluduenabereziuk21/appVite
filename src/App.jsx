import { useEffect, useState } from "react";
import "./App.css";
//const CAT_ENDPOINT_IMAGE_URL=`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;
const CAT_ENDPOINT__RAMDOM_FACT = `https://catfact.ninja/fact`;
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
    
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  //para recuperar la cita al cargar la pagina
  useEffect(() => {
    return () => {
      fetch(CAT_ENDPOINT__RAMDOM_FACT)
        .then((res) => res.json())
        .then((data) => {
          const { fact } = data;
          setFact(fact);
        });
    };
  }, []);
  //para recuperar la imagen cada vex que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return;
    //const firstWord = fact.split(' ')[0];
    //las tres primeras palabras
    const threeFirstWord = fact.split(" ").slice(0, 3).join(" ");

    //console.log(threeFirstWord);

    fetch(
      `https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);

  return (
    <main>
      <h1>App de Gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
            alt={`Image extracted using the first three words for ${fact}`}
          />
        )}
      </section>
    </main>
  );
}
