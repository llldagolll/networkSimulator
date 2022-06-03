import { useState } from "react";
import { Modal, ModalForm } from "../Modal/ModalForm";
import styles from "./TemplateNode.module.css";



export const TemplateNode = (props) => {
  const [show, setShow] = useState(false)
  const openModal = (e) => {
    e.preventDefault()
    setShow(true)
  }

  const closeModal = (e) => {
    e.preventDefault()
    setShow(false)
  }


  return (
    <>
      <div className={styles.node} onDoubleClick={openModal}>
        {props.children}
      </div>
      <Modal show={show} onClick={closeModal} content={<ModalForm />} />
    </>
  );
}

export const TemplateLan = (props) => {
  const [show, setShow] = useState(false)
  const openModal = (e) => {
    e.preventDefault()
    setShow(true)
  }

  const closeModal = (e) => {
    e.preventDefault()
    setShow(false)
  }


  return (
    <>
      <div className={styles.lan} onDoubleClick={openModal}>
        {props.children}
      </div>
      <Modal show={show} onClick={closeModal} content={<ModalForm />} />
    </>
  );
}
