import React, { createContext, useContext } from "react";
import { useLocalStorage } from "./useLocalstorage";

const ImageCacheContext = createContext();

export const ImageCacheProvider = ({ children }) => {
  const { item, saveItem, loading, error } = useLocalStorage("imageCache", {});

  return (
    <ImageCacheContext.Provider value={{ imageCache: item, saveImageCache: saveItem, loading, error }}>
      {children}
    </ImageCacheContext.Provider>
  );
};

export const useImageCache = () => {
  return useContext(ImageCacheContext);
};