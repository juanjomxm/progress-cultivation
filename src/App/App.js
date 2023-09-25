import React from "react";
import { TitleCultivation } from "../TitleApp/TitleApp";
import { SearchPlants } from "../SearchPlants/SearchPlants";
import { ContainerImagesPlants}  from "../ImagesPlants/ImagePlants";
import { ImageCultivation } from "../ImagesPlants/ImagePlants";

// const imagesPlants = [
//   {name: 'Black Kush98', genetic: 'Mostly Indica', src: ['https://th.bing.com/th/id/R.bff9e0e41b2e2a1b66a8f4507b8010e2?rik=SbPG4gDvv44MYQ&pid=ImgRaw&r=0', 'https://th.bing.com/th/id/OIP.HFbzEl8pygaHMu9Q6lT9UwHaJ4?pid=ImgDet&rs=1', 'https://media.growdiaries.com/static/post/photo/31407/4121784_gea-seeds-black-kush-98-grow-journal-by-zombikushaddictedgeaseedsblack-kush-98.jpg',], progress: [' Con esta planta black', 'Con esta planta black2', 'Con esta planta black3']},

//   {name: 'Somango', genetic: 'Mostly Indica', src: ['https://th.bing.com/th/id/OIP.eiy_imzG0fFgbIcH59aRWgHaHa?pid=ImgDet&rs=1', 'https://th.bing.com/th/id/R.0a2e4ac4ab93fc1e9ce6b479142cd9a4?rik=nh1wgGPuHAD%2faw&pid=ImgRaw&r=0', 'https://uploads.tapatalk-cdn.com/20180523/d85c1e7071b4b10a1b0374f9b2a83d01.jpg'], progress: ['Con esta planta somango', 'Con esta planta somango2', 'Con esta planta somango3']},

//   {name: 'Red Critical Auto', genetic: 'Mostly Indica', src: ['https://th.bing.com/th/id/R.3866ef5d9dc6381f11afdf792b493dbb?rik=ReZvmNvN%2bbHNUw&pid=ImgRaw&r=0','https://th.bing.com/th/id/OIP.aE_SyuzuXMx2CPS5Ac545wAAAA?pid=ImgDet&rs=1', 'https://th.bing.com/th/id/OIP.VkB0J_Vh46f9js-L8JFHaAHaHa?pid=ImgDet&rs=1'], progress: ['Con esta planta red', 'Con esta planta red2', 'Con esta planta red3']},

//   {name: 'Purple Punch', genetic: 'Mostly Indica', src: ['https://th.bing.com/th/id/OIP.6-yb6QKQLS1PZ_clwop-jgHaHa?pid=ImgDet&rs=1', 'https://www.alchimiaweb.com/blog/wp-content/uploads/2013/08/Una-genetica-Purple-presentada-por-Subcool-Cannabis-de-color-rosa.jpg', 'https://th.bing.com/th/id/OIP.x7O6MfRkhN7kfo-67ROjNgAAAA?pid=ImgDet&rs=1'], progress: ['Con esta planta purple', 'Con esta planta punch2', 'Con esta planta punch3']}
// ]
// localStorage.setItem('cultivation', JSON.stringify(imagesPlants))

// const stringifiedCultivation = JSON.stringify(imagesPlants) // Se debe pasar el array de aobjetos a string y despues parsearlo para volverlo a convertir en un objeto que pueda ver el usuario
// JSON.parse(stringifiedCultivation)

function App() {

  // LOCAL STORAGE
  const localStorageCultivation = localStorage.getItem('cultivation')
  let parsedCultivation

  if(localStorageCultivation){
    parsedCultivation = JSON.parse(localStorageCultivation)
  }else{
    localStorage.setItem('cultivation', JSON.stringify([]))
    parsedCultivation = []
  }

  // ESTADOS
  const [stateInputSearchPlant, setStateInputSearchPlant] = React.useState('')
  const [statePlants, setPlants] = React.useState(parsedCultivation)
 
  // ESTADOS DERIVADOS
 
  const searchPlants = statePlants.filter(item =>{
    return item.name.toLocaleLowerCase().includes(stateInputSearchPlant.toLocaleLowerCase())
  })

  // const saveCultivation = (newCultivation)=>{
  //   localStorage.setItem('cultivation', JSON.stringify(newCultivation))
  //   setPlants(newCultivation)
  // } Esta funcion la debo utilizar en un componente que se deba actualizar el estado y tambien el local storage(informacion, configuraciones, preferencias, etc)


  return (
    <React.Fragment>

      <TitleCultivation />
      <SearchPlants 
      inputSearchPlant={stateInputSearchPlant} 
      setInputSearchPlant={setStateInputSearchPlant}
      />

      <ContainerImagesPlants>
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
