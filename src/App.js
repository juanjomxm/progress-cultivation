import React from "react";
import { TitleCultivation } from "./TitleApp";
import { SearchPlants } from "./SearchPlants";
import { ContainerImagesPlants}  from "./ImagePlants";
import { ImageCultivation } from "./ImagePlants";

const imagesPlants = [
  {name: 'Black Kush98', genetic: 'Mostly Indica', src: ['https://th.bing.com/th/id/R.bff9e0e41b2e2a1b66a8f4507b8010e2?rik=SbPG4gDvv44MYQ&pid=ImgRaw&r=0', 'https://th.bing.com/th/id/OIP.HFbzEl8pygaHMu9Q6lT9UwHaJ4?pid=ImgDet&rs=1'], },

  {name: 'Somango', genetic: 'Mostly Indica', src: ['https://th.bing.com/th/id/OIP.eiy_imzG0fFgbIcH59aRWgHaHa?pid=ImgDet&rs=1', 'https://th.bing.com/th/id/R.0a2e4ac4ab93fc1e9ce6b479142cd9a4?rik=nh1wgGPuHAD%2faw&pid=ImgRaw&r=0']},

  {name: 'Red Critical Auto', genetic: 'Mostly Indica', src: ['https://th.bing.com/th/id/R.3866ef5d9dc6381f11afdf792b493dbb?rik=ReZvmNvN%2bbHNUw&pid=ImgRaw&r=0','https://th.bing.com/th/id/OIP.aE_SyuzuXMx2CPS5Ac545wAAAA?pid=ImgDet&rs=1']},

  {name: 'Purple Punch', genetic: 'Mostly Indica', src: ['https://th.bing.com/th/id/OIP.6-yb6QKQLS1PZ_clwop-jgHaHa?pid=ImgDet&rs=1', 'https://th.bing.com/th/id/R.52dfae74554eccdb48f03eca632887e7?rik=XY2S%2b00qvUUQag&pid=ImgRaw&r=0']}
]

function App() {

  // ESTADOS
  const [stateInputSearchPlant, setStateInputSearchPlant] = React.useState('')
  const [statePlants, setPlants] = React.useState(imagesPlants)

  // ESTADOS DERIVADOS

  const searchPlants = statePlants.filter(item =>{
    return item.name.toLocaleLowerCase().includes(stateInputSearchPlant.toLocaleLowerCase())
  })

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
          />
        })}
      </ContainerImagesPlants>

    </React.Fragment>
  );
}

export { App }
