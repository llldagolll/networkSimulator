export interface FormInterface {
  nodeId: string;
  type: string;
  label: string;
  register: any;
}

export interface NodeData {
  type: string;
  id?: string;
  nodeId?: string;
  label?: string;
  requestPort?: string;
  responsePort?: string;
  inboundPort?: string;
  outboundPort?: string;
  ipAddress?: string;
  securityGroup?: string;
  subnetMask?: string;
  networkACL?: string;
  routeTable?: string;
}
