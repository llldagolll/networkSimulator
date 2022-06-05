import { useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import { TemplateModal, GatewayModalForm, WebModalForm, ClientModalForm, LanModalForm } from "./templates/Modal/ModalForm";
import styles from './CustomNodes.module.css'

export const ClientNode = () => {

  const getNodeType = (e) => e.target.innerText
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
        <Handle type="target" position={Position.Top} />
        <div>
          <label htmlFor="text">Client</label>
        </div>

      </div>
      <TemplateModal show={show} onClick={closeModal} content={<ClientModalForm />} />
    </>
  );
}


export const GatewayNode = () => {

  const getNodeType = (e) => e.target.innerText
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
        <Handle type="target" position={Position.Top} />
        <div>
          <label htmlFor="text">Gateway</label>
        </div>
        <Handle type="source" position={Position.Bottom} />

      </div>
      <TemplateModal show={show} onClick={closeModal} content={<GatewayModalForm />} />
    </>
  );
}


export const LanNode = () => {
  const [show, setShow] = useState(false)

  const closeModal = (e) => {
    e.preventDefault()
    setShow(false)
  }

  const openModal = (e) => {
    e.preventDefault()
    setShow(true)
  }


  return (
    <>
      <div className={styles.lan} onDoubleClick={openModal}>
        <label htmlFor="text">Lan</label>
        <Handle type="source" position={Position.Bottom} />
      </div>
      <TemplateModal show={show} onClick={closeModal} content={<LanModalForm />} />
    </>
  );
}


export const WebNode = () => {
  // <BothTopBottomHandle nodeName='Web' />

  const getNodeType = (e) => e.target.innerText
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
        <Handle type="target" position={Position.Top} />
        <div>
          <label htmlFor="text">Web</label>
        </div>
        <Handle type="source" position={Position.Bottom} />

      </div>
      <TemplateModal show={show} onClick={closeModal} content={<WebModalForm />} />
    </>
  );
}
