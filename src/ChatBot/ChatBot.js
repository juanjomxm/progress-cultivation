import React from "react";
import axios from "axios";

// API key openia = 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
const apiKey = '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'
const textChat = axios.create({
    baseURL: 'https://api.openai.com/v1/chat/completions',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
    }
})

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
                console.log(data)
                // setGeneratedText()
            }
        }catch(error){
            console.warn(error)
        }
    }

    return(
        <div>
            <h1>Chat con ia</h1>

            <input
            value={inputChat}
            onChange={(event)=>{
                setInputChat(event.target.value)
            }}
            />
            <button
            onClick={viewChatBot}
            >Enviar</button>
            {/* <p>{generatedText}</p> */}
        </div>
    )
}

export { ChatBot }