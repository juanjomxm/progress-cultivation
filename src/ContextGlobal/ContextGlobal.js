import React from "react"

import { useLocalStorage } from "./useLocalstorage"
import { apiKey } from "../secretKey"

const ProgressContext = React.createContext()

function ProgressProvider({children}){

  const {
    item: statePlants, 
    saveItem: savedPlants,
    loading,
    error
  } = useLocalStorage('cultivation', []) // Ejecutando el localStorage

  // ESTADOS
  const [inputSearchPlant, setInputSearchPlant] = React.useState('') // Estado para buscar planta de inicio
  
  // ESTADOS DERIVADOS
  const searchPlants = statePlants.filter(item =>{
    return item.name.toLocaleLowerCase().includes(inputSearchPlant.toLocaleLowerCase())
  })

  //                               FUNCIONES PARA LA PLANTA DEL INICIO

  // Funcion para agregar planta

  async function addPlant(namePlant, imagePlant) {
    let plantId = newPlantId()

    // Api para guardar las imagenes en el servidor de imgbb
    const apiUrl = `https://api.imgbb.com/1/upload?key=${apiKey}`
    const imageUrl = imagePlant

    const formData = new FormData()
    formData.append('image', imageUrl)

    const res = await fetch(apiUrl, {
      method: 'POST',
      body: formData
    })
    const data = await res.json()

    try{
      if(res.status === 200, 201){
        const plantWeek = [...statePlants]
        plantWeek.push({
          name: namePlant,
          src: data.data.image.url,
          id: plantId,
          week: [],
          srcWeek: [],
          textWeek: [],
        })
        savedPlants(plantWeek)
      }
    }catch(error){
      console.warn(error)
    }
  }

  // Funcion para editar la planta de inicio
  async function editPlant(id, nameEdit, editImage){
    const plantIndex = statePlants.findIndex(item => item.id === id)
    
    const apiUrl = `https://api.imgbb.com/1/upload?key=${apiKey}`
    const imageUrl = editImage

    const formData = new FormData()
    formData.append('image', imageUrl)

    const res = await fetch(apiUrl, {
      method: 'POST',
      body: formData
    })
    const data = await res.json()

    try{
      if(res.status === 200, 201){
        const plantWeek = [...statePlants]
        plantWeek[plantIndex].name = nameEdit
        plantWeek[plantIndex].src = data.data.image.url
        savedPlants(plantWeek) 
      }
    }catch(error){
      console.warn(error)
    }
  }

  // Funcion para eliminar planta
  const deletedPlant = (id) =>{
    const plantIndex = statePlants.findIndex(item => item.id === id)
    const newPlants = [...statePlants]
    newPlants.splice(plantIndex, 1)
    savedPlants(newPlants)
  } // Quedo lista esta funcion

  

  //                               FUNCIONES PARA EL PROGRESO DE LA PLANTA

  //  Funcion para agregar los nuevos atributos del progreso a cada planta
  async function addPlantWeek(id, week, srcWeek, textWeek){
    const plantIndex = statePlants.findIndex(item => item.id === id)

    // Api para guardar las imagenes en el servidor de imgbb
    const apiUrl = `https://api.imgbb.com/1/upload?key=${apiKey}`
    const imageUrl = srcWeek

    const formData = new FormData()
    formData.append('image', imageUrl)
    
    const res = await fetch(apiUrl, {
      method: 'POST',
      body: formData
    })
    const data = await res.json()

    try{
      if(res.status === 200,201){
        let plantWeek = [...statePlants]
        plantWeek[plantIndex].week.push(week)
        plantWeek[plantIndex].srcWeek.push(data.data.image.url)
        plantWeek[plantIndex].textWeek.push(textWeek)
        savedPlants(plantWeek)
      }
    }catch(error){
      console.warn(error)
    }
  }

  // Funcion para editar el progreso
  async function editProgress(id, oldWeekTitle, newWeekTitle, newImage, newProgressTextEdit){
    const plantIndex = statePlants.findIndex(item => item.id === id)

    const apiUrl = `https://api.imgbb.com/1/upload?key=${apiKey}`
    const imageUrl = newImage

    const formData = new FormData()
    formData.append('image', imageUrl)

    if(plantIndex !== -1){
        let newPlants = [...statePlants];
        const progressIndex = newPlants[plantIndex].week.findIndex(item => item.trim().toLowerCase() === oldWeekTitle.trim().toLowerCase());

        if (progressIndex !== -1) {
          if (!Array.isArray(newPlants[plantIndex].week)) {
              newPlants[plantIndex].week = []
          }

          const res = await fetch(apiUrl, {
            method: 'POST',
            body: formData
          })
          const data = await res.json()

          try{
            if(res.status === 200,201){
              newPlants[plantIndex].week[progressIndex] = newWeekTitle
              newPlants[plantIndex].srcWeek[progressIndex] = data.data.image.url
              newPlants[plantIndex].textWeek[progressIndex] = newProgressTextEdit
              savedPlants(newPlants)
            }
          }catch(error){
            console.warn(error)
          }
        } else {
          console.error("Semana no encontrada para la planta con ID:", id, "y título de semana:", oldWeekTitle)
        }
    }else {
      console.error("Planta no encontrada con ID:", id)
    }
  }

  // Funcion para eliminar el progreso
  const deletedProgress = (id, week) =>{
    const plantIndex = statePlants.findIndex(item => item.id === id);
    const newPlants = [...statePlants];

    // Encuentra el índice del progreso en el array de la planta
    const progressIndex = newPlants[plantIndex].week.findIndex(item => item === week);

    // Si se encuentra el progreso, lo elimina del array
    if (progressIndex !== -1) {
        newPlants[plantIndex].week.splice(progressIndex, 1)
        newPlants[plantIndex].srcWeek.splice(progressIndex, 1)
        newPlants[plantIndex].textWeek.splice(progressIndex, 1)
        savedPlants(newPlants);
    } else {
        console.error("Progreso no encontrado para la planta con ID:", id, "y semana:", week);
    }
  } 

  // Funcion para el id de la planta
  const newPlantId = ()=>{
    return Date.now()
  }

    return(
        <ProgressContext.Provider value={{
            statePlants,
            savedPlants,
            loading,
            error,
            inputSearchPlant, 
            setInputSearchPlant,
            searchPlants,
            addPlant,
            editPlant,
            deletedPlant,
            addPlantWeek,
            editProgress,
            deletedProgress,
            newPlantId,
        }}>
          {children}
        </ProgressContext.Provider>
    )
}
export { ProgressContext, ProgressProvider }