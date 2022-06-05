import { Handle, Position } from "react-flow-renderer";
import { CustomNodeType } from "../../../store";
import { TemplateNode } from "../common/TemplateNode/TemplateNode";

const BottomHandle = ({ nodeName }: { nodeName: CustomNodeType }) => {
  return (
    <TemplateNode>
      < div >
        <label htmlFor="text">{nodeName}</label>
      </div >
      <Handle type="source" position={Position.Bottom} />
    </TemplateNode>
  );
}

export default BottomHandle
