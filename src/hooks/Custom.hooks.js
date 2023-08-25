import { getImageFact, getRamdomFact } from "../facts";
import { useState, useEffect } from "react";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";
//for get image and refresh image
export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState({ fact });
  useEffect(() => {
    if (!fact) return;
    getImageFact({ fact }).then((newImageUrl) => setImageUrl(newImageUrl));
  }, [fact]);

  return { imageUrl:`${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
};
//for get the Fact
export const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRamdomFact().then((newFact) => setFact(newFact));
  };

  useEffect(refreshFact, []);

  return { fact, refreshFact };
};
