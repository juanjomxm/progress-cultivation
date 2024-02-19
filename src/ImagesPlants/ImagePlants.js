import React from "react"
import { ProgressContext } from "../ContextGlobal/ContextGlobal"
import { useNavigate } from "react-router-dom"

// En esta funcion es donde se renderiza laas nuevas plantas que agrego en el home
function ContainerImagesPlants(){
    const {
        searchPlants,
    } = React.useContext(ProgressContext)

    return(
        <div>
            <ul className="container-data-images">
                {searchPlants.map(post => { // De esta manera funciona el input para buscar la planta
                    return <WeekPost
                    key={post.name}
                    post={post}/> 
                })}
            </ul>
        </div>  
    )
}

// Con esta funcion es donde organizo la lista como deseo que se muestre y le envo el componente a la funcion que renderiza las plantas
function WeekPost({ post }) {
  const {
    deletedPlant 
  } = React.useContext(ProgressContext)
  const navigateProgress = useNavigate()

  return (
      <li className="images">
          <h2>{post.name}</h2>

          <img
            src={post.src}
            width={300}
            height={300}
            alt={post.name}
          />

          <button
            className="water-text"
            onClick={() => {
              navigateProgress(`/${post.name}/${post.id}`);
            }}
          >
          Ver progreso
          </button>

          <div className="container-button-edit-delete">
            <button
              onClick={() => {
                navigateProgress(`/edit/${post.name}/${post.id}`);
              }}
            >
            EDITAR
            </button>

            <button
              onClick={() => {
                deletedPlant(post.id);
              }}
            >
            ELIMINAR
            </button>
          </div>
      </li>
  )
}


export { ContainerImagesPlants }
export { WeekPost }
