import styles from './Menu.module.css'
import { group } from './types'

export const Group = ({ lans, nodeId, setGroup, toggleMenu }: group) => {

  return (
    <>
      {
        lans.map((lan) =>
          <button
            onClick={async () => {
              await setGroup({ lanId: lan.id, nodeId })
              await toggleMenu()
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