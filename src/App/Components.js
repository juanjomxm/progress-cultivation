import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { InitCultivation } from "../ButtonInitiCultivation/InitCultivation";
import { SearchPlants } from "../SearchPlants/SearchPlants";
import { ContainerImagesPlants}  from "../ImagesPlants/ImagePlants";
import { PlantNew } from "../PlantForm/PlantNew";
import { PlantEdit } from "../PlantForm/PlantEdit";

import { ProgressNew } from "../ProgressNewWeek/ProgressNew";
import { ProgressNewWeek } from "../ProgressNewForms/ProgressWeekForm";
import { ProgressEdit } from "../ProgressNewForms/ProgressEdit";
import { ButtonModalProgress } from "../ProgressNewWeek/ProgressNew";

import { ProgressContext } from "../ContextGlobal/ContextGlobal";

import { ChatBot } from "../ChatBot/ChatBot";
import { Climate } from "../Climate/Climate";

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
                        <div className="container-init-and-searchplants">
                            <InitCultivation />
                            {(statePlants.length >= 1) && <SearchPlants/>}
                        </div>

                        <div className="climate">
                            <Climate/>
                        </div>

                        <div className="section-title-and-chat">
                            <div className="container-title-and-data-images">
                            <ContainerImagesPlants/>
                            </div>
                        </div>

                        <div className="container-chat">
                            <ChatBot />
                        </div>

                        {(!loading && statePlants.length === 0) && <h4>Inica tu cultivo</h4>}
                        {(!loading && statePlants.length >= 1 && searchPlants.length === 0) &&  <h4>No hay coincidencias</h4>}
                            
                        {loading && <div className="loader-container"><div className="spinner"></div></div>}
                    </React.Fragment>
                }
                />

                {/* Ruta del formlario para agregar las plantas del inicio*/}
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

                {/* navegacion al progreso de la planta */}
                <Route path="/:name/:id" element={
                    <React.Fragment>
                        <ButtonModalProgress/>
                        <ProgressNew/>
                        {/* <div className="container-chat">
                            <ChatBot />
                        </div> */}
                        {loading && <div className="loader-container"><div className="spinner"></div></div>}
                        {error && <p>Hubo un error</p>}
                    </React.Fragment>
                } 
                // Para hacer este cambio debo escribir el hsh primero = /#/
                />

                {/* Ruta del formlario para agregar el progreso de las plantas*/}
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
