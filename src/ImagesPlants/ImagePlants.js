import React from "react"
import { ProgressContext } from "../ContextGlobal/ContextGlobal"
import { Link, useParams } from "react-router-dom"

// En esta funcion es donde se renderiza laas nuevas plantas que agrego en el home
function ContainerImagesPlants(){
    const {
        statePlants
    } = React.useContext(ProgressContext)

    return(
        <ul>
            {statePlants.map(post => {
                return <WeekPost post={post}/>
            })}
        </ul>
    )
}

// Con esta funcion es donde organizo la lista como deseo que se muestre y le envo el componente a la funcion que renderiza las plantas
function WeekPost({post}){
    const {
        deletedPlant
    } = React.useContext(ProgressContext)
    return(
        <li className="images"> 
            <Link to={`/home/${post.name}`}>{post.name}</Link>
            <img
            src={post.src}
            width={300}
            height={300}
            />
            <button
                onClick={deletedPlant}
                >ELIMINAR</button>
        </li>
    )
}

// Con esta funcion es donde organizo el componente como deseo que se muestre en la navegacion dinamica
function ImageCultivation(){ 
    const{
        newImage,
        statePlants,
        setNewProgressText,
        deletedPlantProgress,
    } = React.useContext(ProgressContext)

    const onchangeTextProgress = (event)=>{
        setNewProgressText(event.target.value)
    }
    
    const { name } = useParams()
    const post = statePlants.find(item => item.name === name)

    return(
        <div className="modal-progress-images">

            <div className="images">
                <h2>{post.name}</h2>
                {newImage && <img
                src={post.src} // Para poder tener persistencia con las imagenes que se suban desde el pc debo tener un servidor en el cual pueda almacenar la url de la imagen y asi poderla volver a renderizar en la app
                width={300}
                height={300}
                ></img>}
            </div>

            <div className="div-content-progress">
                <h2>{post.week}</h2>
                <img
                src={post.srcWeek}
                width={200}
                height={200}
                ></img>
                <textarea
                className="text-progress-plant"
                value={post.textWeek}
                onChange={onchangeTextProgress}
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