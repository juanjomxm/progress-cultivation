import React from "react"
import { ProgressContext } from "../ContextGlobal/ContextGlobal"
import { CultivationProgress } from "../ContextProgressPlant/ContextProgress";

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

    const{
        createPortal
    } = React.useContext(CultivationProgress)

    return(
        <div className="images">
            <h2>{name}</h2>
            {newImage && <img
            src={src} // Para poder tener persistencia con las imagenes que se suban desde el pc debo tener un servidor en el cual pueda almacenar la url de la imagen y asi poderla volver a renderizar en la app
            width={300}
            height={300}
            ></img>}         
            <button
            onClick={createPortal}
            >PROGRESO</button>
            <button
            onClick={deletedPlant}
            >ELIMINAR</button>
        </div>
    )
}
export { ContainerImagesPlants }
export { ImageCultivation}