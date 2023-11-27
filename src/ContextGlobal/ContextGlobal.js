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
    newImageProgress, 
    setNewImageProgress
  } = useLocalStorage('cultivation', [])

  const [newPlant, setNewPlant] = React.useState('') // Estado para agregar planta del inicio
  const [newProgress, setNewProgress] = React.useState('') // Text area de numero de semana
  const [newProgressText, setNewProgressText] = React.useState('') // Text area texto progreso

  let objectPrincipal = {
    statePlants: [...statePlants]
  }

  // ESTADOS DERIVADOS
  const searchPlants = objectPrincipal.statePlants.filter(item =>{
    return item.name.toLocaleLowerCase().includes(inputSearchPlant.toLocaleLowerCase())
  })

  const plantToPlant = objectPrincipal.statePlants.filter(item =>{
    return `${item.week}${item.srcWeek}${item.textWeek}`
  })

  // Funcion para agregar planta
  const addPlant = () =>{
    let plantId = newPlantId()
    const plantWeek = [...objectPrincipal.statePlants]
    plantWeek.push({
      name: newPlant,
      src: newImage.src,
      id: plantId,
      // week: [],
      // srcWeek: [],
      // textWeek: []
    })
    savedPlants(plantWeek)
  } // La funcion se ejecuta bien y agrega el objeto

  // Funcion para editar la planta de inicio
  const editPlant = (id)=>{
    const plantIndex = objectPrincipal.statePlants.findIndex(item => item.id === id)
    const plantWeek = [...objectPrincipal.statePlants]
    plantWeek[plantIndex].name = newPlant
    plantWeek[plantIndex].src = newImage.src
    savedPlants(plantWeek) // Necesito reconocer el id para poderlo editar, no he econtrado la manera
  }

   // Funcion para agregar los nuevos atributos del progreso a cada planta
  let newObject = {
    week: newProgress,
    srcWeek: newImageProgress.src,
    textWeek: newProgressText
  }
  const addPlantWeek = (id)=>{
    const plantIndex = objectPrincipal.statePlants.findIndex(item => item.name === id)
    const plantWeek = {
      ...objectPrincipal.statePlants[plantIndex], 
      progressWeek: newObject
    }
    // plantWeek[plantIndex].week = newWeek
    // plantWeek[plantIndex].srcWeek = newSrcWeek
    // plantWeek[plantIndex].textWeek = newTextWeek
    savedPlants(plantWeek)
  }

  // Funcion para eliminar planta
  const deletedPlant = (id) =>{
    const plantIndex = objectPrincipal.statePlants.findIndex(item => item.id === id)
    const newPlants = [...objectPrincipal.statePlants]
    newPlants.splice(plantIndex, 1)
    savedPlants(newPlants)
  } // Quedo lista esta funcion

  // Funcion para el id de la planta
  const newPlantId = ()=>{
    return Date.now()
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
            newImage,
            setNewImage,
            newImageProgress, 
            setNewImageProgress,
            newProgress, 
            setNewProgress,
            newProgressText, 
            setNewProgressText,
            newImageProgress, 
            setNewImageProgress,
            newPlant, 
            setNewPlant,
            plantToPlant,
            addPlantWeek,
            objectPrincipal,
            editPlant,
            newPlantId
        }}>
            {children}
        </ProgressContext.Provider>
    )
}
export { ProgressContext, ProgressProvider }