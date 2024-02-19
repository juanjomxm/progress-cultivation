import React from "react";

import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { Modal } from "./ModalImages";

import { useNavigate, useParams} from "react-router-dom";

function ButtonModalProgress(){
    const navigateProgress = useNavigate()

    const params = useParams()
    const id = Number(params.id)

    return(
      <div className="container-title-and-buttons">
          <div className="container-title-progress">
            <h1>PROGRESO</h1>
          </div>

          <div className="container-buttons-progress">
            <button
              onClick={()=>{
                navigateProgress('/')
              }}
            >Menu Principal</button>

            <button className="button-progress-week"
              onClick={()=>{
                navigateProgress(`/form2/${id}`)
              }}
            >Agregar Progreso</button>
          </div>
      </div>
    )
}

// // Esta es la funcion que renderiza el progreso del cultivo semana por semana
function ProgressNew() {
  const {
    statePlants,
    setNewProgressText,
    deletedProgress,
  } = React.useContext(ProgressContext)

   // Modal para ver las imagenes en tamaño original
   const [openModal, setOpenModal] = React.useState(false)
   const [selectedImageIndex, setSelectedImageIndex] = React.useState(null)

  const navigateProgressEdit = useNavigate()

  const { name } = useParams()
  const post = statePlants.find((item) => item.name === name)

  const onChangeTextProgress = (event, index) => {
    const newArray = [...post.textWeek];
    newArray[index] = event.target.value;
    setNewProgressText(newArray);
  }

  return (
    <div className="modal-progress-images">
      {post && Array.isArray(post.week) && post.week.map((item, index) => (
        <li key={index} className="div-content-progress">
          <h2>{item}</h2>

          <div className="images-progress">
            <img
              src={post.srcWeek[index]}
              width={200}
              height={200}
              alt={`Week ${index + 1}`}
            />
            <button
            className="water-text-progress"
            onClick={()=>{
              setSelectedImageIndex(index)
              setOpenModal(true)
            }}
            >👁️</button>
          </div>
          
          {openModal && selectedImageIndex === index && (
            <Modal>
              <img
                src={post.srcWeek[index]}
                width={700}
                height={500}
                alt={`Week ${index + 1}`}
                onClick={()=>{
                  setOpenModal(false)
                }}
              />
            </Modal>
          )}

          <textarea
            className="text-progress-plant"
            value={post.textWeek[index]}
            onChange={(event) => onChangeTextProgress(event, index)}
          ></textarea>

          <button
            onClick={(e) => {
              e.preventDefault()
              navigateProgressEdit(`/edit/${post.name}/${post.week[index]}/${post.id}`);
            }}
          >
          Editar
          </button>

          <button
          onClick={()=>{
            deletedProgress(post.id, item)
          }}
          >
          Eliminar
          </button>
        </li>
      ))}
    </div>
  )
} 

export { ButtonModalProgress }
export { ProgressNew }
