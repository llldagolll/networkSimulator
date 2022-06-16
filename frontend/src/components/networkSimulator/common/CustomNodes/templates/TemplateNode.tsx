import Menu from "../Menu/Menu"
import styles from '../CustomNodes.module.css'
import { useIsShowToggle } from "../../../hooks/useShowToggle"
import { TemplateModal } from "./TemplateModal"



const TemplateNode = ({ data, children }) => {
  const { show: showMenu, toggle: setToggleMenu } = useIsShowToggle();
  const { id, type } = data


  return (
    <>
      <div className={type === 'Lan' ? styles.lan : styles.node} onContextMenu={setToggleMenu}>
        {children}
      </div>
      {showMenu &&
        <TemplateModal
          show={showMenu}
          onClick={setToggleMenu}
          content={
            <Menu nodeId={id} />
          }
        />
      }
    </>
  )

}

export default TemplateNode
