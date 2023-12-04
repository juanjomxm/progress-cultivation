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
    setNewImage,
    newImageProgress, 
    setNewImageProgress
  } = useLocalStorage('cultivation', [])

  const [newPlant, setNewPlant] = React.useState('') // Estado para agregar planta del inicio
  const [newProgress, setNewProgress] = React.useState('') // Text area de numero de semana
  const [newProgressText, setNewProgressText] = React.useState('') // Text area texto progreso


  // ESTADOS DERIVADOS
  const searchPlants = statePlants.filter(item =>{
    return item.name.toLocaleLowerCase().includes(inputSearchPlant.toLocaleLowerCase())
  })

  const plantToPlant = statePlants.filter(item =>{
    return `${item.week}${item.srcWeek}${item.textWeek}`
  })

  // Funcion para agregar planta
  const addPlant = () =>{
    let plantId = newPlantId()
    const plantWeek = [...statePlants]
    plantWeek.push({
      name: newPlant,
      src: newImage.src,
      id: plantId,
    })
    savedPlants(plantWeek)
  } // La funcion se ejecuta bien y agrega el objeto

  // Funcion para editar la planta de inicio
  const editPlant = (id)=>{
    const plantIndex = statePlants.findIndex(item => item.id === id)
    const plantWeek = [...statePlants]
    plantWeek[plantIndex].name = newPlant
    plantWeek[plantIndex].src = newImage.src
    savedPlants(plantWeek) // Quedo lista esta funcion
  }

   // Funcion para agregar los nuevos atributos del progreso a cada planta
  const addPlantWeek = (newWeek, newSrcWeek, newProgressTextWeek)=>{
    const plantWeek = [...statePlants]
    const responsePlant = plantWeek.map(item => {
      return{
          ...item, 
          week: [newWeek],
          srcWeek: [newSrcWeek],
          textWeek: [newProgressTextWeek]
      }
    })
    savedPlants(responsePlant)
    console.log(plantWeek)
    console.log(responsePlant)
  } // Estoy consiguiendo que se guarde donde deseo, pero no se agregan mas, sino que se edita la que esta, voy a dejar esta funcion y tengo que conseguir que se agregue cada semana

  // Funcion para eliminar planta
  const deletedPlant = (id) =>{
    const plantIndex = statePlants.findIndex(item => item.id === id)
    const newPlants = [...statePlants]
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
            editPlant,
            newPlantId
        }}>
            {children}
        </ProgressContext.Provider>
    )
}
export { ProgressContext, ProgressProvider }