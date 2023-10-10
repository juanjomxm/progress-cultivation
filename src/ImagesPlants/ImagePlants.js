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
        //setOpenmodal,
        setOpenmodalProgress
    } = React.useContext(ProgressContext)
    
    return(
        <div className="images">
            <h2>{name}</h2>
            <img
            src={src} // Esta es la solucion. Toodo esta muy bien, lo unico que sucede es que cuando cargo la imagen desde mi pc en el formulario, al momento de cerrar y volver a abrir la app no se renferiza la imagen en el navegador, pero si queda guardada en el localstorage
            width={300}
            height={300}
            ></img>
            <button
            onClick={()=>{
                setOpenmodalProgress(state => !state)
            }}// Con este boton debo crear otro modal para crear una ventana donde se muestre el progreso del cultivo, diferente al modal para agregar una nueva planta
            >PROGRESO</button>
            <button
            onClick={deletedPlant}
            >ELIMINAR</button>
        </div>
    )
}
export { ContainerImagesPlants }
export { ImageCultivation}