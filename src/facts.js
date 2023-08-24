const CAT_ENDPOINT__RAMDOM_FACT = `https://catfact.ninja/fact`;

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