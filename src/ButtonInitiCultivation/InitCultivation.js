import React from "react"
import { ProgressContext } from "../ContextGlobal/ContextGlobal"
import { useNavigate } from "react-router-dom"

function InitCultivation(){
    const navigate = useNavigate()
    const{
    } = React.useContext(ProgressContext)
    return(
        <div className="button-add-plant">
           <button
                onClick={()=>{
                    navigate('/form1')
                }}
           >Agregar planta</button>
        </div>
    )
}
export { InitCultivation }