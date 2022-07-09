import { useRef, useState, useCallback } from 'react';
import ReactFlow, { ReactFlowProvider, Controls } from 'react-flow-renderer';
import useGenerateFormValue from 'lib/generateFormValue';
import styles from './Simulator.module.css'
import { CustomNodeTypes } from './CustomNodeTypes';
import useStore from '@/store';
import { generateNewNode } from 'lib/generateNewNode';



let id = 0;
const generateId = () => `${id++}`;

const Simulator = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setNodes,
    setLans,
  } = useStore();

  const onDragOver = useCallback((event: {
    preventDefault: () => void; dataTransfer: { dropEffect: string; };
  }) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move'
  }, []);

  const onDrop: any = useCallback(
    (
      event: {
        preventDefault: () => void; dataTransfer: { getData: (arg0: string) => any; }; clientX: number; clientY: number;
      },
    ) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const id = generateId()
      const newNode = generateNewNode({ id, type, position })
      const defaultFormValue = useGenerateFormValue({ id, type })

      sessionStorage.setItem(`${id}`, JSON.stringify(defaultFormValue))

      if (type === 'Lan') {
        setLans(newNode)
      }
      setNodes(newNode)
    },
    [reactFlowInstance]
  )


  return (
    <>
      <ReactFlowProvider>
        <div className={styles.simulator} ref={reactFlowWrapper} >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={CustomNodeTypes}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </>
  )
}

export default Simulator;
