import { Handle, Position } from "react-flow-renderer";
import TemplateNode from "./atom/TemplateNode";

const BottomHandle = ({ nodeName }: { nodeName: string }) => {
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
