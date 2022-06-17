import Menu from "./Menu/Menu"
import styles from '../CustomNodes.module.css'
import { useIsShowToggle } from "../../../hooks/useShowToggle"


const TemplateNode = ({ data, children }) => {
  const { show: showMenu, toggle: setToggleMenu } = useIsShowToggle();
  const { id, type } = data

  const toggleMenu = () => {
    if (type == 'Lan') {
      return
    }
    setToggleMenu()
  }

  return (
    <div className={styles['flex-container']} >
      <div
        className={type === 'Lan' ? styles.lan : styles.node}
        onContextMenu={toggleMenu}>
        {children}
      </div>
      {
        showMenu &&
        <div className={styles['modal-content']} >
          <Menu
            nodeId={id}
            setToggleMenu={setToggleMenu}
          />
          <br />
          <button className={styles['modal-button']} onClick={setToggleMenu}>Close</button>
        </div >
      }
    </div >

  )
}

export default TemplateNode
