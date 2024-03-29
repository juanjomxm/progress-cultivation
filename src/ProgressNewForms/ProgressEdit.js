import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { useNavigate, useParams } from "react-router-dom";

function ProgressEdit(){
    const navigateProgress = useNavigate()
    const {
        editProgress,
    } = React.useContext(ProgressContext)

    const [newProgressEdit, setNewProgressEdit] = React.useState('') //  Nuevo Titulo # de semana
    const [progressTextEdit, setProgressTextEdit] = React.useState('') // Estado para editar el texto del progreso
    const [imageProgressEdit, setImageProgressEdit] = React.useState([]) // EStado para editar imagen

    const cleanFormProgressEdit = () => {
        setNewProgressEdit('')
        setImageProgressEdit({ src: '', file: null })
        setProgressTextEdit('')
    }

    const params = useParams()
    const id = Number(params.id)
    const week = (params.week)

    const onSubmit = (event)=>{
        event.preventDefault()
        if(newProgressEdit.length >= 1){
            editProgress(id, week, newProgressEdit, imageProgressEdit.file, progressTextEdit) 
            navigateProgress(-1) // De esta manera con useNavigate puedo volver a la pagina anterior, en este caso me sirve esta solucion
        }else{
            alert('Falta editar la semana')
            cleanFormProgressEdit()
        } 
        cleanFormProgressEdit()
    }

    const onChange = (event)=>{
        setNewProgressEdit(event.target.value)
    }

    const onChangeText= (event)=>{
        setProgressTextEdit(event.target.value)
    }

    const onCancel = (event)=>{
        event.preventDefault()
        navigateProgress(-1)
    }

    const onSubmitImageProgress = (event) => {
        const file = event.target.files[0];
        setImageProgressEdit({
          src: URL.createObjectURL(file),
          file: file
        }) // Al subir la imagen de esta manera me puedo permitir una mejor organizacion y evitar los problemas que ocasiona al subir la imagen directamente en el actualizador del estado
    }

    return(
        <div className="container-images-progress">
            <form 
            className="new-progress"
            onSubmit={onSubmit}
            > 
                <textarea
                className="text-new-plant-progress"
                placeholder={week}
                value={newProgressEdit}
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
                src={imageProgressEdit.src}
                ></img>

                <textarea
                className="text-new-progress"
                placeholder='Progreso'
                value={progressTextEdit}
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
                    >Editar</button>
                </div>
            </form>
        </div>
    )
}

export { ProgressEdit }
