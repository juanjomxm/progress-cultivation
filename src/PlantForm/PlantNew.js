import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";

function PlantNew(){
    const {
        newImage,
        setNewImage,
        addPlant,
        setOpenmodal
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
            <input 
            className="load-image" 
            id="file" 
            type="file" 
            name="file"
            accept="image/*"
            onChange={onSubmitImage}
            ></input>
            <img
            className="image-form"
            src={newImage.src}
            ></img>
            <div className="section-buttons">
                <button 
                className="button-cancel"
                type="button"
                onClick={onCancel}
                >Cancelar</button>
                <button 
                className="button-add"
                type="submit"
                onClick={addPlant}
                >Añadir</button>
            </div>
        </form>
    )
}
export { PlantNew }