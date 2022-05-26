import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Connection,
  Edge
} from "react-flow-renderer";
import NodeForm from "./atom/DnDFlow/Form";
import { ClientNode, GatewayNode, LanNode, TextUpdaterNode, WebNode } from "./atom/DnDFlow/Nodes";

import Sidebar from "./Sidebar";

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  client: ClientNode,
  gateway: GatewayNode,
  lan: LanNode,
  web: WebNode,
}



const initialNodes = [
  {
    id: '1',
    type: 'textUpdater',
    data: { value: 123 },
    position: { x: 250, y: 5 },
  },
]

let id = 0;
const getId = () => `dndnode ${id++}`;

type NewNode = {
  id: any,
  type: any,
  position: any,
  data: any,
  style?: any,
}

export const DndFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [reactFlowInstance, setReactFlowInstance] = useState(null)

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
      // @ts-ignore
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
      const type = event.dataTransfer.getData('application/reactflow')
      if (type === "default") {
        var labelName = "Gateway"
      } else if (type === "input") {
        var labelName = "Web Server"
      } else if (type === "output") {
        var labelName = "Client"
      } else {
        var labelName = "LAN"
      }

      if (typeof type === 'undefined' || !type) {
        return;
      }

      //@ts-ignore
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      })
      if (type === 'group') {
        var newNode: NewNode = {
          id: getId(),
          type,
          position,
          data: { label: `${labelName} ` },
          style: {
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            width: 200,
            height: 200
          },
        }
      } else {
        var newNode: NewNode = {
          id: getId(),
          type,
          position,
          data: { label: `${labelName} ` },
        }
      }
      setNodes((nds) => nds.concat(newNode))
    },
    [reactFlowInstance]
  )

  return (
    <div className="dndflow" >
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper} style={{ height: 500 }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            // @ts-ignore
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
      <NodeForm />
    </div>
  )

}
