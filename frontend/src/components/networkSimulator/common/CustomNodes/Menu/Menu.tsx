import useStore from '../../../store'
import styles from './Menu.module.css'

const Menu = (nodeId) => {
  const { lans, setGroup } = useStore()

  return (
    <div className={styles.MenuBox}>
      {
        lans.map((lan) =>
          <button
            onClick={() => {
              setGroup({
                lanId: lan.id,
                nodeId: nodeId['nodeId']
              })
            }}
            className={styles.MenuItem}>
            {`lan ${lan.id}`}
          </button>
        )
      }
    </div>
  )
}

export default Menu
