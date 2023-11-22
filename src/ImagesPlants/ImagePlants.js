import React from "react"
import { ProgressContext } from "../ContextGlobal/ContextGlobal"
import { Link, useParams, useNavigate} from "react-router-dom"


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
function WeekPost({post}){
    const navigateProgress = useNavigate()
    const {
        deletedPlant,
        newPlant
    } = React.useContext(ProgressContext)
    return(
        <li className="images">
            <Link to={`/${post.name}/${post.id}`}>{post.name}</Link>
            <img
            src={post.src}
            width={300}
            height={300}
            />
            <button
                onClick={()=>{
                    deletedPlant(newPlant)
                }}
            >ELIMINAR</button>
            <button
                onClick={()=>{
                    navigateProgress('/edit/' + post.id) // De esta manera puedo abrir una pagina con navegacion para poder editar la pnata agregada
                    console.log('Editar')
                }}
            >EDITAR</button>
        </li>
    )
}

// Con esta funcion es donde organizo el componente como deseo que se muestre en la navegacion dinamica

function ImageCultivation(){  // Estoy identificando que haciendolo de esta  manera es como se renderiza los atributos que deseo reconociendo el nombre de la planta
    const{
        deletedPlantProgress,
        setNewProgressText,
        objectPrincipal
    } = React.useContext(ProgressContext)

    const onchangeText = (event)=>{
        setNewProgressText(event.target.value)
    }

    const { name } = useParams()
    const post = objectPrincipal.statePlants.find(item => item.name === name)

    return(
        <div className="modal-progress-images">
            <div className="images">
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
                onClick={deletedPlantProgress}
                >
                Eliminar
                </button>
            </div>
        </div>
    )
}
export { ContainerImagesPlants }
export { WeekPost }
export { ImageCultivation}