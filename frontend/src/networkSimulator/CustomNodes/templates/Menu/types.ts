import { CustomNode } from "@/networkSimulator/store";

export interface group {
  nodeId: string;
  lanId?: string;
  toggleMenu: () => void
  lans?: CustomNode[]
  nodes?: CustomNode[]
  setGroup?: ({ lanId, nodeId }) => void;
  unSetGroup?: ({ lanId, nodeId }) => void;
}
