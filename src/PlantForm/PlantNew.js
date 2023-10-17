import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";

function PlantNew(){
    const {
        newImage,
        setNewImage,
        setOpenmodal,
        addPlant
    } = React.useContext(ProgressContext)

    const [newPlant, setNewPlant] = React.useState('')

    const onSubmit = (event)=>{
        event.preventDefault()
        addPlant(newPlant)
        setOpenmodal(false)
    }

    const onCancel = (event)=>{
        event.preventDefault()
        setOpenmodal(false)
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