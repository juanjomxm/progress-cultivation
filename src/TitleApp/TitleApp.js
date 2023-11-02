const styleTitle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

function TitleCultivation(){
    return(
        <div style={styleTitle}>
            <h1>CULTIVO</h1>
        </div>
    )
}

function TitleWeek(){
    return(
        <div style={styleTitle}>
            <h1>PROGRESO</h1>
        </div>
    )
}
export { TitleCultivation }
export { TitleWeek }