import React, { useState } from "react";
import { useDiagram } from "../context/DiagramContext";

const Sidebar = () => {
  const { metadata, setMetadata } = useDiagram();
  const [nodeLabel, setNodeLabel] = useState("");
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");
  const [edgeLabel, setEdgeLabel] = useState("");

  const addNode = () => {
    const newNode = {
      id: `${metadata.nodes.length + 1}`,
      type: "default",
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: nodeLabel }
    };
    setMetadata((prev) => ({
      ...prev,
      nodes: [...prev.nodes, newNode]
    }));
    setNodeLabel("");
  };

  const addEdge = () => {
    const newEdge = {
      id: `e${source}-${target}`,
      source,
      target,
      type: "smoothstep",
      label: edgeLabel
    };
    setMetadata((prev) => ({
      ...prev,
      edges: [...prev.edges, newEdge]
    }));
    setSource("");
    setTarget("");
    setEdgeLabel("");
  };

  return (
    <div style={{ width: 300, padding: 20, background: "#f4f4f4" }}>
      <h4>Add Node</h4>
      <input
        type="text"
        placeholder="Node Label"
        value={nodeLabel}
        onChange={(e) => setNodeLabel(e.target.value)}
      />
      <button onClick={addNode}>Add Node</button>

      <h4>Add Edge</h4>
      <input
        type="text"
        placeholder="Source Node ID"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Target Node ID"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
      <input
        type="text"
        placeholder="Edge Label"
        value={edgeLabel}
        onChange={(e) => setEdgeLabel(e.target.value)}
      />
      <button onClick={addEdge}>Add Edge</button>
    </div>
  );
};

export default Sidebar;
