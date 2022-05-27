import NodeForm from "./Form";
import ReactFlowArea from "./ReactFlowArea";
import styles from './index.module.css'

const NetworkSimulator = () => {

  return (
    <div className={styles.flexContainer}>
      <div className={styles.Simulator}>
        <ReactFlowArea />
      </div>
      <div className={styles.SimulatorForm}>
        <NodeForm />
      </div>
    </div >
  )
}

export default NetworkSimulator
