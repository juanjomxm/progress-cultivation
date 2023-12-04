import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { useNavigate } from "react-router-dom";

// Esta funcion es el modal como el de agregar planta, pero en este debo agregar el progreso por semana de la planta
function ProgressNewModal(){
    const navigateProgress = useNavigate()
    const {
        setNewImageProgress,
        newImageProgress,
        newProgress, 
        setNewProgress,
        newProgressText, 
        setNewProgressText,
        addPlantWeek,
    } = React.useContext(ProgressContext)

    const onSubmit = (event)=>{
        event.preventDefault()
        addPlantWeek(newProgress, newImageProgress.src, newProgressText) // Todavia no he podido encontrar la forma de agregar el otro objeto con los atributos que quiero que se rendericen en la pagina de progreso por semana
        navigateProgress(-1) // De esta manera con useNavigate puedo volver a la pagina anterior, en este caso me sirve esta solucion
    }

    const onChange = (event)=>{
        setNewProgress(event.target.value)
    }

    const onChangeText= (event)=>{
        setNewProgressText(event.target.value)
    }

    const onCancel = (event)=>{
        event.preventDefault()
        navigateProgress(-1)
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