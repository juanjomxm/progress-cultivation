import React from "react"

// CUSTOM HOOK de useLocalStorage
function useLocalStorage(itemName, initialValue){ // El primer parametro hace referencia al nombre de la app en el localStorage y el segundo parametro hace referencia al valor inicial de ese localStorage que despues se puede convertir en un objeto ejecutando una funcion para ingresar datos en el localStorage

    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          // LOCAL STORAGE
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem

          if(localStorageItem){
            parsedItem = JSON.parse(localStorageItem)
            setItem(parsedItem)
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
    } //Esta funcion la debo utilizar en un componente que se deba actualizar el estado y tambien el local storage(informacion, configuraciones, preferencias, etc). Esta funcion me servira cuando escriba el codigo para guardar o actualizar el progreso del cultivo

    return {
      item,
      saveItem,
      loading,
      error
    }
}
export { useLocalStorage }
