import Menu from "../Menu/Menu"
import styles from '../CustomNodes.module.css'
import { useIsShowToggle } from "../../../hooks/useShowToggle"


const TemplateNode = ({ data, children }) => {
  const { show: showMenu, toggle: setToggleMenu } = useIsShowToggle();
  const { id, type } = data

  return (
    <>

      <div className={type === 'Lan' ? styles.lan : styles.node} onContextMenu={setToggleMenu}>
        {children}
      </div>
      {
        showMenu &&
        <div className={styles['modal-content']} >
          <Menu nodeId={id} />
          <br />
          <button className={styles['modal-button']} onClick={setToggleMenu}>Close</button>
        </div >
      }
    </>

  )
}

export default TemplateNode
