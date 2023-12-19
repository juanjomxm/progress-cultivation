import React from "react"
import { ProgressProvider } from "../ContextGlobal/ContextGlobal";
import { ImageCacheProvider } from "../ContextGlobal/ContextImagesCache";
import { Components } from "./Components";

function App() {
  return (
      <ProgressProvider>
        <ImageCacheProvider>
          <Components/>
        </ImageCacheProvider>
      </ProgressProvider>
  );
}
export { App }
