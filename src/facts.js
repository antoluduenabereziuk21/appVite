const CAT_ENDPOINT__RAMDOM_FACT = `https://catfact.ninja/fact`;
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";
/*Podemos tener una funcion o tener una funcion async

export const getRamdomFact = ()=>{
    return fetch(CAT_ENDPOINT__RAMDOM_FACT)
    .then((res) => res.json())
    .then((data) => {
      const { fact } = data;
      return fact;
    });
}

*/

export const getRamdomFact = async ()=>{
    const res = await fetch(CAT_ENDPOINT__RAMDOM_FACT);
    const data = await res.json();
    const { fact } = data;
    return fact;
}
//obtenermos las tres primeras palabras
export const getThreeFirstWordsFact = async ()=>{
    const res = await fetch(CAT_ENDPOINT__RAMDOM_FACT);
    const data = await res.json();
    const { fact } = data;
    const threeFirstWord = fact.split(" ").slice(0, 3).join(" ");
    return threeFirstWord;
}

//se la adicionamos al endpoint
const CAT_ENDPOINT_IMAGE_URL=`https://cataas.com/cat/says/${getThreeFirstWordsFact()}?size=50&color=red&json=true`;
//pedimos la imagen con las tres primeras palabras
export const getImageFact = async ()=>{   
    const res = await fetch(CAT_ENDPOINT_IMAGE_URL);
    const data = await res.json();
    const {url}= data;
    return url;
}

export const getPrefixUrl = ()=>{
    return CAT_PREFIX_IMAGE_URL;
}