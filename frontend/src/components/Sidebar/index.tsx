import { InputClientNode, InputGatewayNode, InputLanNode, InputTextUpdaterNode, InputWebServerNode } from "./Nodes"
import styles from './index.module.css'

const Sidebar = () => {
  return (
    <aside>
      <div className={`${styles.description} ${styles.dndflowAside}`}>You can drag these nodes to the pane on the right</div>
      <InputGatewayNode />
      <InputClientNode />
      <InputLanNode />
      <InputTextUpdaterNode />
      <InputWebServerNode />
    </aside>
  )
}

export default Sidebar
