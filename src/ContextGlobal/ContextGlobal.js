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

  // const [openModal, setOpenmodal] = React.useState(false)
  const [openModalProgressImages, setOpenmodalProgressImages] = React.useState(false) // Estado para modal de agregar progreso de la pnata semana por semana
  const [newProgress, setNewProgress] = React.useState('') // Text area de numero de semana
  const [newProgressText, setNewProgressText] = React.useState('') // Text area texto progreso

  // ESTADOS DERIVADOS
  const searchPlants = statePlants.filter(item =>{
    return item.name.toLocaleLowerCase().includes(inputSearchPlant.toLocaleLowerCase())
  })

  // Funciones para los botones de agregar o elimnar
  
  
  const addPlant = (name) =>{
    const plantId = newPlantId()
    const newPlants = [...statePlants]
    newPlants.push({
      name,
      src: newImage.src,
      id: plantId,
    })
    savedPlants(newPlants) // Tengo que cambiar el metodo push y hacerlo como encontre la respuestro con copilot que recomienda utilizar el hook de useState para guardar la informacion del mismo objeto con dos formularios diferentes
  }

  // const addPlantProgress = (week, textWeek)=>{
  //   const newPlantsWeek = [...statePlants]
  //   newPlantsWeek.push({
  //     week,
  //     srcWeek: newImageProgress.src,
  //     textWeek
  //   })
  // }

  const deletedPlant = (id) =>{
    const plantIndex = statePlants.findIndex(item => item.id === id)
    const newPlants = [...statePlants]
    newPlants.splice(plantIndex, 1)
    savedPlants(newPlants)
  }

  const newPlantId = ()=>{
    return Date.now() // Esto es un metodo estatico que me retorna un numero de milisegundos transcurridos desde el primero de enero de 1970.  Y asi poder generar un id diferente para cada planta
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
            // openModal,
            // setOpenmodal,
            newImage,
            setNewImage,
            newImageProgress, 
            setNewImageProgress,
            openModalProgressImages, 
            setOpenmodalProgressImages,
            newProgress, 
            setNewProgress,
            newProgressText, 
            setNewProgressText,
            newImageProgress, 
            setNewImageProgress,
            //addPlantProgress
        }}>
            {children}
        </ProgressContext.Provider>
    )
}
export { ProgressContext, ProgressProvider }