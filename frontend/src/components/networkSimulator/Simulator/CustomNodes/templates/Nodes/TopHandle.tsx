import { Handle, Position } from "react-flow-renderer";
import { CustomNodeType } from "../../../store";
import { TemplateNode } from "../common/TemplateNode/TemplateNode";

const TopHandle = ({ nodeName }: { nodeName: CustomNodeType }) => {
  return (
    <TemplateNode>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">{nodeName}</label>
      </div>
    </TemplateNode>
  );
}

export default TopHandle
