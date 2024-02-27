import React from "react";
import axios from "axios";

function Climate(){
    const [dataClimate, setDataClimate] = React.useState(null);
    const [inputCountry, setInputCountry] = React.useState('');
    const [countries, setCountries] = React.useState([]);
    const [inputRegion, setInputRegion] = React.useState('');
    const [inputCity, setInputCity] = React.useState('');

   React.useEffect(() => {
        // Obtener la lista de países al cargar el componente
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                const sortedCountries = response.data.sort((a, b) => {
                    const nameA = a.name.common.toLowerCase();
                    const nameB = b.name.common.toLowerCase();
                    return nameA.localeCompare(nameB);
                })
                setCountries(sortedCountries)
            })
            .catch(error => {
                console.error('Error al obtener la lista de países', error);
            });
    }, []);

    const viewClimateHome = axios.create({
        baseURL: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {
            'q': `${'Colombia'},${'Antioquia'},${'Bello'}`
        },
        headers: {
            'X-RapidAPI-Key': '6c1967e5d3msh3257be7d6cac589p1ff725jsnbccdc806cd80',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    })

    React.useEffect(()=>{
        const climateHome = async()=>{
            const {data, status} = await viewClimateHome.get()
            try{
                if(status === 200 || status === 201){
                    setDataClimate(data)
                }
            }catch(error){
                console.warn(error)
            }
        }
        climateHome()
    }, [])

    const viewClimate = axios.create({
        baseURL: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {
            'q': `${inputCountry},${inputRegion},${inputCity}`
        },
        headers: {
            'X-RapidAPI-Key': '6c1967e5d3msh3257be7d6cac589p1ff725jsnbccdc806cd80',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    })

    const climate = async()=>{
        const {data, status} = await viewClimate.get()
        try{
            if(status === 200 || status === 201){
                setDataClimate(data)
            }
        }catch(error){
            console.warn(error)
        }
    }

    return(
        <div className="container-climate">
            <div className="data-climate">
            <h2>Clima</h2>
                <div className="select-climate">
                    <select
                        value={inputCountry}
                        onChange={(event) => {
                            setInputCountry(event.target.value);
                            setInputRegion('');
                            setInputCity('')
                        }}
                    >
                        <option value="">Seleccione un país</option>
                        {countries.map(country => (
                            <option key={country.cca3} 
                                value={country.cca3}
                            >
                            {country.name.common}
                            </option>
                        ))}
                    </select>

                    <input
                    placeholder="Region"
                    value={inputRegion}
                    onChange={(event) => {
                        setInputRegion(event.target.value);
                    }}
                    />

                    <input
                    placeholder="Ciudad"
                    value={inputCity}
                    onChange={(event) =>{
                        setInputCity(event.target.value)
                    }}
                    />

                    <button onClick={climate}>Clima</button>
                </div>
                
                {dataClimate && (
                    <div className="info-climate">
                        <h3>{dataClimate.location.name}, {dataClimate.location.region}</h3>
                        
                        <div className="climate">
                            <p>Temperatura: {Math.floor(dataClimate.current.temp_c)}°c</p>
                            <p>Sensacion Termica: {Math.floor(dataClimate.current.feelslike_c)}°c</p>
                            <p>Humedad: {dataClimate.current.humidity} %</p>
                            <p>Viento: {dataClimate.current.wind_kph} Km/h</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export { Climate }