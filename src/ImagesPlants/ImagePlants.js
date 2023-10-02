import React from "react"
import { ProgressContext } from "../ContextGlobal/ContextGlobal"

function ContainerImagesPlants({children}){
    return(
        children
    )
}

function ImageCultivation({name, genetic, src, progress}){
    const{
        openModal,
        setOpenmodal
    } = React.useContext(ProgressContext)
    // Encontre esta solucion paara darle click a la imagen y se vayan cambiando las imagenes creando el estado en la misma funcion del componente y despues crear un estado derivado
    const [image, setImage] = React.useState(src)
    const [text, setText] = React.useState('')

    // Estado derivado
    const randomImage = ()=>{
        if(image == src){
            setImage(src[1])
            setText(progress[1])
        }else if(image == src[1]){
            setImage(src[2])
            setText(progress[2])
        }else{
            setImage(src)
            setText(progress[0])
        }
    }

    return(
        <div className="images">
            <h2>{name}</h2>
            <p>{genetic}</p>
            <img
            src={image}
            onClick={randomImage} 
            width={300}
            height={300}
            ></img>
            <p>{text}</p>
            <button
            onClick={()=>{
                setOpenmodal(state => !state)
            }}
            >PROGRESO</button>
        </div>
    )
}
export { ContainerImagesPlants }
export { ImageCultivation}