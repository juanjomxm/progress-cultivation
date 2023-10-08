import React from "react"
import { ProgressContext } from "../ContextGlobal/ContextGlobal"

function ContainerImagesPlants({children}){
    return(
        children
    )
}

function ImageCultivation({name,src}){
    const{
        deletedPlant,
        statePlants,
    } = React.useContext(ProgressContext)

    return(
        <div className="images">
            <h2>{name}</h2>
            <img
            src={src} // Esta es la solucion, ojala no se dañe mañana
            width={300}
            height={300}
            ></img>
            <button
            // onClick={()=>{
            //     setOpenmodal(state => !state)
            // }} Con este boton debo crear otro modal para crear una ventana donde se muestre el progreso del cultivo, diferente al modal para agregar una nueva planta
            >PROGRESO</button>
            <button
            onClick={deletedPlant}
            >ELIMINAR</button>
        </div>
    )
}
export { ContainerImagesPlants }
export { ImageCultivation}