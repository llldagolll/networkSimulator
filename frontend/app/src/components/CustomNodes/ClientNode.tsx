import { Handle, Position } from "react-flow-renderer";
import { Label } from "./Label";
import TemplateNode from "./templates/TemplateNode";

const ClientNode = ({ data }) => {
  return (
    <TemplateNode
      data={data}
    >
      <Handle type="target" position={Position.Top} />
      <Label data={data} />
    </TemplateNode>
  );
}

export default ClientNode
