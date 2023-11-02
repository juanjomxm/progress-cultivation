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

function ModalProgressImages({children}){
    return ReactDOM.createPortal(
        <div className="div-modal-progress-images">
            {children}
        </div>,
        document.getElementById('modal-progress-images')
    )
}

export { Modal }
export { ModalProgressImages }