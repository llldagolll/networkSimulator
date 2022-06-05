import {
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  NodeChange,
  applyNodeChanges,
  EdgeChange,
  addEdge,
  applyEdgeChanges,
  Connection,
} from "react-flow-renderer";
import create from "zustand";
import initialEdges from "./initialEdges";
import initialNodes from "./initialNodes";

export type CustomNodeType = 'Client' | 'Web' | 'Gateway' | 'Lan'

type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (newNode: Node) => void
  showAllNodes: () => void,
  getNodesOnNodeType: (nodeType: CustomNodeType) => void
};



const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  setNodes: (newNode: Node) => {
    set({ nodes: get().nodes.concat(newNode) })
  },
  showAllNodes: () => {
    get().nodes
  },
  getNodesOnNodeType: (nodeType) => {
    get().nodes.filter((n) => n.type === nodeType)
  },
  debugShowAllNodes: () => {
    console.log(
      JSON.stringify(get().nodes)
    );
  },
  debugGetNodesOnNodeType: (nodeType) => {
    console.log(
      JSON.stringify(get().nodes.filter((n) => n.type === nodeType))
    );
  },
}));

export default useStore;
