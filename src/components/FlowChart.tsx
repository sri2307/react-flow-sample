import React, { useCallback } from 'react';
import { 
  ReactFlow, 
  Background, 
  MiniMap, 
  Controls,
  useNodesState, 
  useEdgesState, 
  addEdge,
  Edge,
  Connection,
  MarkerType,
  Node,
  NodeTypes
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { LibraryNode, AuthNode, HostNode, ModulesNode, AppNode } from './CustomNodes';
import DashedEdge from './DashEdge';
import { Box } from '@mui/material';

// Node types definition
const nodeTypes: NodeTypes = {
  libraryNode: LibraryNode,
  authNode: AuthNode,
  hostNode: HostNode,
  modulesNode: ModulesNode,
  appNode: AppNode,
};

// Edge types definition
const edgeTypes = {
  dashed: DashedEdge,
};

interface NodeData {
  label: string;
  icon?: string;
  sublabel?: string;
  items?: Array<{icon?: string, label: string}>;
  color?: string;
}

// Initial nodes
const initialNodes: Node[] = [
  {
    id: 'title',
    type: 'default',
    data: { label: 'Microfrontend Architecture' },
    position: { x: 350, y: 0 },
    style: { 
      border: 'none', 
      background: 'transparent', 
      width: 300, 
      fontSize: '24px', 
      fontWeight: 'bold',
      textAlign: 'center' as const
    },
  },
  {
    id: 'componentLibrary',
    type: 'libraryNode',
    data: { label: 'Component Library' },
    position: { x: 0, y: 120 },
  },
  {
    id: 'hostApp',
    type: 'hostNode',
    data: { label: 'Host Application' },
    position: { x: 350, y: 200 },
  },
  {
    id: 'app1',
    type: 'appNode',
    data: { label: 'Application 1', appName: 'APP 1' },
    position: { x: 750, y: 120 },
  },
  {
    id: 'app2',
    type: 'appNode',
    data: { label: 'Application 2', appName: 'APP 2' },
    position: { x: 750, y: 300 },
  },
  {
    id: 'authModule',
    type: 'authNode',
    data: { label: 'Auth Module' },
    position: { x: 0, y: 500 },
  },
];

// Initial edges with custom types and animated flows
const initialEdges: Edge[] = [
  {
    id: 'e1',
    source: 'componentLibrary',
    target: 'hostApp',
    type: 'dashed',
    data: { label: 'shared components' },
    labelBgStyle: { fill: '#ffffff' },
    labelStyle: { fontSize: 12 },
    style: { strokeDasharray: '5,5', stroke: '#888' },
  },
  {
    id: 'e2a',
    source: 'componentLibrary',
    target: 'app1',
    type: 'dashed',
    data: { label: 'shared components' },
    animated: true,
    labelBgStyle: { fill: '#ffffff' },
    labelStyle: { fontSize: 12 },
    style: { strokeDasharray: '5,5', stroke: '#888' },
  },
  {
    id: 'e2b',
    source: 'componentLibrary',
    target: 'app2',
    type: 'dashed',
    data: { label: 'shared components' },
    animated: true,
    labelBgStyle: { fill: '#ffffff' },
    labelStyle: { fontSize: 12 },
    style: { strokeDasharray: '5,5', stroke: '#888' },
  },
  {
    id: 'e3',
    source: 'authModule',
    target: 'hostApp',
    type: 'dashed',
    data: { label: 'MSAL instance' },
    labelBgStyle: { fill: '#ffffff' },
    labelStyle: { fontSize: 12 },
    style: { strokeDasharray: '5,5', stroke: '#888' },
  },
  {
    id: 'e4a',
    source: 'authModule',
    target: 'app1',
    type: 'dashed',
    data: { label: 'MSAL instance' },
    animated: true,
    labelBgStyle: { fill: '#ffffff' },
    labelStyle: { fontSize: 12 },
    style: { strokeDasharray: '5,5', stroke: '#888' },
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e4b',
    source: 'authModule',
    target: 'app2',
    type: 'dashed',
    data: { label: 'MSAL instance' },
    animated: true,
    labelBgStyle: { fill: '#ffffff' },
    labelStyle: { fontSize: 12 },
    style: { strokeDasharray: '5,5', stroke: '#888' },
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e5a',
    source: 'hostApp',
    target: 'app1',
    animated: true,
    data: { label: 'route and lazy-load' },
    labelBgStyle: { fill: '#ffffff' },
    labelStyle: { fontSize: 12 },
    style: { stroke: '#333' },
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'e5b',
    source: 'hostApp',
    target: 'app2',
    animated: true,
    data: { label: 'route and lazy-load' },
    labelBgStyle: { fill: '#ffffff' },
    labelStyle: { fontSize: 12 },
    style: { stroke: '#333' },
    markerEnd: { type: MarkerType.Arrow },
  },
//   {
//     id: 'e6a',
//     source: 'app1',
//     target: 'hostApp',
//     animated: true,
//     data: { label: 'data flow' },
//     labelBgStyle: { fill: '#ffffff' },
//     labelStyle: { fontSize: 12 },
//     style: { stroke: '#4caf50' },
//     markerEnd: { type: MarkerType.Arrow },
//   },
//   {
//     id: 'e6b',
//     source: 'app2',
//     target: 'hostApp',
//     animated: true,
//     data: { label: 'data flow' },
//     labelBgStyle: { fill: '#ffffff' },
//     labelStyle: { fontSize: 12 },
//     style: { stroke: '#4caf50' },
//     markerEnd: { type: MarkerType.Arrow },
//   },
//   {
//     id: 'e7',
//     source: 'app1',
//     target: 'app2',
//     animated: true,
//     data: { label: 'event bus' },
//     labelBgStyle: { fill: '#ffffff' },
//     labelStyle: { fontSize: 12 },
//     style: { stroke: '#ff9800' },
//     markerEnd: { type: MarkerType.Arrow },
//   },
];

export default function MicrofrontendFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <Box sx={{ 
      width: '100%', 
      height: '700px', 
      bgcolor: '#f5f5f5', 
      borderRadius: '8px', 
      border: '1px solid #e0e0e0' 
    }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        proOptions={{ hideAttribution: true }}
        fitView
        fitViewOptions={{ padding: 0.2 }}
      >
        <Background color="#ccc" gap={16} />
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            switch (node.type) {
              case 'libraryNode':
                return '#fef3c7';
              case 'hostNode':
                return '#fef3c7';
              case 'authNode':
                return '#fef3c7';
              case 'modulesNode':
                return '#fef3c7';
              case 'appNode':
                return '#fef3c7';
              default:
                return '#ffffff';
            }
          }}
          maskColor="rgba(240, 240, 240, 0.4)"
        />
      </ReactFlow>
    </Box>
  );
}