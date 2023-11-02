import React from "react";
import { useLocalStorage } from "./useLocalstorage";
import { useLocalStorageWeek } from "./useLocalstorage";
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
    setNewImage,
  } = useLocalStorage('cultivation', [])

  const {
    newImageProgress, 
    setNewImageProgress,
    itemWeek,
    saveItemWeek,
  } = useLocalStorageWeek('cultivationWeek', [])

  const [openModal, setOpenmodal] = React.useState(false)
  const [openModalProgressImages, setOpenmodalProgressImages] = React.useState(false) // Estado para modal de agregar progreso de la pnata semana por semana
  const [newProgress, setNewProgress] = React.useState('') // Text area de numero de semana
  const [newProgressText, setNewProgressText] = React.useState('') // Text area texto progreso

  // ESTADOS DERIVADOS
  const searchPlants = statePlants.filter(item =>{
    return item.name.toLocaleLowerCase().includes(inputSearchPlant.toLocaleLowerCase())
  })

  let viewAllWeek = itemWeek.filter(item =>{
    return `${item.week}${item.srcWeek}${item.textWeek}`
  })

  // Funciones para los botones de agregar o elimnar
  const addPlant = (name) =>{ // Tengo que encontrar la manera que al agregar los datos de la planta se agregue son en la pagina que desee y no en las dos
    const newPlants = [...statePlants]
    newPlants.push({
      name,
      src: newImage.src,
    })
    savedPlants(newPlants)
  }

  const deletedPlant = (src) =>{
    const newPlants = [...statePlants]
    const plantIndex = newPlants.findIndex(item => item.name === src)
    newPlants.splice(plantIndex, 1)
    savedPlants(newPlants)
  }

  const addPlantProgress = (week, textWeek) =>{
    const newPlants = [...itemWeek]
    newPlants.push({
      week,
      srcWeek: newImageProgress.src,
      textWeek 
    })
    saveItemWeek(newPlants)
  }

  const deletedPlantProgress = (srcWeek) =>{
    const newPlantsProgress = [...itemWeek]
    const plantIndexProgress = newPlantsProgress.findIndex(item => item.week === srcWeek)
    newPlantsProgress.splice(plantIndexProgress, 1)
    saveItemWeek(newPlantsProgress)
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
            setNewImage,
            newImageProgress, 
            setNewImageProgress,
            openModalProgressImages, 
            setOpenmodalProgressImages,
            addPlantProgress,
            deletedPlantProgress,
            newProgress, 
            setNewProgress,
            newProgressText, 
            setNewProgressText,
            viewAllWeek,
            newImageProgress, 
            setNewImageProgress,
            itemWeek,
            saveItemWeek,
        }}>
            {children}
        </ProgressContext.Provider>
    )
}
export { ProgressContext, ProgressProvider }