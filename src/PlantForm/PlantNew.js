import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { useNavigate } from "react-router-dom";

function PlantNew(){
    const navigate = useNavigate()
    const {
        newImage,
        setNewImage,
        addPlant,
    } = React.useContext(ProgressContext)

    const [newPlant, setNewPlant] = React.useState('')

    const onSubmit = (event)=>{
        event.preventDefault()
        addPlant(newPlant)
        navigate('/') // De esta forma al agregar la nueva planta no se queda en el formulario sino que me devuelave a donde se estan renderizando las plantas
    }

    const onCancel = (event)=>{
        event.preventDefault()
        navigate('/')
    }

    const onChange = (event)=>{
        setNewPlant(event.target.value)
    }

    const onSubmitImage = (event)=>{
        setNewImage({
          src: URL.createObjectURL(event.target.files[0])
        })
    }

    return(
            <form 
            className="new-plant"
            onSubmit={onSubmit}
            >
                <label className="title-modal">Nueva planta</label>
                
                <textarea
                className="text-new-plant"
                placeholder="Nombre de la planta"
                value={newPlant}
                onChange={onChange}
                >   
                </textarea>
                <label>
                    <input 
                    className="load-image"
                    type="file"
                    onChange={onSubmitImage}
                    ></input>
                </label>
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
                    // De esta manera con el otro formulario para agregar el progreso por semana le puedo indicar hacia donde se debe redireccionar cuando le de añadir
                    >Añadir</button>
                </div>
                <img
                className="image-form"
                src={newImage.src}
                ></img>
            </form>  
    )
}
export { PlantNew }