import { NodeInSidebar } from "./atom/NodesInSidebar"
import { TemplateSidebar } from "./atom/TemplateSidebar"
import styles from './Sidebar.module.css'
import { CustomNodeTypes } from "../Simulator/CustomNodeTypes"

export const AddNode = ({ sidebarStyle, onClick }) => {
  return (

    <TemplateSidebar sidebarStyle={sidebarStyle} onClick={onClick}>
      <div className={styles.description}>
        You can drag these nodes to the pane on the right
      </div>
      {
        Object.keys(CustomNodeTypes).map(
          node => <NodeInSidebar key={node} nodeName={node} />
        )
      }
    </TemplateSidebar>

  )
}
