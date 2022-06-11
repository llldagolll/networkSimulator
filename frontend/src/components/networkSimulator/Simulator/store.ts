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
import { initialNodes, initialEdges, initialLans } from "./initial";

export type CustomNodeType = 'Client' | 'Web' | 'Gateway' | 'Lan'

type RFState = {
  nodes: Node[];
  lans: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (newNode: Node) => void
  setLans: (newLan: Node) => void
  setGroup: (lanId, nodeId) => void
};



const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  lans: initialLans,
  edges: initialEdges,
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
      lans: applyNodeChanges(changes, get().nodes.filter(node => node.type === 'Lan'))
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
  setLans: (newLan: Node) => {
    set({ lans: get().lans.concat(newLan) })
  },
  setGroup: (lanId, nodeId) => {
    get()
      .nodes.
      find(node => node.id == nodeId)
      .parentNode = lanId,
      get()
        .nodes.
        find(node => node.id == nodeId)
        .extent = 'parent'
  }
}))


export default useStore;
