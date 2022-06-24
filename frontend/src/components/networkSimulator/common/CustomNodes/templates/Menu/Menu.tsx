import useStore from '../../../../store'
import styles from './Menu.module.css'


const Group = ({ lans, nodeId, setGroup, toggleMenu }) => {
  return (
    <>
      {
        lans.map((lan) =>
          <button
            onClick={async () => {
              await setGroup({ lanId: lan.id, nodeId })
              toggleMenu()
            }}
            className={styles.MenuItem}
            key={lan.id}
          >
            {`lan ${lan.id}`}
          </button>
        )
      }
    </>
  )
}

const UnGroup = ({ nodes, nodeId, unSetGroup, toggleMenu }) => {
  const getLanId = ({ nodes, nodeId }) => nodes.find(node => node.id === nodeId).parentNode

  const lanId = getLanId({ nodes, nodeId })
  return (
    <button
      onClick={async () => {
        await unSetGroup({ lanId, nodeId })
        toggleMenu()
      }}
      className={styles.MenuItem}
    >
      解除
    </button>
  )
}



const Menu = ({ nodeId, toggleMenu }) => {
  const { nodes, lans, isGroup, setGroup, unSetGroup } = useStore()
  const props = {
    lans,
    nodes,
    nodeId,
    setGroup,
    unSetGroup,
    toggleMenu
  }

  return (
    isGroup(nodeId) ? UnGroup(props) : Group(props)
  )
}

export default Menu
