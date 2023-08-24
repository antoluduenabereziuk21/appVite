import { getImageFact } from "../facts";
import { useState ,useEffect} from "react";

export function useCatImage({fact}){

    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        if (!fact) return;
          getImageFact().then(newImageUrl => setImageUrl(newImageUrl));
      }, [fact]);

      return imageUrl;

}