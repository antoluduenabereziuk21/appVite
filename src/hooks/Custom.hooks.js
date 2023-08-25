import { getImageFact, getRamdomFact } from "../facts";
import { useState, useEffect } from "react";

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState({ fact });
  useEffect(() => {
    if (!fact) return;
    getImageFact({ fact }).then((newImageUrl) => setImageUrl(newImageUrl));
  }, [fact]);

  return { imageUrl };
};

export const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshFact = ()=>{
    getRamdomFact().then((newFact) => setFact(newFact));
  }

  useEffect( refreshFact , []);

  return {fact , refreshFact};
};
