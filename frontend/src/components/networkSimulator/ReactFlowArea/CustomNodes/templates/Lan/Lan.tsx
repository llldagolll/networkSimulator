import { Handle, Position } from "react-flow-renderer";
import styles from './Lan.module.css'

const LanTemplates = ({ nodeName }: { nodeName: string }) => {
  return (
    <div className={styles.lan}>
      <div>
        <label htmlFor="text">{nodeName}</label>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default LanTemplates
