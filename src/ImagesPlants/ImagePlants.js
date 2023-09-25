import React from "react"

const styleImagesPlants = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

function ContainerImagesPlants({children}){
    return(
        children
    )
}

function ImageCultivation({name, genetic, src, progress}){
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
        <div style={styleImagesPlants}>
            <h2>{name}</h2>
            <p>{genetic}</p>
            <img
            src={image}
            onClick={randomImage} 
            width={300}
            height={300}
            ></img>
            <p>{text}</p>
            <button>PROGRESO</button>
        </div>
    )
}
export { ContainerImagesPlants }
export { ImageCultivation}