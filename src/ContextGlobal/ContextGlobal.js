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
  const [newProgress, setNewProgress] = React.useState('') // Titulo numero de semana
  const [newProgressText, setNewProgressText] = React.useState('') // Text area texto progreso
  const [newProgressEdit, setNewProgressEdit] = React.useState('') //  Nuevo Titulo # de semana


  // ESTADOS DERIVADOS
  const searchPlants = statePlants.filter(item =>{
    return item.name.toLocaleLowerCase().includes(inputSearchPlant.toLocaleLowerCase())
  })

  //                               FUNCIONES PARA LA PLANTA DEL INICIO

  // Funcion para agregar planta
  
  function addPlant(namePlant, imagePlant) {
    let plantId = newPlantId();
    
        let plantWeek = [...statePlants];
        plantWeek.push({
          name: namePlant,
          src: imagePlant,
          id: plantId,
          week: [],
          srcWeek: [],
          textWeek: []
        });
  
      savedPlants(plantWeek);
  }

  // Funcion para eliminar planta
  const deletedPlant = (id) =>{
    const plantIndex = statePlants.findIndex(item => item.id === id)
    const newPlants = [...statePlants]
    newPlants.splice(plantIndex, 1)
    savedPlants(newPlants)
  } // Quedo lista esta funcion

  // Funcion para editar la planta de inicio
  const editPlant = (id)=>{
    const plantIndex = statePlants.findIndex(item => item.id === id)
    const plantWeek = [...statePlants]
    plantWeek[plantIndex].name = newPlant
    plantWeek[plantIndex].src = newImage.src
    savedPlants(plantWeek) // Quedo lista esta funcion
  }

  //                               FUNCIONES PARA EL PROGRESO DE LA PLANTA

   // Funcion para agregar los nuevos atributos del progreso a cada planta
  const addPlantWeek = (id, week, srcWeek, textWeek)=>{
    const plantIndex = statePlants.findIndex(item => item.id === id)
    let plantWeek = [...statePlants]
    plantWeek[plantIndex].week.push(week)
    plantWeek[plantIndex].srcWeek.push(srcWeek)
    plantWeek[plantIndex].textWeek.push(textWeek)
    savedPlants(plantWeek)
  } // Por fin estoy consiguiendo que se agregue como lo deseo, tengo que solucionar al momento del renderizado para que se renderice uno por uno

  // Funcion para editar el progreso
  const editProgress = (id, oldWeekTitle, newWeekTitle, newImage, newProgressText) => {
    const plantIndex = statePlants.findIndex(item => item.id === id);

    if (plantIndex !== -1) {
        let newPlants = [...statePlants];
        const progressIndex = newPlants[plantIndex].week.findIndex(item => item === oldWeekTitle);

        if (progressIndex !== -1) {
          // Asegurarse de que 'week' sea un array antes de intentar acceder a su índice
          if (!Array.isArray(newPlants[plantIndex].week)) {
              newPlants[plantIndex].week = [];
          }
      
          // Edita el título de la semana, la imagen y el texto
          newPlants[plantIndex].week[progressIndex] = newWeekTitle;
          newPlants[plantIndex].srcWeek[progressIndex] = newImage;
          newPlants[plantIndex].textWeek[progressIndex] = newProgressText;
      
          savedPlants(newPlants);
      } else {
          console.error("Semana no encontrada para la planta con ID:", id, "y título de semana:", oldWeekTitle);
      }
    } else {
        console.error("Planta no encontrada con ID:", id);
    }
  } // Quedo lista con ayuda de gpt, es una gran erramienta

  const deletedProgress = (id, week) =>{
    const plantIndex = statePlants.findIndex(item => item.id === id);
    const newPlants = [...statePlants];

    // Encuentra el índice del progreso en el array de la planta
    const progressIndex = newPlants[plantIndex].week.findIndex(item => item === week);

    // Si se encuentra el progreso, lo elimina del array
    if (progressIndex !== -1) {
        newPlants[plantIndex].week.splice(progressIndex, 1);
        newPlants[plantIndex].srcWeek.splice(progressIndex, 1);
        newPlants[plantIndex].textWeek.splice(progressIndex, 1)
        savedPlants(newPlants);
    } else {
        console.error("Progreso no encontrado para la planta con ID:", id, "y semana:", week);
    }
  } // Quedo lista, y con la ayuda de chatGPT

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
            setNewProgressEdit,
        }}>
            {children}
        </ProgressContext.Provider>
    )
}
export { ProgressContext, ProgressProvider }