import { NodeInSidebar } from "./atom/NodesInSidebar"
import styles from './Sidebar.module.css'
import { CustomNodeTypes } from "../Simulator/CustomNodeTypes"

export const AddNode = ({ setToggleSidebar }) => {
  return (

    <>
      <button onClick={setToggleSidebar} className={styles['close-sidebar']}>
        &times;
      </button>
      <div className={styles.description}>
        以下の要素をドラッグ&ドロップして構成図を作成してください
      </div>
      {
        Object.keys(CustomNodeTypes)
          .map(
            node => <NodeInSidebar key={node} nodeName={node} />
          )
      }
    </>

  )
}
