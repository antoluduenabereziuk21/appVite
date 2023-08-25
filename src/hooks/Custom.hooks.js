import { getImageFact } from "../facts";
import { useState ,useEffect} from "react";

export const useCatImage=({fact})=>{

    const [imageUrl, setImageUrl] = useState({fact});
    useEffect(() => {
        if (!fact) return;
          getImageFact({fact}).then(newImageUrl => setImageUrl(newImageUrl));
         ;
      }, [fact]);

      return {imageUrl};

}