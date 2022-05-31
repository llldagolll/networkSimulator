import {
  NodeInSidebar
} from "./NodesInSidebar/NodesInSidebar"
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <>
      <div className={styles.description}>You can drag these nodes to the pane on the right</div>
      <NodeInSidebar nodeName='Gateway' />
      <NodeInSidebar nodeName='Client' />
      <NodeInSidebar nodeName='Lan' />
      <NodeInSidebar nodeName='Web' />
    </>
  )
}

export default Sidebar
