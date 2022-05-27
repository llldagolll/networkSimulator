import { InputClientNode, InputGatewayNode, InputLanNode, InputTextUpdaterNode, InputWebServerNode } from "./Nodes"
import styles from './index.module.css'

const Sidebar = () => {
  return (
    <>
      <div className={styles.description}>You can drag these nodes to the pane on the right</div>
      <InputGatewayNode />
      <InputClientNode />
      <InputLanNode />
      <InputTextUpdaterNode />
      <InputWebServerNode />
    </>
  )
}

export default Sidebar
