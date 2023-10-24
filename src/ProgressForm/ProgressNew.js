import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { CultivationProgress } from "../ContextProgressPlant/ContextProgress";

function ButtonModalProgress(){
    const{
        setOpenmodalProgressImages,
        // setOpenmodalProgress
    }= React.useContext(ProgressContext)
    const{
        setOpenmodalProgress
    } = React.useContext(CultivationProgress)

    const onCancel = (event)=>{
        event.preventDefault()
        setOpenmodalProgress(false)
    }

    return(
        <div className="container-buttons-progress">
            <div className="container-button-progress">
                <button className="button-progress-week"
                    onClick={()=>{
                        setOpenmodalProgressImages(state => !state)
                    }}
                >+</button>
            </div>

            <div className="container-button-back">
                <button className="button-back"
                    onClick={onCancel}
                >Atras</button>
            </div>
        </div>
    )
}

function ContainerProgressPlants({children}){
    return(
        children
    )
}

function ProgressNew({week, src, textWeek}){
    const {
        deletedPlantProgress,
        setNewProgress
    } = React.useContext(CultivationProgress)

    const onchangeTextProgress = (event)=>{
        setNewProgress(event.target.value)
    }

    return(
        <div className="modal-progress-images">
            <div className="div-content-progress">
                <h2>{week}</h2>
                <img
                src={src}
                width={200}
                height={200}
                ></img>
                <textarea
                className="text-progress-plant"
                value={textWeek}
                onChange={onchangeTextProgress}
                >   
                </textarea>
                <button
                onClick={deletedPlantProgress}
                >
                Eliminar
                </button>
            </div>
        </div>
    )
}
export { ContainerProgressPlants }
export { ProgressNew }
export { ButtonModalProgress }
