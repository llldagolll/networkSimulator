import React, { useCallback,  useRef, useState} from "react";
import ReactFlow,{
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls,
    Connection,
    Edge,
    Node
} from "react-flow-renderer";
import Sidebar from "./SideBar";
import './DnDFlow.css'
import './atom/DnDFlow/text-updater-node.css'
import {initialNodes, nodeTypes} from "./atom/Nodes";

let id = 0;
const getId = () => `dndnode ${id++}`;
const getNodeName = (type: string | undefined) => {
    if (type === "default") {
        var labelName =  "Gateway"
    } else if (type === "input") {
        var labelName =  "Web Server"
    } else if(type==="output") {
        var labelName = "Client"
    }else {
        var labelName="LAN"
    }
    return labelName
}

const getNewNode = ({type, position,nodeName}:{type:any, position:any, nodeName:any}) => {
    if (type === 'group') {
        var newNode:Node = {
            id: getId(),
            type,
            position,
            data: {label: `${nodeName} `},
            style: {
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                width: 200,
                height: 200
            },
        }
    }else{
        var newNode:Node = {
            id: getId(),
            type,
            position,
            data: {label: `${nodeName} `},
        }
    }
    return newNode
}



export const DndFlow = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState([])
    const [reactFlowInstance, setReactFlowInstance] = useState(null)

    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)),[])

    const onDragOver = useCallback((event: { preventDefault: () => void; dataTransfer: { dropEffect: string; }; }) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
    }, [])

    const onDrop:any = useCallback(
        (
            event: {
                preventDefault: () => void; dataTransfer: { getData: (arg0: string) => any; }; clientX: number; clientY: number;
            },
            ) => {
            event.preventDefault()
            // @ts-ignore
            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
            const type = event.dataTransfer.getData('application/reactflow')

            const nodeName = getNodeName(type)

            if (typeof type === 'undefined' || !type) {
                return;
            }

            //@ts-ignore
            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            })

            const newNode = getNewNode({type, position, nodeName})

            setNodes((nds) => nds.concat(newNode))
        },
        [reactFlowInstance]
    )

    return (
        <div className="dndflow" >
            <ReactFlowProvider>
                <div className="reactflow-wrapper" ref={reactFlowWrapper} style={{height: 500}}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        //@ts-ignore
                        nodeTypes={nodeTypes}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        // @ts-ignore
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        fitView
                    >
                        <Controls/>
                    </ReactFlow>
                </div>
                <Sidebar />

            </ReactFlowProvider>
        </div>
    )

}