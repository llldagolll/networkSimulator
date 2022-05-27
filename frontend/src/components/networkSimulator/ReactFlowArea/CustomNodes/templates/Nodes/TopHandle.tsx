import { Handle, Position } from "react-flow-renderer";
import styles from './Nodes.module.css'

const TopHandle = ({ nodeName }: { nodeName: string }) => {
  return (
    <div className={styles.node}>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">{nodeName}</label>
      </div>
    </div>
  );
}

export default TopHandle
