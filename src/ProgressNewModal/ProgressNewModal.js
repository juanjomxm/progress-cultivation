import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { useNavigate } from "react-router-dom";

// Esta funcion es el modal como el de agregar planta, pero en este debo agregar el progreso por semana de la planta
function ProgressNewModal(){
    const navigateProgress = useNavigate()
    const {
        addPlant,
        setNewImageProgress,
        newImageProgress,
        newProgress, 
        setNewProgress,
        newProgressText, 
        setNewProgressText,
    } = React.useContext(ProgressContext)

    const onSubmit = (event)=>{
        event.preventDefault()
        navigateProgress('/')
        // addPlant('')
    }

    const onChange = (event)=>{
        setNewProgress(event.target.value)
    }

    const onChangeText= (event)=>{
        setNewProgressText(event.target.value)
    }

    const onCancel = (event)=>{
        event.preventDefault()
        navigateProgress('/') // Debo encontrar la manera para cuando le de añadir o cancelar se renderice la pagina del progreso por semana y no el home
    }

    const onSubmitImageProgress = (event)=>{
        setNewImageProgress({
          src: URL.createObjectURL(event.target.files[0])
        })
    }

    return(
        <form 
        className="new-progress"
        onSubmit={onSubmit}
        > 
            <textarea
            className="text-new-plant-progress"
            placeholder="#Semana"
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
            onChange={onSubmitImageProgress}
            ></input>
            <img
            className="image-form-progress"
            src={newImageProgress.src}
            ></img>
            <textarea
            className="text-new-progress"
            placeholder="Progreso"
            value={newProgressText}
            onChange={onChangeText}
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