function ContainerImagesPlants({children}){
    return(
        children
    )
}

function ImageCultivation({name, src, genetic}){
    return(
        <div>
            <h2>{name}</h2>
            <img
            src={src} 
            width={300}
            height={300}
            ></img>
            <p>{genetic}</p>
        </div>
    )
}
export { ContainerImagesPlants }
export { ImageCultivation}