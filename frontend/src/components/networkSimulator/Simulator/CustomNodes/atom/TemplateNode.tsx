import { useState } from "react"
import Menu from "../Menu/Menu"
import { TemplateModal } from "../Modal/ModalForm"
import styles from '../CustomNodes.module.css'
import { useIsShowToggle } from "../../hooks/useShowToggle"



const TemplateNode = ({ nodeId, type, children, content }) => {

  const { show: showModal, toggle: setShowModal } = useIsShowToggle();
  const { show: showMenu, toggle: setShowMenu } = useIsShowToggle();


  return (
    <>
      <div className={type === 'Lan' ? styles.lan : styles.node} onDoubleClick={setShowModal} onContextMenu={setShowMenu}>
        {children}
      </div>
      <TemplateModal
        show={showModal}
        onClick={setShowModal}
        content={content}
      />
      <TemplateModal
        show={showMenu}
        onClick={setShowMenu}
        content={
          <Menu nodeId={nodeId} />
        }
      />
    </>
  )

}

export default TemplateNode
