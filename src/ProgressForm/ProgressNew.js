import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { Link, useNavigate } from "react-router-dom";

function ButtonModalProgress(){
    const navigateProgress = useNavigate()
    const{
    }= React.useContext(ProgressContext)

    return(
        <div>
            <div className="container-buttons-progress">
                <button
                onClick={()=>{
                    navigateProgress('/')
                }}
                >Home</button>

                <div className="container-button-progress">
                <button className="button-progress-week"
                    onClick={()=>{
                        navigateProgress(`/form2/id`)
                    }}
                >+</button>
                </div>
            </div>
        </div>
    )
}

function ContainerProgressPlants(){
    const {
        plantToPlant
    } = React.useContext(ProgressContext)

    return(
        <div>
            <ul>
                {plantToPlant.map(post => {
                    return <WeekPostWeek
                    key={post.week}
                    postWeek={post}
                    />   
                })}
            </ul>
        </div> 
    )
}

function WeekPostWeek({postWeek}){
    const {
    } = React.useContext(ProgressContext)
    return(
        <div>
            <li className="div-content-progress"> 
                <Link to={`/${postWeek.week}`}>{postWeek.week}</Link>
                <img
                src={postWeek.srcWeek}
                width={300}
                height={300}
                />
                <p>{postWeek.textWeek}</p>
            </li>
        </div>
    )
}

// // Esta es la funcion que renderiza el progreso del cultivo semana por semana
function ProgressNew({week, srcWeek, textWeek}){ 
    const {
        deletedPlantProgress,
        setNewProgressText,
    } = React.useContext(ProgressContext)

    const onchangeTextProgress = (event)=>{
        setNewProgressText(event.target.value)
    }

        return(
            <div className="modal-progress-images">
                <div className="div-content-progress">
                    <h2>{week}</h2>
                    <img
                    src={srcWeek}
                    width={200}
                    height={200}
                    ></img>
                    <textarea
                    className="text-progress-plant"
                    value={textWeek}
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
export { ContainerProgressPlants }
export { ProgressNew }
export { ButtonModalProgress }
export { WeekPostWeek }
