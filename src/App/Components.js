import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { TitleCultivation } from "../TitleApp/TitleApp";
import { SearchPlants } from "../SearchPlants/SearchPlants";
import { ContainerImagesPlants}  from "../ImagesPlants/ImagePlants";
import { ImageCultivation } from "../ImagesPlants/ImagePlants";
import { InitCultivation } from "../ButtonInitiCultivation/InitCultivation";
import { PlantNew } from "../PlantForm/PlantNew";

import { TitleWeek } from "../TitleApp/TitleApp";
// import { ContainerProgressPlants } from "../ProgressForm/ProgressNew";
// import { ProgressNew } from "../ProgressForm/ProgressNew";
import { ProgressNewModal } from "../ProgressNewModal/ProgressNewModal";
import { ButtonModalProgress } from "../ProgressForm/ProgressNew";
import { ModalProgressImages } from "../Modal/Modal";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";

function Components(){
    const {
        loading,
        error,
        searchPlants,
        // openModalProgressImages,
    } = React.useContext(ProgressContext)

    return (
    <React.Fragment>
        {/* Este es el modal para agregar el numero de la semana y la imagen de el progreso */}
        {/* {openModalProgressImages && (
                <ModalProgressImages>
                    <ProgressNewModal/>
                </ModalProgressImages>
            )} */}

            {/* Utilizando react-router aprendi que se crea una navegacion y poder mostrar los componentes que deseo  */}
            <HashRouter>
                <Routes>
                    <Route path="/" element={
                        <React.Fragment>
                            {loading && <div className="loader-container"><div className="spinner"></div></div>}
                            {error && <p>Hubo un error</p>}
                            <TitleCultivation />
                            <InitCultivation />
                            <SearchPlants/>
                            {(!loading && searchPlants.length === 0) && <p>No hay coincidencias</p>}
                            <ContainerImagesPlants/>
                        </React.Fragment>
                        }
                    />

                    <Route path="/:name" element={
                        <React.Fragment>
                            <TitleWeek/>
                            <ButtonModalProgress/>
                            <ImageCultivation/>
                            {/* <ContainerProgressPlants/> */}
                            {/* <ProgressNew/> */}
                        </React.Fragment>
                    }
                    // Para hacer este cambio debo escribir el hsh primero = /#/
                    />

                    <Route path="/form1" element={ 
                        <React.Fragment>
                            <PlantNew/>
                        </React.Fragment>
                    }
                    // Cuando Utilizo el useNavigate no necesito agregar los dos puntos como cuando se hace con la etiqueta Link
                    />

                    <Route path="/form2" element={ 
                        <React.Fragment>
                            <ProgressNewModal/>
                        </React.Fragment>
                    }
                    // Cuando Utilizo el useNavigate no necesito agregar los dos puntos como cuando se hace con la etiqueta Link
                    />
                </Routes>
            </HashRouter>
    </React.Fragment>
    )
}
export { Components }
