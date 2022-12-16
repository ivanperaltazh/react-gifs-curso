import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";

//Importacion de barril reemplaza a dos anteriores:
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

  // es mejor dar valor inical para evitar null y excepciones
  const [categories, setCategories] = useState(["One Punch"]); 
 
//   no usamos push para insertar en arrya porque muta el estado y eso react no permite y no funciona
//   lo que hacenos creamos es un nuevo estado es decir un nuevo arreglo con setCategories
  const onAddCategory = (valueEvent) =>{ 

    if (categories.includes(valueEvent)) return; // si ya existe esa categoria salimos, sino la inserta. Esto se hace para evitar el uso del indice del map() en el key
   /* No se recomienda usar el indice del map(category, 1)  key = {1} como identificador unico del key de react porque react usa ese dientificador para 
    y cuando se borra un elemento por ejemplo el 1 ese indicia pasarian al siguiente elemento y siempre abria un elemento 1 */

     console.log(valueEvent);
     setCategories([valueEvent, ...categories]);
     // setCategories(['datoPrueba', ...categories]);
    //  setCategories(cat  => [...cat, 'datoPrueba']); // otra forma de hacerlo.
  }

  return (
   <>
   <h1>GifExperteApp</h1>

   {/* Input, Props: le podemos pasar variables o funciones como en este caso en las props */}
   {/* COMUNICACION ENTRE COMPONENTES SE HACE CON LAS PROPS */}
   {/* nombres empiezan por 'on' indica que esta emitiendo algo, es comun en los eventos */}
   <AddCategory 
       //    setCategories={setCategories} //esto tambien funciona, otra forma abajo
       onNewCategory = {valEvent =>{onAddCategory(valEvent)}}
   />


   {/* Listado de Git */}
   {/* No se recomienda usar el indice del map(category, 1)  key = {1} como identificador unico del key de react porque react usa ese dientificador para 
    y cuando se borra un elemento por ejemplo el 1 ese indicia pasarian al siguiente elemento y siempre abria un elemento 1 */}
    {/* <button onClick={onAddCategory}>Agregar</button> */}
      {
        categories.map((category) => (
            <GifGrid 
                key={category} 
                category = {category}
            />
        )) 
      }  
   </>
  )
}
