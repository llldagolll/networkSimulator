import { Handle, Position } from "react-flow-renderer";
import TemplateNode from "./templates/TemplateNode";
import { Label } from "./Label";



export const ClientNode = ({ data }) => {
  return (
    <TemplateNode
      data={data}
    >
      <Handle type="target" position={Position.Top} />
      <Label data={data} />
    </TemplateNode>
  );
}


export const WebNode = ({ data }) => {
  return (
    <TemplateNode
      data={data}
    >
      <Handle type="source" position={Position.Top} />
      <Label data={data} />
      <Handle type="target" position={Position.Bottom} />

    </TemplateNode>
  );
}

export const GatewayNode = ({ data }) => {
  return (
    <TemplateNode
      data={data}
    >
      <Handle type="source" position={Position.Top} />
      <Label data={data} />
      <Handle type="target" position={Position.Bottom} />
    </TemplateNode>
  );
}


export const LanNode = ({ data }) => {
  return (
    <TemplateNode
      data={data}
    >
      <Label data={data} />
      <Handle type="source" position={Position.Bottom} />
    </TemplateNode>
  );
}


