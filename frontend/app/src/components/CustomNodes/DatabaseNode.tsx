
import { Handle, Position } from "react-flow-renderer";
import { Label } from "./Label";
import TemplateNode from "./templates/TemplateNode";

const DatabaseNode = ({ data }) => {
  return (
    <TemplateNode
      data={data}
    >
      <Label data={data} />
      <Handle type="source" position={Position.Bottom} />
    </TemplateNode>
  );
}

export default DatabaseNode
