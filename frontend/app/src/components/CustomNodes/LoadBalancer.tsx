import { Handle, Position } from "react-flow-renderer";
import { Label } from "./Label";
import TemplateNode from "./templates/TemplateNode";

const LoadBalancer = ({ data }) => {
  return (
    <TemplateNode
      data={data}
    >
      <Handle type="target" position={Position.Top} />
      <Label data={data} />
      <Handle type="source" position={Position.Bottom} />

    </TemplateNode>
  );
}

export default LoadBalancer
