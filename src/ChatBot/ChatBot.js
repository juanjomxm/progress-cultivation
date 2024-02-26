import React from "react";
import axios from "axios";

function ChatBot(){
    const [dataChat, setDataChat] = React.useState(null)
    const [inputChat, setInputChat] = React.useState('')

    const viewChatBot = axios.create({
        baseURL: 'https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com',
        headers:{
            'content-type': 'application/json',
            'X-RapidAPI-Key': '6c1967e5d3msh3257be7d6cac589p1ff725jsnbccdc806cd80',
            'X-RapidAPI-Host': 'chatgpt-gpt4-ai-chatbot.p.rapidapi.com'
        },
        // data:{
        //     query: inputChat
        // }
    })

    const chatBot = async()=>{
        const {data,status} = await viewChatBot.post('/ask', { query: inputChat })

        try{
            if(status === 200, 201){
                setDataChat(data.response)
                console.log(data.response)
            }
        }catch(error){
            console.warn(error)
        }
    }

    return(
        <div className="data-chatbot">
           <div className="input-and-button-chat">
                <input
                placeholder="En que te puedo ayudar?"
                value={inputChat}
                onChange={(event)=>{
                    setInputChat(event.target.value)
                }}
                />
                <button
                onClick={chatBot}
                >Enviar</button>
           </div>

            <textarea
            className="text-chabot"
            onChange={dataChat}
            >
            </textarea>
        </div>
    )
}

export { ChatBot }