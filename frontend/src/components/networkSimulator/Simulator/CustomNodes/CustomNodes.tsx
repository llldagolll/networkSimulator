import { useRef, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import { TemplateModal, GatewayModalForm, WebModalForm, ClientModalForm, LanModalForm } from "./Modal/ModalForm";
import styles from './CustomNodes.module.css'
import useGenerateFormValue from "../hooks/useGenerateFormValue";


//TODO: 重複コードが多すぎる、ノードごとのフォームが完成したら共通部品化する。


export const ClientNode = ({ data }) => {


  const getNodeType = (e) => e.target.innerText
  const [show, setShow] = useState(false)
  const requestRef = useRef(null)
  const responseRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const formValue = useGenerateFormValue({
      id: data.id,
      type: data.type,
      requestPort: requestRef.current.value,
      responsePort: responseRef.current.value
    })

    sessionStorage.setItem(`${data.id}`, JSON.stringify(formValue))
    return
  }

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
      <TemplateModal
        show={show}
        onClick={closeModal}
        content={
          <ClientModalForm
            nodeId={data.id}
            onSubmit={onSubmit}
            requestRef={requestRef}
            responseRef={responseRef}
          />
        }
      />
    </>
  );
}


export const WebNode = ({ data }) => {

  const getNodeType = (e) => e.target.innerText
  const [show, setShow] = useState(false)
  const requestRef = useRef(null)
  const responseRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const formValue = useGenerateFormValue({
      id: data.id,
      type: data.type,
      requestPort: requestRef.current.value,
      responsePort: responseRef.current.value
    })

    sessionStorage.setItem(`${data.id}`, JSON.stringify(formValue))
    return
  }


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
      <TemplateModal show={show} onClick={closeModal}
        content={
          <WebModalForm
            nodeId={data.id}
            onSubmit={onSubmit}
            requestRef={requestRef}
            responseRef={responseRef}
          />}
      />
    </>
  );
}

export const GatewayNode = ({ data }) => {

  const getNodeType = (e) => e.target.innerText
  const [show, setShow] = useState(false)
  const inboundRef = useRef(null)
  const outboundRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const formValue = useGenerateFormValue({
      id: data.id,
      type: data.type,
      inboundPort: inboundRef.current.value,
      outboundPort: outboundRef.current.value,
    })

    sessionStorage.setItem(`${data.id}`, JSON.stringify(formValue))
    return
  }

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
      <TemplateModal show={show} onClick={closeModal}
        content={
          <GatewayModalForm
            nodeId={data.id}
            onSubmit={onSubmit}
            inboundRef={inboundRef}
            outboundRef={outboundRef}
          />
        }
      />
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

  const inboundRef = useRef(null)
  const outboundRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const formValue = useGenerateFormValue({
      id: data.id,
      type: data.type,
      inboundPort: inboundRef.current.value,
      outboundPort: outboundRef.current.value,
    })

    sessionStorage.setItem(`${data.id}`, JSON.stringify(formValue))
    return
  }

  return (
    <>
      <div className={styles.lan} onDoubleClick={openModal}>
        <label htmlFor="text">{data.label}</label>
        <Handle type="source" position={Position.Bottom} />
      </div>
      <TemplateModal show={show} onClick={closeModal}
        content={
          <LanModalForm
            nodeId={data.id}
            onSubmit={onSubmit}
            inboundRef={inboundRef}
            outboundRef={outboundRef}
          />}
      />
    </>
  );
}

