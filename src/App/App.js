import React from "react"
import { ProgressProvider } from "../ContextGlobal/ContextGlobal";
import { CultivationProgressProvider } from "../ContextProgressPlant/ContextProgress";
import { Components } from "./Components";

function App() {
  return (
    <React.Fragment>
      <ProgressProvider>
      <CultivationProgressProvider>
        <Components/>
      </CultivationProgressProvider>
      </ProgressProvider>
   </React.Fragment>
  );
}
export { App }
