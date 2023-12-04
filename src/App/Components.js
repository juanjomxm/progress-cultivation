import React from "react";
import { HashRouter, Routes, Route, useParams} from "react-router-dom";

import { TitleCultivation } from "../TitleApp/TitleApp";
import { SearchPlants } from "../SearchPlants/SearchPlants";
import { ContainerImagesPlants}  from "../ImagesPlants/ImagePlants";
import { ImageCultivation } from "../ImagesPlants/ImagePlants";
import { InitCultivation } from "../ButtonInitiCultivation/InitCultivation";
import { PlantNew } from "../PlantForm/PlantNew";
import { PlantEdit } from "../PlantForm/PlantEdit";

import { TitleWeek } from "../TitleApp/TitleApp";
import { ContainerProgressPlants } from "../ProgressForm/ProgressNew";
import { ProgressNew } from "../ProgressForm/ProgressNew";
import { ProgressNewModal } from "../ProgressNewModal/ProgressNewModal";
import { ButtonModalProgress } from "../ProgressForm/ProgressNew";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";

function Components(){
    const {
        loading,
        error,
        searchPlants,
        editPlant
    } = React.useContext(ProgressContext)

    const params = useParams()
    const {id} = Number(params.id)

    return (
    <React.Fragment>
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
                            {loading && <div className="loader-container"><div className="spinner"></div></div>}
                            {error && <p>Hubo un error</p>}
                            <TitleWeek/>
                            <ButtonModalProgress/>
                            <ImageCultivation/>
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

                    <Route path={"/edit/:name/:id" } element={ 
                        <React.Fragment>
                            <PlantEdit/>
                        </React.Fragment>
                    }
                    />

                    <Route path="/form2/:id" element={ 
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
