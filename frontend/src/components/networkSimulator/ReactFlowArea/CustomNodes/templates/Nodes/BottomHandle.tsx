import { Handle, Position } from "react-flow-renderer";
import styles from './Nodes.module.css'

const BottomHandle = ({ nodeName }: { nodeName: string }) => {
  return (
    <div className={styles.node}>
      <div>
        <label htmlFor="text">{nodeName}</label>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default BottomHandle
