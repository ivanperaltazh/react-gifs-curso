import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// ****   Custom Hook resumido los hooks useEffect y useState anteriores en uno solo ****
 // Custom hooks siempre empiezan con la palabra "use"
 // Custom hooks puede tener extension .js o jsx segun lo que retornen
 // Un hook es solo una función que retorna algo.
// un hook es solo una funcion que retornma algo
export const useFetchGifs = (category) => {

    /*
 - Nuca se debe colocar diretamente dentro un component directamete el llamdo a una funcion
    porque cada vez que haya cualquier cambio el componente se renderiza y llamara la funcion como aqui getGifs(category); y vuelve a ejecuta peticion http
 - Vemos que getGifs(category) Se dispara dos veces por el modo estricto en el main  <React.StrictMode> y el modo estricto
   solo se usa en desarrollo. Se dispara porque react hace una verificacion de que se usen las buenas practicas de react.
   pero al hacer un build para produccion el modo estricto no afecta.
- Por tanto para evitar que se llame la funcion con cada rendizacion del componente usamos el hook "useEffect"
  que sirve para disparar efectos segundarios, es decir cuando algo suceda, en este caso cuando el compoente se carga por primera vez
  cuya firma tiene un callback es decir una funcion y una lista de dependencias es decir condiciones con las que se eecutara
  la funcion callback del useEffect(). Si se dejan las depencias vacias [] signica que solo se ejecutara una
  vez la fucnion solo cuando se crea el componente
  */

 //  getGifs(category); // nose debe llamar directamente una funcion por se ejecuta cada vez cambia componente usar  useEffect().



 const [images, setImages] = useState([]); // usamos para mantener el estado de las imagenes
 const [isLoading, setIsLoading] = useState(true); // true al inicio

 useEffect(() => {
    // getGifs(category).then(newImages => setImages(newImages)); // se puede hacer de esta manera o asi:
     getImages(); // se llama aqui para evitar se llame cada vez cambie componente. Lo que no se puede es usar un funcion 
                  // async dentro de useEffect
   }, []);


   const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);// una vez carga imagenes va en false
   }




    return {
        images: images,
        isLoading
    }
 
}
