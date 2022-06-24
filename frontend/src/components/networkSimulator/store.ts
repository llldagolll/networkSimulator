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
import { initialNodes, initialEdges, initialLans } from "./Simulator/initial";

export type CustomNodeType = 'Client' | 'Web' | 'Gateway' | 'Lan'
interface Form {
  id: string,
  type: string,
  requestPort?: string
  responsePort?: string
  inboundPort?: string
  outboundPort?: string
}

type RFState = {
  nodes: Node[];
  lans: Node[];
  edges: Edge[];
  focusNode: Form;
  sidebarFormState: Form;
  showForm: boolean;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (newNode: Node) => void;
  setLans: (newLan: Node) => void;
  isGroup: (nodeId) => boolean;
  setGroup: ({ lanId, nodeId }) => void;
  unSetGroup: ({ lanId, nodeId }) => void;
  setFocusNode: (e, func) => void;
  setToggleForm: (state) => void;
  setSidebarFormState: (data) => void;
};



const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  lans: initialLans,
  edges: initialEdges,
  focusNode: { id: '', type: '' },
  showForm: false,
  sidebarFormState: { id: '', type: '' },
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
  isGroup: (nodeId) => {
    const n = get()
      .nodes.
      find(node => node.id == nodeId)

    return n.parentNode ? true : false
  },
  setGroup: ({ lanId, nodeId }) => {

    const l = get().nodes
      .find(node => node.id == lanId)
    l.expandParent = true

    const n = get().nodes
      .find(node => node.id == nodeId)
    n.parentNode = lanId
    n.extent = 'parent'
    n.position = { x: 15, y: 65 }
  },
  unSetGroup: ({ lanId, nodeId }) => {
    const l = get()
      .nodes
      .find(node => node.id == lanId)
    delete l.expandParent

    const n = get()
      .nodes.
      find(node => node.id == nodeId)
    delete n.parentNode
    delete n.extent
  },
  setToggleForm: (showForm) => {
    set({ showForm: !showForm })
  },
  setFocusNode: (e, setToggleForm) => {
    const nodeElm = e.target.innerText.split(' ')
    const node = {
      id: nodeElm[0],
      type: nodeElm[1]
    }
    set({ focusNode: node })
    setToggleForm()
  },
  setSidebarFormState: (data) => {
    set({ sidebarFormState: data })
  }
}))


export default useStore;
