import React from "react"

// CUSTOM HOOK de useLocalStorage
function useLocalStorage(itemName, initialValue){ // Este primer argumento de la funcion, se traduce en el contexto global como en nombre de la app y el segundo argumento son los parentesis en el contexto global

    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    
    const [newImage, setNewImage] = React.useState(initialValue) // Estado que controla subir la imagen de la planta de inincio
    const [newImageProgress, setNewImageProgress] = React.useState(initialValue) // Estado que controla subir la imagen del progreso semana por semana

    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          // LOCAL STORAGE
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem


          if(localStorageItem){
            parsedItem = JSON.parse(localStorageItem)
            setItem(parsedItem)
            setNewImage(parsedItem)
            setNewImageProgress(parsedItem)
          }else{
            localStorage.setItem(localStorageItem, JSON.stringify(initialValue))
            parsedItem = initialValue
          }
          setLoading(false)
        }catch(error){
          setLoading(false)
          setError(error)
        }
      }, 2000)
    }, [])

    const saveItem = (newItem)=>{
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
      setNewImage(newItem)
      setNewImageProgress(newItem)
    } //Esta funcion la debo utilizar en un componente que se deba actualizar el estado y tambien el local storage(informacion, configuraciones, preferencias, etc). Esta funcion me servira cuando escriba el codigo para guardar o actualizar el progreso del cultivo

    return {
      item,
      saveItem,
      loading,
      error,
      newImage,
      setNewImage,
      newImageProgress, 
      setNewImageProgress
    }
}
export { useLocalStorage }
