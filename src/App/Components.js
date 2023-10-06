import React from "react";
import { TitleCultivation } from "../TitleApp/TitleApp";
import { SearchPlants } from "../SearchPlants/SearchPlants";
import { ContainerImagesPlants}  from "../ImagesPlants/ImagePlants";
import { ImageCultivation } from "../ImagesPlants/ImagePlants";
import { InitCultivation } from "../ButtonInitiCultivation/InitCultivation";
import { Modal } from "../Modal/Modal";
import { PlantNew } from "../PlantForm/PlantNew";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";

function Components(){
    const {
        loading,
        error,
        searchPlants,
        openModal
    } = React.useContext(ProgressContext)
    return (
    <React.Fragment>
        <TitleCultivation />
        <InitCultivation />
        <SearchPlants/>

        <ContainerImagesPlants>
            {loading && <div className="loader-container"><div className="spinner"></div></div>}
            {(!loading && searchPlants.length == 0) && <p>No hay coincidencias</p>}
            {error && <p>Hubo un error</p>}
            {searchPlants.map(item =>{
            return <ImageCultivation
            key={item.name} 
            name={item.name}
            src={item.src}
            />
            })}
        </ContainerImagesPlants>

        {openModal && (
            <Modal>
                <PlantNew/>
            </Modal> 
        )}
    </React.Fragment>
    )
}
export { Components }