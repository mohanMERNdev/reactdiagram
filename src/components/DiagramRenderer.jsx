import React, { useCallback } from "react";
import ReactFlow, { addEdge, Background, Controls, MiniMap } from "react-flow-renderer";
import { useDiagram } from "../context/DiagramContext";

const DiagramRenderer = () => {
  const { metadata, setMetadata } = useDiagram();
  const elements = [...metadata.nodes, ...metadata.edges];

  const onConnect = useCallback(
    (params) => {
      const newEdge = { id: `e${params.source}-${params.target}`, ...params };
      setMetadata((prev) => ({
        ...prev,
        edges: [...prev.edges, newEdge]
      }));
    },
    [setMetadata]
  );

  const onElementRemove = useCallback(
    (elementsToRemove) => {
      setMetadata((prev) => ({
        nodes: prev.nodes.filter((node) => !elementsToRemove.some((e) => e.id === node.id)),
        edges: prev.edges.filter((edge) => !elementsToRemove.some((e) => e.id === edge.id))
      }));
    },
    [setMetadata]
  );

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReactFlow
        elements={elements}
        onConnect={onConnect}
        onElementsRemove={onElementRemove}
        deleteKeyCode={46}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default DiagramRenderer;
