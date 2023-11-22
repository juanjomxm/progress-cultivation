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
  
  const addPlant = (week, textWeek) =>{
    let plantId = newPlantId()
    const plantWeek = [...objectPrincipal.statePlants]
    plantWeek.push({
        name: newPlant,
        src: newImage.src,
        id: plantId,
        week,
        srcWeek: newImageProgress.src,
        textWeek
    })
    savedPlants(plantWeek)
  } // La funcion se ejecuta bien y agrega el objeto

  const addPlantWeek = (id, newWeek, newSrcWeek, newTextWeek)=>{
    const plantIndex = objectPrincipal.statePlants.findIndex(item => item.name === id)
    const plantWeek = [...objectPrincipal.statePlants]
    plantWeek[plantIndex].week = newWeek
    plantWeek[plantIndex].srcWeek = newSrcWeek
    plantWeek[plantIndex].textWeek = newTextWeek
    savedPlants(plantWeek)
  } // Estoy encontrando el camino, lo estoy haciendo de esta manera y estoy obteniendo buenos resultado, aunque debo mejorar la funcion, siguen habiendo bugs, pero estoy avanzando

  // Funcion para eliminar planta
  const deletedPlant = (id) =>{
    const plantIndex = objectPrincipal.statePlants.findIndex(item => item.id === id)
    const newPlants = [...objectPrincipal.statePlants]
    newPlants.splice(plantIndex, 1)
    savedPlants(newPlants)
  }

  //Funcion para editar planta
  // const editPlant = (id, newWeek, srcWeek, newTextWeek) =>{
  //  const plantIndex = statePlants.findIndex(item => item.id === id)
  //   const newPlants = [...statePlants]
  //   newPlants[plantIndex].week.push(newWeek)
  //   newPlants[plantIndex].srcWeek.push(srcWeek)
  //   newPlants[plantIndex].textWeek.push(newTextWeek)
  //   savedPlants(newPlants)
  // }

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
            objectPrincipal
        }}>
            {children}
        </ProgressContext.Provider>
    )
}
export { ProgressContext, ProgressProvider }