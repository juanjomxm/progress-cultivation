import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";

function ButtonAddProgress(){
    return(
        <button
            // Con el evento de este boton debo hacer que abra el modal para agregar el nuevo progreso
        >Progreso</button>
    )
}

function ProgressNew(){
    const {
        setOpenmodalProgress
    } = React.useContext(ProgressContext)
    //const [newProgressPage, setNewProgressPage] = React.useState('')

    const onCancel = (event)=>{
        event.preventDefault()
        setOpenmodalProgress(false)
    }

    return(
        <div>
            <h2>Semana</h2>
            <img
            src="https://th.bing.com/th/id/OIP.m8_MyAUS-Oh09BcOgZwB9gHaJ4?pid=ImgDet&rs=1"
            width={300}
            height={300}
            ></img>
            <p>Aca debe ir el progreso de la planta</p> 
            <div>
                <button
                onClick={onCancel}
                >Cerrar</button>
            </div>
        </div>
    )
}
export { ProgressNew }
export { ButtonAddProgress }