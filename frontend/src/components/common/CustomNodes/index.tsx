import LanTemplates from "./templates/Lan/Lan";
import NodeTemplates from "./templates/Node/Node";

export const ClientNode = () => {
  return (
    <NodeTemplates nodeName='Client' />
  );
}


export const TextUpdaterNode = () => {
  return (
    <NodeTemplates nodeName='textUpdater' />
  );
}

export const GatewayNode = () => {
  return (
    <NodeTemplates nodeName='Gateway' />
  );
}


export const LanNode = () => {
  return (
    <LanTemplates nodeName='Lan' />
  );
}


export const WebNode = () => {
  return (
    <NodeTemplates nodeName='Web Server' />
  );
}
