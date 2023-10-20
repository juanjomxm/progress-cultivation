import React from "react";

function useLocalStorageProgress(itemNameProgress, initialValueProgress){
    const [itemProgress, setItemProgress] = React.useState(initialValueProgress)
    // const [newImageProgress, setNewImageProgress] = React.useState(initialValueProgress)

    React.useEffect(()=>{
        setTimeout(()=>{
            let localStorageItemProgress = localStorage.getItem(itemNameProgress)
            let parsedItemProgress
            if(localStorageItemProgress){
                parsedItemProgress = JSON.parse(localStorageItemProgress)
                setItemProgress(parsedItemProgress)
                //setNewImageProgress(parsedItemProgress)
            }else{
                localStorage.setItem(localStorageItemProgress, JSON.stringify(initialValueProgress))
                parsedItemProgress = initialValueProgress
            }
        }, 2000)
    }, [])

    const saveItemProgress = (newItemProgress)=>{
        localStorage.setItem(itemNameProgress, JSON.stringify(newItemProgress))
        setItemProgress(newItemProgress)
        //setNewImageProgress(newItemProgress)
    }

    return {
        itemProgress,
        saveItemProgress,
        // newImageProgress,
        // setNewImageProgress,
      }
}
export { useLocalStorageProgress }