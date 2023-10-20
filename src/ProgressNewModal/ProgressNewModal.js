import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
//import { CultivationProgress } from "../ContextProgressPlant/ContextProgress";

// Esta funcion es el modal como el de agregar planta, pero en este debo agregar el progreso por semana de la planta
function ProgressNewModal(){
    const {
        setOpenmodalProgress,
        setOpenmodalProgressImages,
        //addPlantProgress,
        // newImageProgress,
        // setNewImageProgress
    } = React.useContext(ProgressContext)
    const [newProgress, setNewProgress] = React.useState('')
    // const [newProgressText, setNewProgressText] = React.useState('')
    

    const onSubmit = (event)=>{
        event.preventDefault()
        //addPlantProgress(newProgress)
        setOpenmodalProgress(true)
        setOpenmodalProgressImages(false)
    }

    const onChange = (event)=>{
        setNewProgress(event.target.value)
    }

    // const onChangeText= (event)=>{
    //     setNewProgressText(event.target.value)
    // }

    const onCancel = (event)=>{
        event.preventDefault()
        setOpenmodalProgressImages(false)
    }

    // const onSubmitImageProgress = (event)=>{
    //     setNewImageProgress({
    //       src: URL.createObjectURL(event.target.files[0])
    //     })
    // }

    return(
        <form 
        className="new-progress"
        onSubmit={onSubmit}
        >
            <label className="title-modal">Semana</label>
            
            <textarea
            className="text-new-plant"
            placeholder="Semana#"
            value={newProgress}
            onChange={onChange}
            >   
            </textarea>
            <input 
            className="load-image" 
            id="file" 
            type="file" 
            name="file"
            accept="image/*"
            placeholder="subir imagen"
            //onChange={onSubmitImageProgress}
            ></input>
            {/* <img
            className="image-form"
            src={newImageProgress}
            ></img> */}
            <label className="title-modal">Progreso</label>
            <textarea
            className="text-new-progress"
            placeholder="Progreso"
            // value={newProgressText}
            // onChange={onChangeText}
            >   
            </textarea>
            <div className="section-buttons">
                <button 
                className="button-cancel"
                type="button"
                onClick={onCancel}
                >Cancelar</button>
                <button 
                className="button-add-submit"
                type="submit"
                onClick={onSubmit}
                >Añadir</button>
            </div>
        </form>
    )
}
export { ProgressNewModal }