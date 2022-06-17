import useStore from '../../../../store'
import styles from './Menu.module.css'

const Menu = ({ nodeId, setToggleMenu }) => {
  const { lans, isGroup, setGroup, unSetGroup } = useStore()

  return (
    <div>
      {
        lans.map((lan) =>
          <button
            onClick={() => {

              isGroup(nodeId)
                ? unSetGroup({ lanId: lan.id, nodeId })
                : setGroup({ lanId: lan.id, nodeId })

              setToggleMenu()
            }}
            className={styles.MenuItem}
            key={lan.id}
          >
            {`lan ${lan.id}`}
          </button>
        )
      }
    </div>
  )
}

export default Menu
