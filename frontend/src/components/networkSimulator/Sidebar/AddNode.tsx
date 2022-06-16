import { NodeInSidebar } from "./atom/NodesInSidebar"
import styles from './Sidebar.module.css'

export const AddNode = ({ sidebarStyle, setToggleSidebar }) => {
  return (

    <div className={styles.sidebar} style={sidebarStyle}>
      <div className={styles.description}>
        You can drag these nodes to the pane on the right
      </div>
      <a href="" onClick={setToggleSidebar} className={styles['close-sidebar']}>
        &times;
      </a>
      <p>
        <NodeInSidebar nodeName='Gateway' />
      </p>
      <p>
        <NodeInSidebar nodeName='Client' />
      </p>
      <p>
        <NodeInSidebar nodeName='Lan' />
      </p>
      <p>
        <NodeInSidebar nodeName='Web' />
      </p>
    </div>

  )
}
