
import { Handle, Position } from "react-flow-renderer";

const LanTemplates = ({ nodeName }: { nodeName: string }) => {
  return (
    <div className="lan">
      <div>
        <label htmlFor="text">{nodeName}</label>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default LanTemplates
