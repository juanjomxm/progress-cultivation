import React from "react"
import { ProgressContext } from "../ContextGlobal/ContextGlobal"
import { Link } from "react-router-dom"

function ContainerImagesPlants({children}){
    return(
        children
    )
}

function ImageCultivation({name, src}){
    const{
        deletedPlant,
        newImage,
    } = React.useContext(ProgressContext)

    return(
        <div className="images">
            <h2>{name}</h2>
            {newImage && <img
            src={src} // Para poder tener persistencia con las imagenes que se suban desde el pc debo tener un servidor en el cual pueda almacenar la url de la imagen y asi poderla volver a renderizar en la app
            width={300}
            height={300}
            ></img>}
            <button>
                <Link to={'/week'}>PROGRESO</Link>
            </button>
            <button
            onClick={deletedPlant}
            >ELIMINAR</button>
        </div>
    )
}
export { ContainerImagesPlants }
export { ImageCultivation}