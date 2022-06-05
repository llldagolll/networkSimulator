import { useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import { TemplateModal, GatewayModalForm, WebModalForm, ClientModalForm, LanModalForm } from "./Modal/ModalForm";
import styles from './CustomNodes.module.css'

export const ClientNode = ({ data }) => {

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
          <label htmlFor="text">{data.label}</label>
        </div>

      </div>
      <TemplateModal show={show} onClick={closeModal} content={<ClientModalForm nodeId={data.nodeId} />} />
    </>
  );
}


export const GatewayNode = ({ data }) => {

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
          <label htmlFor="text">{data.label}</label>
        </div>
        <Handle type="source" position={Position.Bottom} />

      </div>
      <TemplateModal show={show} onClick={closeModal} content={<GatewayModalForm nodeId={data.nodeId} />} />
    </>
  );
}


export const LanNode = ({ data }) => {
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
        <label htmlFor="text">{data.label}</label>
        <Handle type="source" position={Position.Bottom} />
      </div>
      <TemplateModal show={show} onClick={closeModal} content={<LanModalForm nodeId={data.nodeId} />} />
    </>
  );
}


export const WebNode = ({ data }) => {
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
          <label htmlFor="text">{data.label}</label>
        </div>
        <Handle type="source" position={Position.Bottom} />

      </div>
      <TemplateModal show={show} onClick={closeModal} content={<WebModalForm nodeId={data.nodeId} />} />
    </>
  );
}
