import LanTemplates from "./templates/lan";
import NodeTemplates from "./templates/node";

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
