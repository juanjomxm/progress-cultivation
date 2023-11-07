import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { TitleCultivation } from "../TitleApp/TitleApp";
import { SearchPlants } from "../SearchPlants/SearchPlants";
import { ContainerImagesPlants}  from "../ImagesPlants/ImagePlants";
import { ImageCultivation } from "../ImagesPlants/ImagePlants";
import { InitCultivation } from "../ButtonInitiCultivation/InitCultivation";
import { Modal} from "../Modal/Modal";
import { PlantNew } from "../PlantForm/PlantNew";

import { TitleWeek } from "../TitleApp/TitleApp";
import { ContainerProgressPlants } from "../ProgressForm/ProgressNew";
import { ProgressNew } from "../ProgressForm/ProgressNew";
import { ProgressNewModal } from "../ProgressNewModal/ProgressNewModal";
import { ButtonModalProgress } from "../ProgressForm/ProgressNew";
import { ModalProgressImages } from "../Modal/Modal";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";

function Components(){
    const {
        loading,
        error,
        searchPlants,
        openModal,
        openModalProgressImages,
        viewAllWeek
    } = React.useContext(ProgressContext)

    return (
    <React.Fragment>
        {/* Este es el modal para agregar el nombre e imagen de la cada planta del cultivo */}
        {openModal && (
            <Modal>
                <PlantNew/>
            </Modal> 
        )}

        {/* Este es el modal para agregar el numero de la semana y la imagen de el progreso */}
        {openModalProgressImages && (
                <ModalProgressImages>
                    <ProgressNewModal/>
                </ModalProgressImages>
            )}

            {/* Utilizando react-router aprendi que se crea una navegacion y poder mostrar los componentes que deseo  */}
            <HashRouter>
                <Routes>
                    <Route path="/home" element={
                        <React.Fragment>
                            {loading && <div className="loader-container"><div className="spinner"></div></div>}
                            {error && <p>Hubo un error</p>}
                            <TitleCultivation />
                            <InitCultivation />
                            <SearchPlants/>
                            <ContainerImagesPlants/>
                            {(!loading && searchPlants.length === 0) && <p>No hay coincidencias</p>}
                        </React.Fragment>
                        }
                    />

                    <Route path="/home/:name" element={
                        <React.Fragment>
                            <TitleWeek/>
                            <ButtonModalProgress/>
                            <ImageCultivation/>
                        </React.Fragment>
                    }
                    />

                    {/* <Route path="/week" element={<ContainerProgressPlants>
                        <TitleWeek/>
                        <ButtonModalProgress/>
                        <ProgressNew/>
                    </ContainerProgressPlants>}
                    /> */}
                    {/* Para hacer este cambio debo escribir el hsh primero = /#/ */}

                    {/* <Route path="/week/:name" element={<ContainerProgressPlants>
                        <TitleWeek/>
                        <ButtonModalProgress/>
                        <ProgressNew/>
                    </ContainerProgressPlants>}/> */}
                </Routes>
            </HashRouter>
    </React.Fragment>
    )
}
export { Components }
