import { Handle, Position } from "react-flow-renderer";
import TemplateNode from "./atom/TemplateNode";

const TopHandle = ({ nodeName }: { nodeName: string }) => {
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
