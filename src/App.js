import React from "react";
import { TitleCultivation } from "./TitleApp";
import { ContainerImagesPlants}  from "./ImagePlants";
import { ImageCultivation } from "./ImagePlants";

const imagesPlants = [
  {name: 'Black Kush98', genetic: 'Mostly Indica', src: 'https://th.bing.com/th/id/R.bff9e0e41b2e2a1b66a8f4507b8010e2?rik=SbPG4gDvv44MYQ&pid=ImgRaw&r=0' },
  {name: 'Somango', genetic: 'Mostly Indica', src: 'https://www.semillaslowcost.com/1091-large_default/somango-47.jpg'},
  {name: 'Red Critical Auto', genetic: 'Mostly Indica', src: 'https://th.bing.com/th/id/R.3866ef5d9dc6381f11afdf792b493dbb?rik=ReZvmNvN%2bbHNUw&pid=ImgRaw&r=0'},
  {name: 'Purple Punch', genetic: 'Mostly Indica', src: 'https://www.beaverseed.com/wp-content/uploads/2020/02/Purple-Punch-Feminized.jpg'}
]

function App() {
  return (
    <React.Fragment>

      <TitleCultivation />

      <ContainerImagesPlants>
        {imagesPlants.map(item =>{
          return <ImageCultivation key={item.name} name={item.name} src={item.src} genetic={item.genetic} />
        })}
      </ContainerImagesPlants>

    </React.Fragment>
  );
}

export { App }
