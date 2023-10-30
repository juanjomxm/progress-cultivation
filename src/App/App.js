import React from "react"
import { ProgressProvider } from "../ContextGlobal/ContextGlobal";
import { Components } from "./Components";
import { ComponentsWeek } from "./Components";

function App() {
  return (
      <ProgressProvider>
        <Components/>
        <ComponentsWeek/>
      </ProgressProvider>
  );
}
export { App }
