import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { useNavigate, useParams } from "react-router-dom";

function PlantEdit(){
    const navigate = useNavigate()
    const {
        newImage,
        setNewImage,
        newPlant,
        setNewPlant,
        editPlant
    } = React.useContext(ProgressContext)

    const cleanFormEditPlant = () => {
        setNewPlant('')
        setNewImage({ src: '', file: null })
    }

    const params = useParams()
    const id = Number(params.id) // Con estas dos variables pude resolver el bug que tenia al editar la planta
    

    const onSubmitProgress = (event)=>{
        event.preventDefault()
        editPlant(id, newImage.file)
        cleanFormEditPlant()
        navigate('/') // De esta forma al agregar la nueva planta no se queda en el formulario sino que me devuelave a donde se estan renderizando las plantas
    }

    const onCancel = (event)=>{
        event.preventDefault()
        navigate('/')
    }

    const onChange = (event)=>{
        setNewPlant(event.target.value)
    }

    const onSubmitImage = (event) => {
        const file = event.target.files[0];
        setNewImage({
          src: URL.createObjectURL(file),
          file: file
        })
    }


    return(
        <div className="container-images-edit">
            <form 
            className="new-plant"
            onSubmit={onSubmitProgress}
            >
                <label className="title-modal">Editar Planta</label>

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
                    onClick={onSubmitProgress}
                    >Editar</button>
                </div>
                <img
                className="image-form"
                src={newImage.src}
                ></img>
            </form>  
        </div>
    )
}
export { PlantEdit }