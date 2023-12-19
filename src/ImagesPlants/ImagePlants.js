import React from "react"
import { ProgressContext } from "../ContextGlobal/ContextGlobal"
import { Link, useParams, useNavigate} from "react-router-dom"
import { useImageCache } from "../ContextGlobal/ContextImagesCache"

// En esta funcion es donde se renderiza laas nuevas plantas que agrego en el home
function ContainerImagesPlants(){
    const {
        searchPlants,
    } = React.useContext(ProgressContext)

    return(
        <div>
            <ul>
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
  const navigateProgress = useNavigate();
  const { deletedPlant } = React.useContext(ProgressContext);

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
    </li>
  );
}

// Con esta funcion es donde organizo el componente como deseo que se muestre en la navegacion dinamica
function ImageCultivation(){
    const{
        setNewProgressText,
        statePlants,
        deletedPlantProgress
    } = React.useContext(ProgressContext)

    const onchangeText = (event)=>{
        setNewProgressText(event.target.value)
    }

    const { name } = useParams()
    const post = statePlants.find(item => item.name === name)

        return(
            <div className="modal-progress-images">
                <li className="images">
                    <h2>{post.week}</h2>
                    <img
                    src={post.srcWeek}
                    width={200}
                    height={200}
                    >
                    </img>
    
                    <textarea
                    className="text-progress-plant"
                    value={post.textWeek}
                    onChange={onchangeText}
                    >   
                    </textarea>
    
                    <button
                    onClick={()=>{
                        console.log('Delete')
                        // deletedPlantProgress(post.id)
                    }}
                    >
                    Eliminar
                    </button>
                </li>
            </div>
        )
}
export { ContainerImagesPlants }
export { WeekPost }
export { ImageCultivation}