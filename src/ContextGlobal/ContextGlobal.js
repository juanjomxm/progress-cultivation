import React from "react"
import axios from "axios"
import { useLocalStorage } from "./useLocalstorage"

const ProgressContext = React.createContext()

function ProgressProvider({children}){

  // ESTADOS
  const [inputSearchPlant, setInputSearchPlant] = React.useState('')

  const {
    item: statePlants, 
    saveItem: savedPlants,
    loading,
    error
  } = useLocalStorage('cultivation', [])

  const [newPlant, setNewPlant] = React.useState('') // Estado para agregar planta del inicio
  const [newImage, setNewImage] = React.useState([]) // Estado que controla subir la imagen de la planta de inincio
  const [newProgress, setNewProgress] = React.useState('') // Titulo numero de semana
  const [newImageProgress, setNewImageProgress] = React.useState([]) // Estado que controla subir la imagen del progreso semana por semana
  const [newProgressText, setNewProgressText] = React.useState('') // Text area texto progreso
  const [newProgressEdit, setNewProgressEdit] = React.useState('') //  Nuevo Titulo # de semana


  // ESTADOS DERIVADOS
  const searchPlants = statePlants.filter(item =>{
    return item.name.toLocaleLowerCase().includes(inputSearchPlant.toLocaleLowerCase())
  })

  //                               FUNCIONES PARA LA PLANTA DEL INICIO

  // Funcion para agregar planta
  // API KEY IMAGEBB = d1e5abf1bd6b35a0741945fc493b156e

  function addPlant(namePlant, imagePlant) {
    let plantId = newPlantId()
    const apiUrl = 'https://api.imgbb.com/1/upload?key=d1e5abf1bd6b35a0741945fc493b156e';
    const imageUrl = imagePlant

    const formData = new FormData()
    formData.append('image', imageUrl)

    fetch(apiUrl, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data.image.url)
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
      })
      .catch(error => {
        console.error('Error:', error);
    })
  }

  // Funcion para eliminar planta
  const deletedPlant = (id) =>{
    const plantIndex = statePlants.findIndex(item => item.id === id)
    const newPlants = [...statePlants]
    newPlants.splice(plantIndex, 1)
    savedPlants(newPlants)
  } // Quedo lista esta funcion

  // Funcion para editar la planta de inicio
  const editPlant = (id, editImage)=>{
    const plantIndex = statePlants.findIndex(item => item.id === id)
    const apiUrl = 'https://api.imgbb.com/1/upload?key=d1e5abf1bd6b35a0741945fc493b156e';
    const imageUrl = editImage

    const formData = new FormData()
    formData.append('image', imageUrl)

    fetch(apiUrl, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data.image.url)
        const plantWeek = [...statePlants]
        plantWeek[plantIndex].name = newPlant
        plantWeek[plantIndex].src = data.data.image.url
        savedPlants(plantWeek) // Quedo lista esta funcion
      })
      .catch(error => {
        console.error('Error:', error)
    })
  }

  //                               FUNCIONES PARA EL PROGRESO DE LA PLANTA

  //  Funcion para agregar los nuevos atributos del progreso a cada planta
  const addPlantWeek = (id, week, srcWeek, textWeek)=>{
    const plantIndex = statePlants.findIndex(item => item.id === id)

    const apiUrl = 'https://api.imgbb.com/1/upload?key=d1e5abf1bd6b35a0741945fc493b156e';
    const imageUrl = srcWeek

    const formData = new FormData()
    formData.append('image', imageUrl)

    fetch(apiUrl, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data.image.url)
        let plantWeek = [...statePlants]
        plantWeek[plantIndex].week.push(week)
        plantWeek[plantIndex].srcWeek.push(data.data.image.url)
        plantWeek[plantIndex].textWeek.push(textWeek)

        savedPlants(plantWeek)
      })
      .catch(error => {
        console.error('Error:', error);
    })
  }

  // Funcion para editar el progreso
  const editProgress = (id, oldWeekTitle, newWeekTitle, newImage, newProgressText) => {
    const plantIndex = statePlants.findIndex(item => item.id === id)

    const apiUrl = 'https://api.imgbb.com/1/upload?key=d1e5abf1bd6b35a0741945fc493b156e';
    const imageUrl = newImage

    const formData = new FormData()
    formData.append('image', imageUrl)

    if (plantIndex !== -1) {
        let newPlants = [...statePlants];
        const progressIndex = newPlants[plantIndex].week.findIndex(item => item.trim().toLowerCase() === oldWeekTitle.trim().toLowerCase());

        if (progressIndex !== -1) {
          if (!Array.isArray(newPlants[plantIndex].week)) {
              newPlants[plantIndex].week = []
          }

          fetch(apiUrl, {
            method: 'POST',
            body: formData,
          })
            .then(response => response.json())
            .then(data => {
              console.log(data.data.image.url)
              newPlants[plantIndex].week[progressIndex] = newWeekTitle
              newPlants[plantIndex].srcWeek[progressIndex] = data.data.image.url
              newPlants[plantIndex].textWeek[progressIndex] = newProgressText
              savedPlants(newPlants)
            })
            .catch(error => {
              console.error('Error:', error)
          })
  
      } else {
          console.error("Semana no encontrada para la planta con ID:", id, "y título de semana:", oldWeekTitle)
      }
    } else {
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
            addPlantWeek,
            editPlant,
            newPlantId,
            editProgress,
            deletedProgress,
            newProgressEdit, 
            setNewProgressEdit
        }}>
            {children}
        </ProgressContext.Provider>
    )
}
export { ProgressContext, ProgressProvider }