import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { Link, useParams } from "react-router-dom";

function ButtonModalProgress(){
    const{
        setOpenmodalProgressImages
    }= React.useContext(ProgressContext)

    return(
        <div className="container-buttons-progress">
            <div className="container-button-progress">
                <button className="button-progress-week"
                    onClick={()=>{
                        setOpenmodalProgressImages(state => !state)
                    }} // Boton para abrir el modal donde se introduce la informacion del pogreso de la semana
                >+</button>

                <button>
                    <Link to={'/home'}>Home</Link>
                </button>
            </div>
        </div>
    )
}

// function ContainerProgressPlants({children}){
//     return(
//         children
//     )
// }

// // Esta es la funcion que renderiza el progreso del cultivo semana por semana
// function ProgressNew({week, srcWeek, textWeek}){ 
//     const {
//         deletedPlantProgress,
//         setNewProgressText,
//         statePlants
//     } = React.useContext(ProgressContext)

//     const onchangeTextProgress = (event)=>{
//         setNewProgressText(event.target.value)
//     }

//     return(
//         <div className="modal-progress-images">
//             <div className="div-content-progress">
//                 <h2>{week}</h2>
//                 <img
//                 src={srcWeek}
//                 width={200}
//                 height={200}
//                 ></img>
//                 <textarea
//                 className="text-progress-plant"
//                 value={textWeek}
//                 onChange={onchangeTextProgress}
//                 >   
//                 </textarea>
//                 <button
//                 onClick={deletedPlantProgress}
//                 >
//                 Eliminar
//                 </button>
//             </div>
//         </div>
//     )
// }
// export { ContainerProgressPlants }
// export { ProgressNew }
export { ButtonModalProgress }
