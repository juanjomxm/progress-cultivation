import React from "react"
import { ProgressProvider } from "../ContextGlobal/ContextGlobal";
import { Components } from "./Components";

function App() {
  return (
    <React.Fragment>
      <ProgressProvider>
          <Components/>
      </ProgressProvider>
   </React.Fragment>
  );
}
export { App }
