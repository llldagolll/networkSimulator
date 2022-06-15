import { useState } from "react"
import Menu from "../Menu/Menu"
import styles from '../CustomNodes.module.css'
import { useIsShowToggle } from "../../hooks/useShowToggle"
import { TemplateModal } from "./TemplateModal"



const TemplateNode = ({ nodeId, type, children, content }) => {

  const { show: showModal, toggle: setToggleModal } = useIsShowToggle();
  const { show: showMenu, toggle: setToggleMenu } = useIsShowToggle();


  return (
    <>
      <div className={type === 'Lan' ? styles.lan : styles.node} onDoubleClick={setToggleModal} onContextMenu={setToggleMenu}>
        {children}
      </div>
      {showModal &&
        <TemplateModal
          show={showModal}
          onClick={setToggleModal}
          content={content}
        />
      }
      {showMenu &&
        <TemplateModal
          show={showMenu}
          onClick={setToggleMenu}
          content={
            <Menu nodeId={nodeId} />
          }
        />
      }
    </>
  )

}

export default TemplateNode
