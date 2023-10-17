import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";

function ButtonProgress(){
    const{
        setOpenmodalProgressImages
    }= React.useContext(ProgressContext)
    return(
        <div className="button-progress-week">
            <button
                onClick={()=>{
                    setOpenmodalProgressImages(state => !state)
                }}
            >Progreso</button>
        </div>
    )
}

function ButtonBack(){
    const{
        setOpenmodalProgress
    } = React.useContext(ProgressContext)
    const onCancel = (event)=>{
        event.preventDefault()
        setOpenmodalProgress(false)
    }
    return(
        <div className="button-back">
            <button
                onClick={onCancel}
            >Atras</button>
        </div>
    )
}

function ProgressNew({week, srcWeek, textWeek}){
    const {
    } = React.useContext(ProgressContext)

    return(
        <div className="modal-progress-images">
            <div className="div-content-progress">
                <h2>Semana #</h2>
                <img
                src="https://th.bing.com/th/id/OIP.m8_MyAUS-Oh09BcOgZwB9gHaJ4?pid=ImgDet&rs=1"
                width={200}
                height={200}
                ></img>
                <p>Progreso de la planta</p>
            </div>
        </div>
    )
}
export { ProgressNew }
export { ButtonProgress }
export { ButtonBack }