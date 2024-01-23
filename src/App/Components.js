import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { TitleCultivation } from "../TitleApp/TitleApp";
import { SearchPlants } from "../SearchPlants/SearchPlants";
import { ContainerImagesPlants}  from "../ImagesPlants/ImagePlants";
import { InitCultivation } from "../ButtonInitiCultivation/InitCultivation";
import { PlantNew } from "../PlantForm/PlantNew";
import { PlantEdit } from "../PlantForm/PlantEdit";

import { TitleWeek } from "../TitleApp/TitleApp";
import { ProgressNew } from "../ProgressNewWeek/ProgressNew";
import { ProgressNewWeek } from "../ProgressNewForms/ProgressWeekForm";
import { ProgressEdit } from "../ProgressNewForms/ProgressEdit";
import { ButtonModalProgress } from "../ProgressNewWeek/ProgressNew";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";

function Components(){
    const {
        loading,
        error,
        statePlants,
        searchPlants
    } = React.useContext(ProgressContext)

    return (
    <React.Fragment>
            {/* Utilizando react-router aprendi que se crea una navegacion y poder mostrar los componentes que deseo  */}
            <HashRouter>
                <Routes>
                    <Route path="/" element={
                        <React.Fragment>
                            {error && <p>Hubo un error</p>}
                            <TitleCultivation />
                            <InitCultivation />
                            <SearchPlants/>
                            {(!loading && statePlants.length === 0) && <h4>Inica tu cultivo</h4>}
                            {(!loading && statePlants.length >= 1 && searchPlants.length === 0) &&  <h4>No hay coincidencias</h4>}
                            <ContainerImagesPlants/>
                            {loading && <div className="loader-container"><div className="spinner"></div></div>}
                        </React.Fragment>
                        }
                    />

                    <Route path="/:name/:id" element={
                        <React.Fragment>
                            <TitleWeek/>
                            <ButtonModalProgress/>
                            <ProgressNew/>
                            {loading && <div className="loader-container"><div className="spinner"></div></div>}
                            {error && <p>Hubo un error</p>}
                        </React.Fragment>
                    } 
                    // Para hacer este cambio debo escribir el hsh primero = /#/
                    />

                    {/* Ruta para agregar la planta del principio */}
                    <Route path="/form1" element={ 
                        <React.Fragment>
                            <PlantNew/>
                        </React.Fragment>
                    }
                    // Cuando Utilizo el useNavigate no necesito agregar los dos puntos como cuando se hace con la etiqueta Link
                    />

                    {/* Ruta para editar la planta del principio */}
                    <Route path={"/edit/:name/:id" } element={ 
                        <React.Fragment>
                            <PlantEdit/>
                        </React.Fragment>
                    }
                    />

                    {/* Ruta para agregar la planta del progreso*/}
                    <Route path="/form2/:id" element={ 
                        <React.Fragment>
                            <ProgressNewWeek/>
                        </React.Fragment>
                    }
                    />

                    {/* Ruta para editar la planta del progreso*/}
                    <Route path={"/edit/:name/:week/:id" } element={ 
                        <React.Fragment>
                            <ProgressEdit/>
                        </React.Fragment>
                    }
                    />
                </Routes>
            </HashRouter>
    </React.Fragment>
    )
}
export { Components }
