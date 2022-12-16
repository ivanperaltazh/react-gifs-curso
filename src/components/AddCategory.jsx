import { useState } from "react";

//export const AddCategory = (props)// desestructuramos prop resivida:
export const AddCategory = ({setCategories, onNewCategory}) => {

const [inputValue, seTInputValue] = useState('');

// const onInputChange = (event) => {
//     seTInputValue(event.target.value);
// } 
// Desestructurando target seria asi:

const onInputChange = ({target}) => {
    console.log(target.value);
    seTInputValue(target.value);
}

const onSubmit = (event) =>{
   event.preventDefault(); // evita comporetamiento por defecto de formulario que es refrescar pagina, al pulsar enter enviar
   //console.log(event);
   if(inputValue.trim().length <= 1) return; // si el valor no existe no insertamos
     
  // setCategories(categories  => [inputValue, ...categories]); // mas sencillo usando onAddCategory()
  onNewCategory(inputValue.trim());
   seTInputValue(''); // luego de insertar limpiamos caja de texto
}


  return (    
    <form onSubmit={onSubmit}> 
      {/* resumiendo el onSubmit arriba, otra forma abajo */}
      {/*  <form onSubmit={(event) => onSubmit(event)}> */}
    
    <input
      type="text"
      placeholder="Buscar gifs"
      value={inputValue} //capturamos valor 
    //   onChange={(event) => onInputChange(event)} // siempre se envia el event puede simplificarse asi:
      onChange={onInputChange}
    />
    </form>
  )
}
