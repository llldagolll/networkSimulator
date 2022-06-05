import Simulator from "./Simulator/Simulator";
import styles from './index.module.css'



const NetworkSimulator = () => {

  return (
    <div className={styles.flexContainer}>
      <div className={styles.Simulator}>
        <Simulator />
      </div>
    </div >
  )
}

export default NetworkSimulator
