import React from "react";
import axios from "axios";
import { config } from "../config";

const apiKey = config.apiKeyOpenIA
const textChat = axios.create({
    baseURL: 'https://api.openai.com/v1/chat/completions',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
    }
})

// Estoy implementando la api de openia para generar un chat que me ayude a llevar un buen cultivo. Como apenas esta en etapa de desarrollo no estoy pagando la suscripcion a openia por ende los llamados que se pueden hacer son como maximo dos o tres, mas adelante cuando la app este en una etapa de desarrolo avanzado, valdra la pena la suscripcion a openia
function ChatBot(){
    const [inputChat, setInputChat] = React.useState('')
    const [generatedText, setGeneratedText] = React.useState('')

    const requestBody = {
        messages: [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": inputChat},
        ],
        model: "gpt-3.5-turbo",  // Cambiado de "gpt-3.5-turbo"
    }

    const viewChatBot = async()=>{
        try{
            const {data, status} = await textChat.post('', requestBody)

            if(status === 200 || status === 201){
                console.log(data.choices[0].text.trim())
                setGeneratedText(data.choices[0].text.trim())
            }
        }catch(error){
            console.warn(error)
        }
    }

    return(
        <div className="container-chat-bot">
            <h1>Chat con ia</h1>

            <div>
                <input
                placeholder="Chat con IA"
                value={inputChat}
                onChange={(event)=>{
                    setInputChat(event.target.value)
                }}
                />
                <button
                onClick={viewChatBot}
                >Enviar</button>
            </div>

            {/* <textarea
            onChange={generatedText}
            ></textarea> */}
        </div>
    )
}

export { ChatBot }