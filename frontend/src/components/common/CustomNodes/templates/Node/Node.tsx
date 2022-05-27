import { Handle, Position } from "react-flow-renderer";
import styles from './Node.module.css'

const NodeTemplates = ({ nodeName }: { nodeName: string }) => {
  return (
    <div className={styles.node}>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">{nodeName}</label>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default NodeTemplates
