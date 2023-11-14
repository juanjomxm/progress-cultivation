import React from "react"
import { ProgressContext } from "../ContextGlobal/ContextGlobal"
import { Link, useParams } from "react-router-dom"

// En esta funcion es donde se renderiza laas nuevas plantas que agrego en el home
function ContainerImagesPlants(){
    const {
        statePlants
    } = React.useContext(ProgressContext)

    return(
        <div>
            <ul>
                {statePlants.map(post => {
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
    const {
        deletedPlant
    } = React.useContext(ProgressContext)
    return(
        <li className="images">
            <Link to={`/${post.name}`}>{post.name}</Link>
            <img
            src={post.src}
            width={300}
            height={300}
            />
            <button
                onClick={deletedPlant}
            >ELIMINAR</button>
            <button
                onClick={()=>{
                    console.log('Editar')
                }}
            >EDITAR</button>
        </li>
    )
}

// Con esta funcion es donde organizo el componente como deseo que se muestre en la navegacion dinamica
function ImageCultivation(){ 
    const{
        statePlants,
        deletedPlantProgress,
        setNewProgressText
    } = React.useContext(ProgressContext)

    const onchangeTextProgress = (event)=>{
        setNewProgressText(event.target.value)
    }
    
    const { name } = useParams()
    const post = statePlants.find(item => item.name === name)

    return(
        <div className="modal-progress-images">
            <div className="images">
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