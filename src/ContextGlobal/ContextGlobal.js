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
  } = useLocalStorage('cultivation', [])
  const [openModal, setOpenmodal] = React.useState(false)
  // const [openModalProgress, setOpenmodalProgress] = React.useState([]) // Estado para progreso de planta semana por semana
  const [openModalProgressImages, setOpenmodalProgressImages] = React.useState(false) // Estado para modal de agregar progreso de la pnata semana por semana
 
  // ESTADO DERIVADOS
  const searchPlants = statePlants.filter(item =>{
    return item.name.toLocaleLowerCase().includes(inputSearchPlant.toLocaleLowerCase())
  })

  // Funciones para los botones de agregar o elimnar
  const addPlant = (name) =>{
    const newPlants = [...statePlants]
    newPlants.push({
      name,
      src: newImage.src
    })
    savedPlants(newPlants)
  }

  const deletedPlant = (name) =>{
    const newPlants = [...statePlants]
    const plantIndex = newPlants.findIndex(item => item.name == name)
    newPlants.splice(plantIndex, 1)
    savedPlants(newPlants)
  }

  // FUncion para crear portal vacio

  // const createPortal = ()=>{
  //   const emptyPortal = document.createElement('div')
  //   document.body.appendChild(emptyPortal)
  //   setOpenmodalProgress((itemProgress)=>[
  //     ...itemProgress,
  //     ReactDOM.createPortal(<h2>Portal Nuevo</h2>, emptyPortal)
  //   ]) // Creo que esto debe ir en el contexto del progreso
  // }

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
            // openModalProgress, 
            // setOpenmodalProgress,
            openModalProgressImages, 
            setOpenmodalProgressImages,
            // createPortal
        }}>
            {children}
        </ProgressContext.Provider>
    )
}
export { ProgressContext, ProgressProvider }