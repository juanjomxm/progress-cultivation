import React from "react";
import axios from "axios";

function ChatBot(){
    const [dataChat, setDataChat] = React.useState(null)
    const [inputChat, setInputChat] = React.useState('')

    // const viewChatBot = axios.create({
    //     baseURL: 'https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com',
    //     headers:{
    //         'content-type': 'application/json',
    //         'X-RapidAPI-Key': '6c1967e5d3msh3257be7d6cac589p1ff725jsnbccdc806cd80',
    //         'X-RapidAPI-Host': 'chatgpt-gpt4-ai-chatbot.p.rapidapi.com'
    //     },
    //     // data:{
    //     //     query: inputChat
    //     // }
    // })

    // const chatBot = async()=>{
    //     const {data,status} = await viewChatBot.post('/ask', { query: inputChat })

    //     try{
    //         if(status === 200, 201){
    //             setDataChat(data.response)
    //             console.log(data.response)
    //         }
    //     }catch(error){
    //         console.warn(error)
    //     }
    // }

    return(
        <div className="data-chatbot">
           <div className="input-and-button-chat">
                <textarea
                className="text-question"
                placeholder="En que te puedo ayudar?"
                value={inputChat}
                onChange={(event)=>{
                    setInputChat(event.target.value)
                }}
                ></textarea>
                
                <button
                // onClick={chatBot}
                >Enviar</button>
           </div>

           <p>Obtener consejos de la IA para el cultivo, poder saber a traves de una imagen que carencias o excesos puede tener la planta o el cultivo y lograr los mejores resultados</p>
           <h3>Este chat se encuentra en actualizacion</h3>

           {dataChat && (
                <p className="text-chatbot">
                    <strong>Respuesta:</strong> {dataChat}
                </p>
            )}
        </div>
    )
}

export { ChatBot }
