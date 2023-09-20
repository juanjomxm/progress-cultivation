import React from "react"

const styleSearch = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

function SearchPlants({inputSearchPlant, setInputSearchPlant}){
    return(
        <div style={styleSearch}>
            <input
            placeholder="Buscar planta" 
            value={inputSearchPlant}
            onChange={(event)=>{
                setInputSearchPlant(event.target.value)
            }}
            />
        </div>
    )
}
export { SearchPlants }