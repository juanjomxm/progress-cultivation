import React from "react"
import { ProgressProvider } from "../ContextGlobal/ContextGlobal";
import { Components } from "./Components";

function App() {
  return (
      <ProgressProvider>
          <Components/>
      </ProgressProvider>
  );
}
export { App }
