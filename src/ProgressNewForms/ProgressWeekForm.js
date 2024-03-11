import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { useNavigate, useParams } from "react-router-dom";

// Esta funcion es el modal como el de agregar planta, pero en este debo agregar el progreso por semana de la planta
function ProgressNewWeek(){
    const navigateProgress = useNavigate()
    const {
        addPlantWeek,
    } = React.useContext(ProgressContext)

    const [newProgress, setNewProgress] = React.useState('') // Titulo numero de semana
    const [newProgressText, setNewProgressText] = React.useState('') // Text area texto progreso
    const [newImageProgress, setNewImageProgress] = React.useState([]) // Estado que controla subir la imagen del progreso semana por semana

    const cleanFormProgress = () => {
        setNewProgress('')
        setNewImageProgress({ src: '', file: null })
        setNewProgressText('')
    }

    const params = useParams()
    const id = Number(params.id)

    const onSubmit = (event)=>{
        event.preventDefault()
        if(newProgress.length >= 1){
            addPlantWeek(id, newProgress, newImageProgress.file, newProgressText)
            navigateProgress(-1) // De esta manera con useNavigate puedo volver a la pagina anterior, en este caso me sirve esta solucion
        }else{
            alert('falta la semana')
            cleanFormProgress()
        } 
        cleanFormProgress()
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

    const onSubmitImageProgress = (event) => {
        const file = event.target.files[0];
        setNewImageProgress({
          src: URL.createObjectURL(file),
          file: file
        })
    }

    return(
        <div className="container-images-progress">
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
        </div>
    )
}

export { ProgressNewWeek }