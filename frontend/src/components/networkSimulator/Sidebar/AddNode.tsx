import { NodeInSidebar } from "./atom/NodesInSidebar"
import styles from './Sidebar.module.css'

export const AddNode = ({ sidebarStyle, setToggleSidebar }) => {
  return (

    <div className={styles.sidebar} style={sidebarStyle}>
      <div className={styles.description}>
        You can drag these nodes to the pane on the right
      </div>
      <button onClick={setToggleSidebar} className={styles['close-sidebar']}>
        &times;
      </button>
      <NodeInSidebar nodeName='Gateway' />
      <NodeInSidebar nodeName='Client' />
      <NodeInSidebar nodeName='Lan' />
      <NodeInSidebar nodeName='Web' />
    </div>

  )
}
