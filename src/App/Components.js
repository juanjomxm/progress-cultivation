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
                    <Route path="/home" element={<ContainerImagesPlants>
                    <TitleCultivation />
                    <InitCultivation />
                    <SearchPlants/>
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
                    </ContainerImagesPlants>}/>

                    <Route path="/week" element={<ContainerProgressPlants>
                        <TitleWeek/>
                        <ButtonModalProgress/>
                        {viewAllWeek.map(item =>{ // Guardar en el mismo localStorgae y volver a ahacer el intento si se renderiza lo deseado ahora utilizando react-router
                            return <ProgressNew
                            key={item.week}
                            week={item.week}
                            srcWeek={item.srcWeek}
                            textWeek={item.textWeek}
                            />
                        })}
                    </ContainerProgressPlants>}/>
                    {/* Para hacer este cambio debo escribir el hsh primero = /#/ */}
                    {/* <Route path="/week/:srcWeek" element={<ProgressNew/>}></Route> Todavia no me queda claro como hacer funcionar el useParams o la navegacion dinamica */}
                </Routes>
            </HashRouter>
    </React.Fragment>
    )
}
export { Components }
