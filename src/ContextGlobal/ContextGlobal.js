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
  const [openModal, setOpenmodal] = React.useState(false)
  const [openModalProgress, setOpenmodalProgress] = React.useState(false) // Estado para progreso de planta semana por semana
  const [openModalProgressImages, setOpenmodalProgressImages] = React.useState(false) // Estado para modal de agregar progreso de la pnata semana por semana
  const [newProgress, setNewProgress] = React.useState('') // Text area de numero de semana
  const [newProgressText, setNewProgressText] = React.useState('') // Text area texto progreso

  // ESTADO DERIVADOS
  const searchPlants = statePlants.filter(item =>{
    return item.name.toLocaleLowerCase().includes(inputSearchPlant.toLocaleLowerCase())
  })

  const viewProgressPlant = statePlants.filter(item =>{
    return `${item.week}${item.srcWeek}${item.textWeek}`
  })

  // Funciones para los botones de agregar o elimnar
  const addPlant = (name) =>{
    const newPlants = [...statePlants]
    newPlants.unshift({
      name,
      src: newImage.src,
    })
    savedPlants(newPlants)
  }

  // Agregar contenido del cultivo semana por semana
  const addPlantProgress = (week) =>{ // Con esta funcion debo agregar todo el contenido en el mismo objeto y poderlo mostrar por separado en los componentes
    const newPlantsWeek = [statePlants]
    const plantIndexProgress = newPlantsWeek.findIndex(item => item.week === week)
    plantIndexProgress.push({
      week: [],
      srcWeek: [newImageProgress.src],
      textWeek: []
    })
    savedPlants(newPlantsWeek)
}

  const deletedPlant = (name) =>{
    const newPlants = [...statePlants]
    const plantIndex = newPlants.findIndex(item => item.name == name)
    newPlants.splice(plantIndex, 1)
    savedPlants(newPlants)
  }

  const deletedPlantProgress = (week) =>{
    const newPlantsProgress = [...statePlants]
    const plantIndexProgress = newPlantsProgress.findIndex(item => item.week === week)
    newPlantsProgress.splice(plantIndexProgress, 1)
    savedPlants(newPlantsProgress)
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
            viewProgressPlant,
            inputSearchPlant, 
            setInputSearchPlant,
            openModal,
            setOpenmodal,
            newImage,
            setNewImage,
            newImageProgress, 
            setNewImageProgress,
            openModalProgress, 
            setOpenmodalProgress,
            openModalProgressImages, 
            setOpenmodalProgressImages,
            addPlantProgress,
            deletedPlantProgress,
            newProgress, 
            setNewProgress,
            newProgressText, 
            setNewProgressText

        }}>
            {children}
        </ProgressContext.Provider>
    )
}
export { ProgressContext, ProgressProvider }