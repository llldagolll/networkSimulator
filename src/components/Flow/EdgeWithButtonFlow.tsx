import React, {useCallback} from "react";
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    MiniMap,
    Controls,
    Background,
    Connection,
    Edge,
    applyEdgeChanges, getConnectedEdges, isEdge
} from "react-flow-renderer";
import ButtonEdge from "./atom/EdgeWithButtonFlow/ButtonEdge";
import {log} from "util";


const initialNodes = [
    {
        id: 'ewb-1',
        type: 'input',
        data: {label: 'Input 1'},
        position: {x: 250, y: 0},
    },
    {id: 'ewb-2', data: {label: 'Node 2'}, position: {x: 250, y: 300}},
];

const initialEdges = [
    {
        id: 'edge-1-2',
        source: 'ewb-1',
        target: 'ewb-2',
        type: 'buttonedge',
    },
];

const edgeTypes = {
    buttonedge: ButtonEdge,
};

const onEdgeContextMenu = (_:React.MouseEvent, edge:Edge) => console.log(`edge context menu ${edge}`)

const EdgeWithButtonFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
    const onConnect = (params: Edge<any> | Connection) => setEdges((eds)=>addEdge({...params, type:'buttonedge'}, eds))
    const addNode = useCallback(() => {
        setNodes((nodes:any) => {
            console.log(nodes)
            return [
                ...nodes,
                {
                    id: Math.random(),
                    position: { x: 100, y: 50},
                    data: {label: "EC2"},
                }
            ]
        })
    },[])



    return (
        <div style={{ height: 500 }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                snapToGrid={true}
                // @ts-ignore
                edgeTypes={edgeTypes}
                fitView
                attributionPosition="top-right"
                onEdgeContextMenu={onEdgeContextMenu}
            >
                <MiniMap/>
                <Controls/>
                <Background/>
            </ReactFlow>

            <button onClick={addNode}>add EC2</button>
        </div>
    )
}

export default EdgeWithButtonFlow