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

function ImageCultivation({name, src, genetic}){
    return(
        <div style={styleImagesPlants}>
            <h2>{name}</h2>
            <p>{genetic}</p>
            <img
            src={src}
            onClick={()=>{
                console.log('click')
            }} 
            width={300}
            height={300}
            ></img>
        </div>
    )
}
export { ContainerImagesPlants }
export { ImageCultivation}