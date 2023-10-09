import React from "react";
import { useLocalStorage } from "./useLocalstorage";

const ProgressContext = React.createContext()

function ProgressProvider({children}){

  // ESTADOS
  const [inputSearchPlant, setInputSearchPlant] = React.useState('')
  const {
    item: statePlants, 
    saveItem: savedPlants,
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


  const addPlant = (name, src) =>{
    const newPlants = [...statePlants]
    newPlants.push({
      name,
      src,
      src: newImage.src
    })
    savedPlants(newPlants)
  }

  const deletedPlant = (name) =>{
    const newPlants = [...statePlants]
    const plantIndex = newPlants.findIndex((plant) => plant.name === name)
    newPlants.splice(plantIndex, 1)
    savedPlants(newPlants)
  }

    return(
        <ProgressContext.Provider value={{
            statePlants,
            savedPlants,
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