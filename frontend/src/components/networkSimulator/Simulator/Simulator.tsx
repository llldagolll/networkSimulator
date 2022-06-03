import { useRef, useState, useCallback, useEffect } from "react";
import ReactFlow, { useNodesState, useEdgesState, Edge, Connection, addEdge, ReactFlowProvider, Controls } from "react-flow-renderer";
import { ClientNode, GatewayNode, LanNode, WebNode } from "./CustomNodes/CustomNodes";
import Sidebar from "../Sidebar/Sidebar";
import create from "zustand";
import styles from './Simulator.module.css'

const nodeTypes = {
  Client: ClientNode,
  Gateway: GatewayNode,
  Lan: LanNode,
  Web: WebNode,
}



const initialNodes = [
  {
    id: '1',
    type: 'Client',
    position: { x: 250, y: 5 },
  },
]

let id = 0;
const getId = () => `dndnode ${id++}`;

type NewNode = {
  id: any,
  type: any,
  position: any,
  data?: any
  style?: any,
}


// const useStore = create((set) => ({
//   count: 1,
//   inc: () => set((state: any) => ({ count: state.count + 1 })),
//   dec: () => set((state: any) => ({ count: state.count - 1 }))
// }))

// const Counter = () => {
//   const { count, inc, dec } = useStore()
//   return (
//     <div className="counter">
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//       <button onClick={dec}>one down</button>
//     </div>
//   )
// }


// nodes.filter(n => n.type === 'square')
//   .map(n => console.log(n))



const useStore = create((set) => ({
  storeNodes: [],
  add: (obj: Object) => set((state: any) => ({ ...state.storeNodes, obj }))
}))


const Simulator = () => {

  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [reactFlowInstance, setReactFlowInstance] = useState(null)

  const { storeNodes, add } = useStore()

  // useEffect(() => {
  //   console.log(nodes);
  // }, [nodes])

  const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)), [])

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

      //idとtypeをstoreNodesに格納する




      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })

      const newNode: NewNode = {
        id: getId(),
        type,
        position,
      }

      setNodes((nds) => nds.concat(newNode))
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
