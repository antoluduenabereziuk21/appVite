import { useCatImage } from "../hooks/Custom.hooks";

export function Otro (){

    const {imageUrl} = useCatImage({fact:'cat'});
    return(
        <>
           {imageUrl &&<img  src={imageUrl} />}
        </>
    );
}