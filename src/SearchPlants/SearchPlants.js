import React from "react"

function SearchPlants({inputSearchPlant, setInputSearchPlant}){
    return(
        <div className="search-plants">
            <input
            placeholder="Buscar planta" 
            value={inputSearchPlant}
            onChange={(event)=>{
                setInputSearchPlant(event.target.value)
            }}
            />
            <p></p>
        </div>
    )
}
export { SearchPlants }