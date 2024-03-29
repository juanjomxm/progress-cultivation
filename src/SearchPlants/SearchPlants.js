import React from "react"

import { ProgressContext } from "../ContextGlobal/ContextGlobal"

function SearchPlants(){
    const{
        inputSearchPlant, 
        setInputSearchPlant
    }= React.useContext(ProgressContext)
    
    return(
        <div className="search-plants">
            <input
            className="input-search"
            placeholder='🔍Planta' 
            value={inputSearchPlant}
            onChange={(event)=>{
                setInputSearchPlant(event.target.value)
            }}
            />
        </div>
    )
}

export { SearchPlants }