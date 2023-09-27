import React from "react";
import { TitleCultivation } from "../TitleApp/TitleApp";
import { SearchPlants } from "../SearchPlants/SearchPlants";
import { ContainerImagesPlants}  from "../ImagesPlants/ImagePlants";
import { ImageCultivation } from "../ImagesPlants/ImagePlants";
import { InitCultivation } from "../ImagesPlants/ImagePlants";


// CUSTOM HOOKS: Estos van fuera de la aplicacion que renderiza la aplicacion y empieza por la palabra clave (use) en minusculas para reconocerla de un componente

function useLocalStorage(itemName, initialValue){

  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  
  React.useEffect(()=>{
    try{
      setTimeout(()=>{
        // LOCAL STORAGE
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem
        if(localStorageItem){
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }else{
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        }
        setLoading(false)
      }, 2000)
    }catch(error){
      setLoading(false)
      setError(error)
    }
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

function App() {

  // ESTADOS
  const [stateInputSearchPlant, setStateInputSearchPlant] = React.useState('')
  const {
    item: statePlants, 
    saveItem: stateSavePlants,
    loading,
    error
  } = useLocalStorage('cultivation', [])
 
  // ESTADOS DERIVADOS
 
  const searchPlants = statePlants.filter(item =>{
    return item.name.toLocaleLowerCase().includes(stateInputSearchPlant.toLocaleLowerCase())
  })

  return (
    <React.Fragment>

      <TitleCultivation />
      <InitCultivation />
      <SearchPlants 
      inputSearchPlant={stateInputSearchPlant} 
      setInputSearchPlant={setStateInputSearchPlant}
      />

      <ContainerImagesPlants>
        {loading && <p>Estamos cargando</p>}
        {(!loading && searchPlants.length == 0) && <p>Empieza tu cultivo</p>}
        {error && <p>Hubo un error</p>}
        {searchPlants.map(item =>{
          return <ImageCultivation
          key={item.name} 
          name={item.name}
          genetic={item.genetic} 
          src={item.src}
          progress={item.progress}
          />
        })}
      </ContainerImagesPlants>

    </React.Fragment>
  );
}

export { App }
