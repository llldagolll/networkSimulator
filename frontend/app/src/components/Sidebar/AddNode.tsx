import { NodeInSidebar } from "./atom/NodesInSidebar"
import { TemplateSidebar } from "./atom/TemplateSidebar"
import styles from './Sidebar.module.css'

export const AddNode = ({ sidebarStyle, onClick }) => {
  return (

    <TemplateSidebar sidebarStyle={sidebarStyle} onClick={onClick}>
      <div className={styles.description}>
        You can drag these nodes to the pane on the right
      </div>
      <NodeInSidebar nodeName='Gateway' />
      <NodeInSidebar nodeName='Client' />
      <NodeInSidebar nodeName='Lan' />
      <NodeInSidebar nodeName='Web' />
      <NodeInSidebar nodeName='Database' />
    </TemplateSidebar>

  )
}
