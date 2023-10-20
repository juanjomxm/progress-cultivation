import React from "react";
import { TitleCultivation } from "../TitleApp/TitleApp";
import { SearchPlants } from "../SearchPlants/SearchPlants";
import { ContainerImagesPlants}  from "../ImagesPlants/ImagePlants";
import { ImageCultivation } from "../ImagesPlants/ImagePlants";
import { InitCultivation } from "../ButtonInitiCultivation/InitCultivation";
import { Modal} from "../Modal/Modal";
import { PlantNew } from "../PlantForm/PlantNew";
import { ModalProgress } from "../Modal/Modal";
import { ContainerProgressPlants } from "../ProgressForm/ProgressNew";
import { ProgressNew } from "../ProgressForm/ProgressNew";
import { ProgressNewModal } from "../ProgressNewModal/ProgressNewModal";
import { ButtonProgress } from "../ProgressForm/ProgressNew";
import { ButtonBack } from "../ProgressForm/ProgressNew";
import { ModalProgressImages } from "../Modal/Modal";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { CultivationProgress } from "../ContextProgressPlant/ContextProgress";

function Components(){
    const {
        loading,
        error,
        searchPlants,
        openModal,
        openModalProgress,
        openModalProgressImages,
        
    } = React.useContext(ProgressContext)

    const{
        itemProgress
    } = React.useContext(CultivationProgress)

    const viewWeek = itemProgress.filter(item => {
        return item.name + item.src + item.textWeek
    })
    // const viewWeekImage = itemProgress.map(item => item.src)
    // const viewText = itemProgress.map(item => item.textWeek)

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

        {/* Este es el modal para agregar el nombre e imagen de la cada planta del cultivo */}
        {openModal && (
            <Modal>
                <PlantNew/>
            </Modal> 
        )}

        {/* Este es el modal para agregar el progreso de la planta por semanas */}
        {openModalProgress && 
            <ContainerProgressPlants>
                <ModalProgress scrollable={true}>
                
                    {viewWeek.map(item =>{
                        return <ProgressNew
                        key={item.name}
                        name={item.name}
                        src={item.src}
                        textWeek={item.textWeek}
                        />
                    })}
                    <ButtonBack/> 
                    <ButtonProgress/>
                </ModalProgress>
            </ContainerProgressPlants>
        }
        

        {/* Este es el modal para agregar el numero de la semana y la imagen de el progreso */}
        {openModalProgressImages && (
            <ModalProgressImages>
                <ProgressNewModal/>
            </ModalProgressImages>
        )}
    </React.Fragment>
    )
}
export { Components }