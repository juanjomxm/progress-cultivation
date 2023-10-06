import React from "react"
import { ProgressContext } from "../ContextGlobal/ContextGlobal"

function ContainerImagesPlants({children}){
    return(
        children
    )
}

function ImageCultivation({name}){
    const{
        deletedPlant,
        statePlants,  
    } = React.useContext(ProgressContext)

    const viewImages = statePlants.map(item => item.src)

    return(
        <div className="images">
            <h2>{name}</h2>
            <img
            src={viewImages[0]} // Por fin encontrando el camino, al cargar el formulario muestra la imagen y al recargar tiene persistencia, pero debo encontrar la solucion para que me muestre cada imagen que suba en su respectiva tarjeta de presentacion
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