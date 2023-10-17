import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";

// Esta funcion es el modal como el de agregar planta, pero en este debo agregar el progreso por semana de la planta
function ProgressNewModal(){
    const {
        setOpenmodalProgress,
        setOpenmodalProgressImages,
        // newImageProgress, 
        // setNewImageProgress,
        // addPlantProgress
    } = React.useContext(ProgressContext)
    const [newProgress, setNewProgress] = React.useState('')
    const [newProgressText, setNewProgressText] = React.useState('')
    

    const onSubmit = (event)=>{
        event.preventDefault()
        //addPlantProgress(newProgress)
        setOpenmodalProgress(false)
    }

    const onChange = (event)=>{
        setNewProgress(event.target.value)
    }

    const onChangeText= (event)=>{
        setNewProgressText(event.target.value)
    }

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
            <label className="title-modal">Nueva planta</label>
            
            <textarea
            className="text-new-plant"
            placeholder="Nombre de la planta"
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
            //onChange={onSubmitImage}
            ></input>
            <div className="section-buttons">
                <button 
                className="button-cancel"
                type="button"
                onClick={onCancel}
                >Cancelar</button>
                <button 
                className="button-add-submit"
                type="submit"
                //onClick={onSubmit}
                >Añadir</button>
            </div>
            {/* <img
            className="image-form"
            src={newImageProgress}
            ></img> */}
            <label className="title-modal">Progreso</label>
            <textarea
            className="text-new-plant"
            placeholder="Progreso"
            value={newProgressText}
            onChange={onChangeText}
            >   
            </textarea>
        </form>
    )
}
export { ProgressNewModal }