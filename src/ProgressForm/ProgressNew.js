import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { CultivationProgress } from "../ContextProgressPlant/ContextProgress";

function ButtonProgress(){
    const{
        setOpenmodalProgressImages
    }= React.useContext(ProgressContext)
    return(
        <div className="container-button-progress">
            <button className="button-progress-week"
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
        <div className="container-button-back">
            <button className="button-back"
                onClick={onCancel}
            >Atras</button>
        </div>
    )
}

function ContainerProgressPlants({children}){
    return(
        children
    )
}

function ProgressNew({name, src, textWeek}){
    const {
        itemProgress,
    } = React.useContext(CultivationProgress)

    return(
        <div className="modal-progress-images">
            <div className="div-content-progress">
                <h2>{name}</h2>
                <img
                src={src}  //"https://th.bing.com/th/id/OIP.m8_MyAUS-Oh09BcOgZwB9gHaJ4?pid=ImgDet&rs=1"// Todavia no logro que se renderize lo que deseo, solo muestra los dos botones
                width={200}
                height={200}
                ></img>
                <p>{textWeek}</p>
            </div>
        </div>
    )
}
export { ContainerProgressPlants }
export { ProgressNew }
export { ButtonProgress }
export { ButtonBack }
