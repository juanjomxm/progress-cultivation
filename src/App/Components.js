import React from "react";
import { TitleCultivation } from "../TitleApp/TitleApp";
import { SearchPlants } from "../SearchPlants/SearchPlants";
import { ContainerImagesPlants}  from "../ImagesPlants/ImagePlants";
import { ImageCultivation } from "../ImagesPlants/ImagePlants";
import { InitCultivation } from "../ButtonInitiCultivation/InitCultivation";
import { Modal} from "../Modal/Modal";
import { PlantNew } from "../PlantForm/PlantNew";
import { ModalProgress } from "../Modal/Modal";
import { ProgressNew } from "../ProgressForm/ProgressNew";
import { ProgressNewModal } from "../ProgressNewModal/ProgressNewModal";
import { ButtonProgress } from "../ProgressForm/ProgressNew";
import { ButtonBack } from "../ProgressForm/ProgressNew";
import { ModalProgressImages } from "../Modal/Modal";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
//import { ProgressContextWeeks } from "../ContextProgress/ContextProgres";

function Components(){
    const {
        loading,
        error,
        searchPlants,
        openModal,
        openModalProgress,
        openModalProgressImages
    } = React.useContext(ProgressContext)
    // const{
    //     openModalProgress,
    //     openModalProgressImages
    // } = React.useContext(ProgressContextWeeks)
    return (
    <React.Fragment>
        <TitleCultivation />
        <InitCultivation />
        <SearchPlants/>

        <ContainerImagesPlants>
            {loading && <div className="loader-container"><div className="spinner"></div></div>}
            {(!loading && searchPlants.length === 0) && <p>No hay coincidencias</p>}
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

        {openModalProgress && (
            <ModalProgress>
                <ButtonProgress/>
                <ProgressNew/>
                <ButtonBack/>
            </ModalProgress> 
        )}

        {openModalProgressImages && (
            <ModalProgressImages>
                <ProgressNewModal/>
            </ModalProgressImages>
        )}
    </React.Fragment>
    )
}
export { Components }