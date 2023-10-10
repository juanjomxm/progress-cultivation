import React from "react";
import ReactDOM from "react-dom";

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="modal-background">
            {children}
        </div>,
        document.getElementById('modal')
    )
}

function ModalProgress({children}){
    return ReactDOM.createPortal(
        <div className="modal-progress-background">
            {children}
        </div>,
        document.getElementById('modal-progress')
    )
}

// function ModalProgressImages({children}){
//     return ReactDOM.createPortal(
//         <div className="modal-background">
//             {children}
//         </div>,
//         document.getElementById('modal-progress-images')
//     )
// } En este modal debo realizar que cuando le de click al boton de la imagen del progreso abra otro modal para ingresar los datos del progreso de la nueva semana

export { Modal }
export { ModalProgress }
//export { ModalProgressImages }