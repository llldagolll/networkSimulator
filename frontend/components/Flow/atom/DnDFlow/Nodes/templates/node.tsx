import { Handle, Position } from "react-flow-renderer";

const NodeTemplates = ({ nodeName }: { nodeName: string }) => {
  return (
    <div className="node">
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">{nodeName}</label>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default NodeTemplates
