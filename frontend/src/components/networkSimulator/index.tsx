import Simulator from "./Simulator/Simulator";
import styles from './index.module.css'
import Sidebar from "./Sidebar/Sidebar";



const NetworkSimulator = () => {

  return (
    <div className={styles.flexContainer}>
      <div className={styles.networkSimulator}>
        <Simulator />
        <Sidebar />
      </div>
    </div >
  )
}

export default NetworkSimulator
