
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {

// Usando el Custom hook:
 const {images, isLoading} = useFetchGifs(category);
 console.log({images, isLoading});
 
  return (
    <>
      <h3>{category}</h3>
      {/* {isLoading ? (<h2>Cargando ...</h2>) : null} */}
      {isLoading && (<h2>Cargando ...</h2>) }
      {/* <LoadingMessage isLoading={isLoading}/> // otra forma creando un componente */}

      <div className="card-grid">
        {/* { images.map(image => (<li key={image.id}>{image.title} </li>))} // mejor con desestructuracion: */}
        {/* { images.map(({id, title}) => (<li key={id}>{title} </li>))}  // o sino usar un componente:*/}
       { 
        images.map((image) => (
             <GifItem 
                key={image.id} 
                // image={image} // se puede mandar toda la imagen o solo algunas propiedades
                // title={image.title} // envio titulo
                // url={image.url} // envio url
                { ...image} //envio todas las propiedades cuando hay muchas, igual que las anteriores como properties
                />
             ))
        }
      </div>
    </>
  )
}
