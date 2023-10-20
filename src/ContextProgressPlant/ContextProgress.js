import React from "react";
import { useLocalStorageProgress } from "./useLocalStorageProgress";

const CultivationProgress = React.createContext()

function CultivationProgressProvider({children}){
    const {
        itemProgress,
        saveItemProgress,
        //newImageProgress,
        setNewImageProgress
    } = useLocalStorageProgress('cultivation-progress', [])

    // const addPlantProgress = (week) =>{
    //     const newPlantsProgress = [...itemProgress]
    //     newPlantsProgress.push({
    //       week,
    //       //src: newImageProgress.src,
    //       textWeek: ['']
    //     })
    //     saveItemProgress(newPlantsProgress) // Tengo que organizar esta funcion para que se agregue normal, me esta dando error
    // }

    return(
        <CultivationProgress.Provider value={{
            itemProgress,
            saveItemProgress,
            //newImageProgress,
            setNewImageProgress,
            //addPlantProgress
        }}>
            {children}
        </CultivationProgress.Provider>
    )
}
export { CultivationProgress, CultivationProgressProvider}

