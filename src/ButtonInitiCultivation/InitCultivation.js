import React from "react"
import { ProgressContext } from "../ContextGlobal/ContextGlobal"

function InitCultivation(){
    const{
        openModal,
        setOpenmodal
    } = React.useContext(ProgressContext)
    return(
        <div className="button-add-plant">
           <button
           onClick={()=>{
            setOpenmodal(state => !state)
           }}
           >Agregar planta</button>
        </div>
    )
}
export { InitCultivation }