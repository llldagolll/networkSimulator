import { Handle, Position } from "react-flow-renderer";
import TemplateNode from "./atom/TemplateNode";
import styles from './Nodes.module.css'



const BothTopBottomHandle = ({ nodeName }: { nodeName: string }) => {
  return (
    <TemplateNode>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">{nodeName}</label>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </TemplateNode>
  );
}

export default BothTopBottomHandle
