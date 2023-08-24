import { getImageFact } from "../facts";
import { useState ,useEffect} from "react";

export const useCatImage=(initialState={fact})=>{

    const [imageUrl, setImageUrl] = useState(initialState);

    useEffect(() => {
        if (!initialState) return;
          getImageFact().then(newImageUrl => setImageUrl(newImageUrl));
      }, []);

      return {imageUrl};

}