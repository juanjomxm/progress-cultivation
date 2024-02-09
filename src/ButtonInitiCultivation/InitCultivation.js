import React from "react"
import { useNavigate } from "react-router-dom"

function InitCultivation(){
    const navigate = useNavigate()

    return(
        <div className="container-title-and-button-init">

            <div className="button-add-plant">
            <button
                    onClick={()=>{
                        navigate('/form1')
                    }}
            >Agregar planta</button>
            </div>
        </div>
    )
}
export { InitCultivation }