import { useState } from "react"
import useGenerateFormValue from "../../hooks/useGenerateFormValue"
import Menu from "../Menu/Menu"
import { TemplateModal } from "../Modal/ModalForm"
import styles from '../CustomNodes.module.css'

const TemplateNode = ({ nodeId, type, children, content }) => {
  const [showModal, setShowModal] = useState(false)
  const [showMenu, setShowMenu] = useState(false)


  const openModal = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const closeModal = (e) => {
    e.preventDefault()
    setShowModal(false)
  }


  const openMenu = (e) => {
    e.preventDefault()
    setShowMenu(true)
  }

  const closeMenu = (e) => {
    e.preventDefault()
    setShowMenu(false)
  }

  return (
    <>
      <div className={type === 'Lan' ? styles.lan : styles.node} onDoubleClick={openModal} onContextMenu={openMenu}>
        {children}
      </div>
      <TemplateModal
        show={showModal}
        onClick={closeModal}
        content={content}
      />
      <TemplateModal
        show={showMenu}
        onClick={closeMenu}
        content={
          <Menu nodeId={nodeId} />
        }
      />
    </>
  )

}

export default TemplateNode
