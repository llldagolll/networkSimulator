import { useState } from "react"
import Menu from "../Menu/Menu"
import styles from '../CustomNodes.module.css'
import { useIsShowToggle } from "../../hooks/useShowToggle"
import { TemplateModal } from "./TemplateModal"



const TemplateNode = ({ nodeId, type, children, content }) => {

  const { show: showModal, toggle: setShowModal } = useIsShowToggle();
  const { show: showMenu, toggle: setShowMenu } = useIsShowToggle();


  return (
    <>
      <div className={type === 'Lan' ? styles.lan : styles.node} onDoubleClick={setShowModal} onContextMenu={setShowMenu}>
        {children}
      </div>
      {showModal &&
        <TemplateModal
          show={showModal}
          onClick={setShowModal}
          content={content}
        />
      }
      {showMenu &&
        <TemplateModal
          show={showMenu}
          onClick={setShowMenu}
          content={
            <Menu nodeId={nodeId} />
          }
        />
      }
    </>
  )

}

export default TemplateNode
