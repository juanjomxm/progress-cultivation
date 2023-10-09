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
    } = React.useContext(ProgressContext)

    return(
        <div className="images">
            <h2>{name}</h2>
            <img
            src={src} // Esta es la solucion, ojala no se dañe mañana, tiene persistencia al recargar pero cuando cierro y vuelvo a abrir la app no me muestra la imagen pero sigue guardada en el localstorage ==> url imagen que tiene persistencia cuando cierro la app https://th.bing.com/th/id/R.87026be1f0164d0571b52fa66f2cc2f7?rik=bPHM3N3VTeYNMg&riu=http%3a%2f%2fwww.clinica-galatea.com%2fwp-content%2fuploads%2f2019%2f02%2fbigstock-Cannabis-Flowers-Growing-Indo-260506210_marihuana.jpg&ehk=xWpspWFigdoAkzRnwaVpfyLgHk4prQUE45zJfx7XeHo%3d&risl=&pid=ImgRaw&r=0
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