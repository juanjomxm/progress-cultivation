import React from "react";
import axios from "axios";

function Gpt(){
    const[dataGpt, setDataGpt] = React.useState([])
    const [inputGpt, setInputGpt] = React.useState('')

    const viewGpt = axios.create({
        baseURL: 'https://chatgpt-api8.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '6c1967e5d3msh3257be7d6cac589p1ff725jsnbccdc806cd80',
            'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
          },
        data: {
            messages: [
                {
                    role: 'system',
                    content: 'Hello! I\'m an AI assistant bot based on ChatGPT 3. How may I help you?'
                },
                {
                    role: 'user',
                    content: inputGpt // Este gpt muestra el text en null, ademas no me permite hacer varios llamados
                }
            ]
        }
    })

    const gpt = async()=>{
        const {data, status} = await viewGpt.post()
        try{
            if(status === 200, 201){
                setDataGpt(data.text)
                console.log(data.data.text)
            }
        }catch(error){
            console.warn(error)
        }
    }

    return(
        <div>
            <input
            placeholder="gpt"
            value={inputGpt}
            onChange={(event)=>{
                setInputGpt(event.target.value)
            }}
            />
            <button
            onClick={gpt}
            >Gpt</button>

            {/* <article>{dataGpt}</article> */}
        </div>
    )
}

export { Gpt}