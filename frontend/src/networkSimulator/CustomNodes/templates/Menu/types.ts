import { CustomNode } from "../../../store";

export interface group {
  nodeId: string;
  toggleMenu: () => void
  lans?: CustomNode[]
  nodes?: CustomNode[]
  setGroup?: ({ lanId, nodeId }) => void;
  unSetGroup?: ({ lanId, nodeId }) => void;
}
