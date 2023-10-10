import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";

// Esta efuncion es el modal como el de agregar planta, pero en este debo agregar el progreso por semana de la planta
function ProgressNewModal(){
    const {
    } = React.useContext(ProgressContext)
    //const [newProgress, setNewProgress] = React.useState('')

    return(
        <form 
        className="new-plant"
        //onSubmit={onSubmit}
        >
            <label className="title-modal">Nueva planta</label>
            
            <textarea
            className="text-new-plant"
            placeholder="Nombre de la planta"
            //value={newPlant}
            //onChange={onChange}
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
                //onClick={onCancel}
                >Cancelar</button>
                <button 
                className="button-add-submit"
                type="submit"
                //onClick={onSubmit}
                >Añadir</button>
            </div>
            <img
            className="image-form"
            //src={newImage.src}
            ></img>
        </form>
    )
}
export { ProgressNewModal }