import { useIsShowToggle } from "../Simulator/hooks/useShowToggle";
import {
  NodeInSidebar
} from "./NodesInSidebar/NodesInSidebar"
import styles from './Sidebar.module.css'

const Sidebar = () => {
  const { show: showSidebar, toggle: setToggleSidebar } = useIsShowToggle();
  let sidebarStyle = { width: showSidebar ? '30%' : '0' }

  return (
    <>
      <span onClick={setToggleSidebar} className={styles['toggle-sidebar']}>
        &#9776;
      </span>
      {showSidebar &&
        <div className={styles.sidebar} style={sidebarStyle}>
          <div className={styles.description}>
            You can drag these nodes to the pane on the right
          </div>
          <a href="#" onClick={setToggleSidebar} className={styles['close-sidebar']}>
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
      }
    </>
  )
}

export default Sidebar
