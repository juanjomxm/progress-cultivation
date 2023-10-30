import React from "react"

// CUSTOM HOOK de useLocalStorage
function useLocalStorage(itemName, initialValue){ // Este primer argumento de la funcion, se traduce en el contexto global como en nombre de la app y el segundo argumento son los parentesis en el contexto global

    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [newImage, setNewImage] = React.useState(initialValue)

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
    } //Esta funcion la debo utilizar en un componente que se deba actualizar el estado y tambien el local storage(informacion, configuraciones, preferencias, etc). Esta funcion me servira cuando escriba el codigo para guardar o actualizar el progreso del cultivo

    return {
      item,
      saveItem,
      loading,
      error,
      newImage,
      setNewImage,
    }
}

function useLocalStorageWeek(itemNameWeek, initialValueWeek){
  // Estados del modal de progreso semana por semana
  const [itemWeek, setItemWeek] = React.useState(initialValueWeek)
  const [newImageProgress, setNewImageProgress] = React.useState(initialValueWeek)
  const [openModalProgress, setOpenmodalProgress] = React.useState(false)

  React.useEffect(()=>{
    setTimeout(()=>{
      const localStorageItemWeek = localStorage.getItem(itemNameWeek)
      let parsedItemWeek

      if(localStorageItemWeek){
        parsedItemWeek = JSON.parse(localStorageItemWeek)
        setItemWeek(parsedItemWeek) // Como este actualizador del estado esta por fuera del localStorage, no hay persistencia de datos, al momento de recargar la pagina se pierde la informacion, pero no me arroja error
        setNewImageProgress(parsedItemWeek)
      } else{
        localStorage.setItem(localStorageItemWeek, JSON.stringify(initialValueWeek))
        parsedItemWeek = initialValueWeek
      }
    }, 1000)

  }, [])

  const saveItemWeek = (newItemWeek)=>{
    localStorage.setItem(itemNameWeek, JSON.stringify(newItemWeek))
    setNewImageProgress(newItemWeek)
    setItemWeek(newItemWeek)
  }

  return{
    newImageProgress, 
    setNewImageProgress,
    itemWeek,
    saveItemWeek,
    openModalProgress, 
    setOpenmodalProgress
  }
}

export { useLocalStorage }
export { useLocalStorageWeek }