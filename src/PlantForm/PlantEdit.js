import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { useNavigate, useParams } from "react-router-dom";

function PlantEdit(){
    const navigate = useNavigate()
    const {
        editPlant
    } = React.useContext(ProgressContext)

    const [plantEdit, setPlantEdit] = React.useState('') // Estado para editar la planta
    const [imageEdit, setImageEdit] = React.useState([])

    const cleanFormEditPlant = () => {
        setPlantEdit('')
        setImageEdit({ src: '', file: null })
    }

    const params = useParams()
    const id = Number(params.id) // Con estas dos variables pude resolver el bug que tenia al editar la planta
    const name = (params.name)

    const onSubmitProgress = (event)=>{
        event.preventDefault()
        if(plantEdit.length >= 1){
            editPlant(id, plantEdit, imageEdit.file)
            navigate('/')
        }else{
            alert('Falta editar el nombre')
            cleanFormEditPlant()
        }
        cleanFormEditPlant() // De esta forma al agregar la nueva planta no se queda en el formulario sino que me devuelave a donde se estan renderizando las plantas
    }

    const onCancel = (event)=>{
        event.preventDefault()
        navigate('/')
    }

    const onChange = (event)=>{
        setPlantEdit(event.target.value)
    }

    const onSubmitImage = (event) => {
        const file = event.target.files[0];
        setImageEdit({
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
                placeholder={name}
                value={plantEdit}
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
                src={imageEdit.src}
                ></img>
            </form>  
        </div>
    )
}
export { PlantEdit }