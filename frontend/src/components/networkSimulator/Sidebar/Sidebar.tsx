import {
  InputClientNode,
  InputGatewayNode,
  InputLanNode,
  InputWebServerNode
} from "./Nodes/Nodes"
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <>
      <div className={styles.description}>You can drag these nodes to the pane on the right</div>
      <InputGatewayNode />
      <InputClientNode />
      <InputLanNode />
      <InputWebServerNode />
    </>
  )
}

export default Sidebar
