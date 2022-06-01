import ReactFlowArea from "./ReactFlowArea/ReactFlowArea";
import styles from './index.module.css'



const NetworkSimulator = () => {

  return (
    <div className={styles.flexContainer}>
      <div className={styles.Simulator}>
        <ReactFlowArea />
      </div>
    </div >
  )
}

export default NetworkSimulator
