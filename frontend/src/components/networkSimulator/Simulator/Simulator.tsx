import { useRef, useState, useCallback, useEffect } from "react";
import ReactFlow, { useNodesState, useEdgesState, Edge, Connection, addEdge, ReactFlowProvider, Controls } from "react-flow-renderer";
import { ClientNode, GatewayNode, LanNode, WebNode } from "./CustomNodes/CustomNodes";
import Sidebar from "../Sidebar/Sidebar";
import styles from './Simulator.module.css'
import useStore from "./store";

const nodeTypes = {
  Client: ClientNode,
  Gateway: GatewayNode,
  Lan: LanNode,
  Web: WebNode,
}




let id = 0;
const generateId = () => `dndnode ${id++}`;

type NewNode = {
  id: any,
  type: any,
  position: any,
  data: any
  style?: any,
}


const Simulator = () => {

  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null)
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setNodes,
    showAllNodes,
    getNodesOnNodeType
  } = useStore()


  // const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)), [])

  const onDragOver = useCallback((event: { preventDefault: () => void; dataTransfer: { dropEffect: string; }; }) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const onDrop: any = useCallback(
    (
      event: {
        preventDefault: () => void; dataTransfer: { getData: (arg0: string) => any; }; clientX: number; clientY: number;
      },
    ) => {
      event.preventDefault()
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
      const type = event.dataTransfer.getData('application/reactflow')

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })

      const newNode: NewNode = {
        id: generateId(),
        type,
        data: {
          label: `${type}`,
          nodeType: `${type}`,
          nodeId: `${id} ${type}`
        },
        position,
      }

      //@ts-ignore
      setNodes(newNode)
    },
    [reactFlowInstance]
  )


  return (
    <>
      <ReactFlowProvider>
        <div className={styles.reactflow} ref={reactFlowWrapper} >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
        <div className={styles.sideBar}>
          <Sidebar />
        </div>
      </ReactFlowProvider>
    </>
  )
}

export default Simulator;
