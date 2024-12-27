import React from "react";
import { DiagramProvider } from "./context/DiagramContext";
import DiagramRenderer from "./components/DiagramRenderer";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <DiagramProvider>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <DiagramRenderer />
      </div>
    </DiagramProvider>
  );
};

export default App;
