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

function ImageCultivation({name, genetic, src}){
    const [image, setImage] = React.useState(src)
    const randomImage = ()=>{
        if(image == src){
            setImage(src[1])
        }else{
            setImage(src)
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
        </div>
    )
}
export { ContainerImagesPlants }
export { ImageCultivation}