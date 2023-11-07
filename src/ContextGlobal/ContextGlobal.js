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
    setNewImageProgress,
  } = useLocalStorage('cultivation', [])

  const [openModal, setOpenmodal] = React.useState(false)
  const [openModalProgressImages, setOpenmodalProgressImages] = React.useState(false) // Estado para modal de agregar progreso de la pnata semana por semana
  const [newProgress, setNewProgress] = React.useState('') // Text area de numero de semana
  const [newProgressText, setNewProgressText] = React.useState('') // Text area texto progreso

  // ESTADOS DERIVADOS
  const searchPlants = statePlants.filter(item =>{
    return item.name.toLocaleLowerCase().includes(inputSearchPlant.toLocaleLowerCase())
  })

  // const viewAllWeek = statePlants.filter(item =>{
  //   return `${item.week}${item.srcWeek}${item.textWeek}`
  // })

  // Funciones para los botones de agregar o elimnar
  const addPlant = (name, week, textWeek) =>{
    const newPlants = [...statePlants]
    newPlants.push({
      name,
      src: newImage.src,
      week,
      srcWeek: newImageProgress.src,
      textWeek,
    })
    savedPlants(newPlants)
  }

  const deletedPlant = (name) =>{
    const newPlants = [...statePlants]
    const plantIndex = newPlants.findIndex(item => item.name === name)
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
            setNewImage,
            newImageProgress, 
            setNewImageProgress,
            openModalProgressImages, 
            setOpenmodalProgressImages,
            //viewAllWeek,
            newProgress, 
            setNewProgress,
            newProgressText, 
            setNewProgressText,
            newImageProgress, 
            setNewImageProgress,
        }}>
            {children}
        </ProgressContext.Provider>
    )
}
export { ProgressContext, ProgressProvider }