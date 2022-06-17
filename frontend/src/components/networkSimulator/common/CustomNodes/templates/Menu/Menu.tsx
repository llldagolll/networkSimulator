import useStore from '../../../../store'
import styles from './Menu.module.css'

const Menu = ({ nodeId, setToggleMenu }) => {
  const { lans, setGroup } = useStore()

  return (
    <div>
      {
        lans.map((lan) =>
          <button
            onClick={() => {
              setGroup({
                lanId: lan.id,
                nodeId: nodeId
              })
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
