import LanTemplates from "./templates/Lan/Lan";
import BothTopBottomHandle from "./templates/Nodes/BothTopBottom";
import TopHandle from "./templates/Nodes/TopHandle";

export const ClientNode = () => {
  return (
    <TopHandle nodeName='Client' />
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
    <BothTopBottomHandle nodeName='Web' />
  );
}
