import React from "react";
import ReactDOM from "react-dom";
import { useLocalStorageProgress } from "./useLocalStorageProgress";

const CultivationProgress = React.createContext()

function CultivationProgressProvider({children}){
    const {
        itemProgress,
        saveItemProgress,
        newImageProgress,
        setNewImageProgress,
        openModalProgress, 
        setOpenmodalProgress
    } = useLocalStorageProgress('cultivation-progress', [])
    // const [openModalProgress, setOpenmodalProgress] = React.useState([])

    const viewWeek = itemProgress.filter(item => {
        return  `${item.week}${item.src}${item.textWeek}`
    })

    const addPlantProgress = (week, textWeek) =>{
        const newPlantsProgress = [...itemProgress]
        newPlantsProgress.push({
          week,
          src: newImageProgress.src,
          textWeek,
        })
        saveItemProgress(newPlantsProgress)
    }

    const deletedPlantProgress = (week) =>{
        const newPlantsProgress = [...itemProgress]
        const plantIndexProgress = newPlantsProgress.findIndex(item => item.week === week)
        newPlantsProgress.splice(plantIndexProgress, 1)
        saveItemProgress(newPlantsProgress)
      }

      const createPortal = ()=>{
        const emptyPortal = document.createElement('div')
        document.body.appendChild(emptyPortal)
          const newPortal =  [emptyPortal]
          ReactDOM.createPortal(
          <h2>
            {/* {emptyPortal} */}
            Portal Nuevo
          </h2>,
          document.getElementById('modal-progress')
          )
          setOpenmodalProgress(newPortal)// Creo que esto debe ir en el contexto del progreso
      }

    return(
        <CultivationProgress.Provider value={{
            itemProgress,
            saveItemProgress,
            viewWeek,
            newImageProgress,
            setNewImageProgress,
            addPlantProgress,
            deletedPlantProgress,
            openModalProgress, 
            setOpenmodalProgress,
            createPortal
        }}>
            {children}
        </CultivationProgress.Provider>
    )
}
export { CultivationProgress, CultivationProgressProvider}

