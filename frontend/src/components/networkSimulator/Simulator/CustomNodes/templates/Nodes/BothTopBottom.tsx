import { Handle, Position } from "react-flow-renderer";
import { TemplateNode } from "../common/TemplateNode/TemplateNode";
import { CustomNodeType } from "@/components/networkSimulator/Simulator/store"



const BothTopBottomHandle = ({ nodeName }: { nodeName: CustomNodeType }) => {
  return (
    <TemplateNode >
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">{nodeName}</label>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </TemplateNode>
  );
}

export default BothTopBottomHandle
