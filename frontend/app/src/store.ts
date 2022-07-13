import { setFormValue } from "lib/setFormValue";
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
import { Form } from "./components/Sidebar/Sidebar";
import { initialNodes, initialEdges, initialLans } from "./components/Simulator/initial";

export type CustomNodeType = 'Client' | 'Web' | 'Gateway' | 'Lan'


export interface CustomNode extends Node {
  data: {
    id: string,
    type: string,
    label: string,
    requestPort?: string,
    responsePort?: string,
    inboundPort?: string,
    outboundPort?: string,
  };
}

type RFState = {
  nodes: CustomNode[];
  lans: CustomNode[];
  edges: Edge[];
  focusNode: Form;
  showForm: boolean;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (newNode: CustomNode) => void;
  setLans: (newLan: CustomNode) => void;
  isGroup: (nodeId) => boolean;
  setGroup: (any) => void
  unSetGroup: (any) => void
  setFocusNode: (e, func) => void;
  setToggleForm: (state) => void;
  submitForm: (Form) => void
};


const addExpandParentProperty = (lan) => {
  lan.expandParent = true
}
const addParentNodeProperty = ({ node, lanId }) => {
  node.parentNode = lanId
  node.extent = 'parent'
  node.position = { x: 15, y: 65 }
}


const getLan = ({ get, lanId }) => get().nodes.find(node => node.id == lanId)
const getNode = ({ get, nodeId }) => get().nodes.find(node => node.id == nodeId)


const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  lans: initialLans,
  edges: initialEdges,
  focusNode: { id: '', type: '' },
  showForm: false,
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
  setGroup: async ({ lanId, nodeId }) => {

    const lan = getLan({ get, lanId })
    const node = getNode({ get, nodeId })
    await Promise.all([lan, node])

    addExpandParentProperty(lan)
    addParentNodeProperty({ node, lanId })

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
  submitForm: (Form) => {
    set({
      nodes: get().nodes.map(node => node.id === Form.id ? setFormValue({ node, Form }) : node)
    })
  },
}))


export default useStore;
