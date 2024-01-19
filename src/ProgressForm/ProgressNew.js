import React from "react";
import { ProgressContext } from "../ContextGlobal/ContextGlobal";
import { useNavigate, useParams} from "react-router-dom";


function ButtonModalProgress(){
    const navigateProgress = useNavigate()
    const{
    }= React.useContext(ProgressContext)

    const params = useParams()
    const id = Number(params.id)

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
                        navigateProgress(`/form2/${id}`)
                    }}
                >Agregar Progreso</button>
                </div>
            </div>
        </div>
    )
}

function ContainerProgressPlants(){
    const {
        statePlants
    } = React.useContext(ProgressContext)

    return(
        <div>
            <ul>
                {statePlants.map(post => {
                    return <WeekPostWeek
                    key={post.week}
                    post={post}
                    />   
                })}
            </ul>
        </div> 
    )
}

function WeekPostWeek({post}){
    const {
    } = React.useContext(ProgressContext)

    return(
        <div>
            <li className="div-content-progress">
                <h2>{post.week}</h2>
                <img
                src={post.srcWeek}
                width={300}
                height={300}
                />
                <p>{post.textWeek}</p>
            </li>
        </div>
    )
}

// // Esta es la funcion que renderiza el progreso del cultivo semana por semana
function ProgressNew() {
    const navigateProgressEdit = useNavigate()
    const {
      statePlants,
      setNewProgressText,
      deletedProgress
    } = React.useContext(ProgressContext);
  
    const { name } = useParams();
    const post = statePlants.find((item) => item.name === name);
  
    const onChangeTextProgress = (event, index) => {
      const newArray = [...post.textWeek];
      newArray[index] = event.target.value;
      setNewProgressText(newArray);
    };
  
    return (
      <div className="modal-progress-images">
        {post && Array.isArray(post.week) && post.week.map((item, index) => (
        <li key={index} className="div-content-progress">
          <h2>{item}</h2>

          <img
            src={post.srcWeek[index]}
            width={200}
            height={200}
            alt={`Week ${index + 1}`}
          />

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
    );
  } // En esta funcion me apoye en chatGPT ayudandome a encontrar una mejor solucion

export { ButtonModalProgress }
export { ContainerProgressPlants }
export { WeekPostWeek }
export { ProgressNew }
