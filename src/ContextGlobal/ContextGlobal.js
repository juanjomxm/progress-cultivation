import React from "react";
import { useLocalStorage } from "./useLocalstorage";

const ProgressContext = React.createContext()

function ProgressProvider({children}){

  // ESTADOS
  const [inputSearchPlant, setInputSearchPlant] = React.useState('')
  const {
    item: statePlants, 
    saveItem: savePlants,
    loading,
    error,
    newImage,
    setNewImage
  } = useLocalStorage('cultivation', [])
  const [openModal, setOpenmodal] = React.useState(false)
 
  // ESTADOS DERIVADOS
 
  const searchPlants = statePlants.filter(item =>{
    return item.name.toLocaleLowerCase().includes(inputSearchPlant.toLocaleLowerCase())
  })

  const addPlant = (name) =>{
    const newPlants = [...statePlants]
    newPlants.unshift({
      name,
      src: setNewImage
    })
    savePlants(newPlants)
  }

  const deletedPlant = (name) =>{
    const newPlants = [...statePlants]
    const plantIndex = newPlants.findIndex((plant) => plant.name === name)
    newPlants.splice(plantIndex, 1)
    savePlants(newPlants)
  }

    return(
        <ProgressContext.Provider value={{
            statePlants,
            savePlants,
            addPlant,
            deletedPlant,
            loading,
            error,
            searchPlants,
            inputSearchPlant, 
            setInputSearchPlant,
            openModal,
            setOpenmodal,
            newImage,
            setNewImage
        }}>
            {children}
        </ProgressContext.Provider>
    )
}
export { ProgressContext, ProgressProvider }