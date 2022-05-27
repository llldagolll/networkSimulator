import LanTemplates from "./templates/Lan/Lan";
import BothTopBottomHandle from "./templates/Nodes/BothTopBottomHandle";
import TopHandle from "./templates/Nodes/TopHandle";

export const ClientNode = () => {
  return (
    <TopHandle nodeName='Client' />
  );
}


export const TextUpdaterNode = () => {
  return (
    <BothTopBottomHandle nodeName='textUpdater' />
  );
}

export const GatewayNode = () => {
  return (
    <BothTopBottomHandle nodeName='Gateway' />
  );
}


export const LanNode = () => {
  return (
    <LanTemplates nodeName='Lan' />
  );
}


export const WebNode = () => {
  return (
    <BothTopBottomHandle nodeName='Web Server' />
  );
}
