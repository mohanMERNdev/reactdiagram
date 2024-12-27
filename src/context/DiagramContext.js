import React, { createContext, useContext, useState } from "react";

const DiagramContext = createContext();

export const DiagramProvider = ({ children }) => {
  const [metadata, setMetadata] = useState({
    nodes: [],
    edges: []
  });

  return (
    <DiagramContext.Provider value={{ metadata, setMetadata }}>
      {children}
    </DiagramContext.Provider>
  );
};

export const useDiagram = () => useContext(DiagramContext);
