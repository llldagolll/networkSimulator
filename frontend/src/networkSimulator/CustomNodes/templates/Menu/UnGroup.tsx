import styles from './Menu.module.css'
import { group } from './types';

export const UnGroup = ({ nodes, nodeId, unSetGroup, setToggleMenu }: group) => {

  const getLanId = ({ nodes, nodeId }) => nodes.find(node => node.id === nodeId).parentNode

  console.log(`UnGroup`);

  const lanId = getLanId({ nodes, nodeId })
  return (
    <button
      onClick={async () => {
        unSetGroup({ lanId, nodeId })
        setToggleMenu()
      }}
      className={styles.MenuItem}
    >
      解除
    </button>
  )
}
