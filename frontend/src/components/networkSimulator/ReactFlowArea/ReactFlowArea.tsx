import { useRef, useState, useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, Edge, Connection, addEdge, ReactFlowProvider, Controls } from "react-flow-renderer";
import { ClientNode, GatewayNode, LanNode, WebNode } from "./CustomNodes/CustomNodes";
import Sidebar from "../Sidebar/Sidebar";
import styles from './ReactFlowArea.module.css';

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



const ReactFlowArea = () => {


  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [reactFlowInstance, setReactFlowInstance] = useState(null)
  const [show, setShow] = useState(false)
  const openModal = () => {
    setShow(true)
  }

  // useEffect(() => {
  //   const lan = nodes.filter(node => node.type == 'lan')
  //   console.log(lan);
  // })


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
      console.log(event.dataTransfer);



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


  const onDoubleClick: any = useCallback(
    (
      event: any
      ,
    ) => {
      event.preventDefault()
      console.log(document.contentType);

      // const type = event.target.innerText
      // alert(`type: ${type}`);
    },
    []
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
            onDoubleClick={onDoubleClick}
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

export default ReactFlowArea
